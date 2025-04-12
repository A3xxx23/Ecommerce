import { OrderInput } from "../interfaces"
import { supabase } from "../supabase/client";

export const createOrder = async (order: OrderInput) => {
    
    //1. obteniendo usuario autenticado + cliente de customer

    const {data , error: errorUser } = await supabase.auth.getUser();

    if(errorUser){
        console.log(errorUser);
        throw new Error('Error getting user');
    }

    const userId = data.user.id;

    // 2. obtener cliente de supabase de customer

    const {data: customer, error: errorCustomer } = await supabase 
    .from('customers')
    .select('id')
    .eq('user_id', userId )
    .single(); //obtener un solo registro

    if (errorCustomer){
        console.log(errorCustomer);
        throw new Error('Error getting customer');
    }

    const customerId = customer.id

    //3. verificar si hay stock para cada variante agregada al carrito

    for (const item of order.cartItems){
        const {data: variantData, error: variantError } = await supabase
        .from('variants')
        .select('stock')
        .eq('id', item.variantId)
        .single();

        if (variantError) {
            console.log(variantError);
            throw new Error(variantError.message);
        }

        if (variantData.stock < item.quantity){
            throw new Error('Not enough stock for this variant');
        }
    }
    

    // 4. guardar direccion de envio por usuario
    const {data: addressData, error: addressError } = await supabase
    .from('addresses')
    .insert({
        address_line1: order.address.addressLine1,
        address_line2: order.address.addressLine2,
        city: order.address.city,
        state: order.address.state,
        postal_code: order.address.postalCode,
        country: order.address.country,
        customer_id: customerId,
    })
    .select()
    .single(); 

    if(addressError){
        console.log(addressError);
        throw new Error('Error getting address');
    }

    //5. crear orden

    const {data:orderData, error: orderError} = await supabase
    .from('orders')
    .insert({
        customer_id: customerId,
        address_id: addressData.id,
        total_amount: order.totalAmount,
        status: 'pending',
    })
    .select()
    .single();

    if(orderError){
        console.log(orderError);
        throw new Error(orderError.message);
    }

    //Guardar detalles de la orden

    const orderItems = order.cartItems.map(item =>({
        order_id: orderData.id,
        variant_id: item.variantId,
        quantity: item.quantity,
        price: item.price,
    }))

    //6. ahora integrar en BD

    const {error: orderItemsError} = await supabase 
    .from('order_items')
    .insert(orderItems)

    if(orderItemsError){
        console.log(orderItemsError);
        throw new Error(orderItemsError.message);
    }

    //actualizar stock de variantes

    for (const item of order.cartItems) {

        //7. obtener el stock actual de la variante

        const {data: variantData} = await supabase
        .from('variants')
        .select('stock')
        .eq('id', item.variantId)
        .single();

        if (!variantData){
            throw new Error('Error getting variant');
        }

        //actualizar el stock

        const newStock = variantData.stock - item.quantity;

        //8. actualizar el stock en la BD

        const {error: updateStockError} = await supabase
        .from('variants')
        .update({
            stock:newStock,
        })
        .eq('id', item.variantId)

        if(updateStockError){
            console.log(updateStockError);
            throw new Error('Error updating stock');
        }
    }

    return orderData;
};

///9. obtener ordenes individuales
 export const getOrdersByCustomerId = async () => {

    const {data, error} = await supabase.auth.getUser();

    if(error) {
        console.log(error);
        throw new Error(error.message);
    }

    const {data: customer, error: customerError } = await supabase
    .from('customers')
    .select('id')
    .eq('user_id', data.user.id)
    .single();

    if(customerError){
        console.log(customerError);
        throw new Error(customerError.message);
    }

    //extrar ordenes de la BD

    const customerId = customer.id;

    const { data: orders, error: ordersError} = await supabase
    .from('orders')
    .select('id, total_amount, status, created_at')
    .eq('customer_id', customerId)
    .order('created_at', {
        ascending: false,
    });

    if(ordersError){
        console.log(ordersError);
        throw new Error(ordersError.message);
    }

    return orders;
 };

 export const getOrderById = async (orderId: number) => {
    const {data, error} = await supabase.auth.getUser();

    if(error) {
        console.log(error);
        throw new Error(error.message);
    }

    const {data: customer, error: customerError } = await supabase
    .from('customers')
    .select('id')
    .eq('user_id', data.user.id)
    .single();

    if(customerError){
        console.log(customerError);
        throw new Error(customerError.message);
    }

    const customerId = customer.id;

    // 10. extrar ordenes de la BD

    const {data: order , error: userError} = await supabase
    .from('orders')
    .select('*, addresses(*), customers(full_name, email), order_items(quantity, price, variants(color_name, size, products(name, images)))')
    .eq('customer_id', customerId)
    .eq('id', orderId)
    .single();

    if(userError){
        console.log(userError);
        throw new Error(userError.message)
    }

    return {
        customer: {
            email: order?.customers?.email,
            full_name: order.customers?.full_name,
        },
        totalAmount:order.total_amount,
        status: order.status,
        created_at: order.created_at,
        address: {
            addressLine1: order.addresses?.address_line_1,
            addressLine2: order.addresses?.address_line_2,
            city: order.addresses?.city,
            state: order.addresses?.state,
            postalCode: order.addresses?.postal_code,
            country: order.addresses?.country,
        },
        orderItems: order.order_items.map((item: { quantity: number; price: number; variants: { color_name: string; size: string; products: { name: string; images: string[] } } }) => ({
            quantity: item.quantity,
            price: item.price,
            color_name: item.variants?.color_name, 
            size: item.variants?.size,
            productName: item.variants?.products?.name,
            productImage: item.variants?.products?.images[0],
        }))
        
    };

 }


 //////////// ADMIN /////////////////

 export const getAllOrders = async () => {
    
    const {data, error} = await supabase
    .from('orders')
    .select('id,total_amount, status, created_at, customers(full_name, email)')
    .order('created_at', { ascending: false });

    if(error){
        console.log(error);
        throw new Error('Error getting orders');
    }

    return data;
 };

 //Modificar estado de la orden

 export const updateOrderStatus = async ({id, status}: {id: number, status: string}) => {

    const {error} = await supabase
    .from('orders')
    .update({status})
    .eq('id', id);

    if(error){
        console.log(error);
        throw new Error('Error updating order status');
    }
 }

 //Funcion para obtener lo que es el id del params y con el mismo tomar el de la orden completa

 export const getOrderByIdAdmin = async (id: number) => {
    const {data: order , error: userError} = await supabase
    .from('orders')
    .select('*, addresses(*), customers(full_name, email), order_items(quantity, price, variants(color_name, size, products(name, images)))')
    .eq('id', id)
    .single();

    if(userError){
        console.log(userError);
        throw new Error(userError.message)
    }

    return {
        customer: {
            email: order?.customers?.email,
            full_name: order.customers?.full_name,
        },
        totalAmount:order.total_amount,
        status: order.status,
        created_at: order.created_at,
        address: {
            addressLine1: order.addresses?.address_line_1,
            addressLine2: order.addresses?.address_line_2,
            city: order.addresses?.city,
            state: order.addresses?.state,
            postalCode: order.addresses?.postal_code,
            country: order.addresses?.country,
        },
        orderItems: order.order_items.map((item: { quantity: number; price: number; variants: { color_name: string; size: string; products: { name: string; images: string[] } } }) => ({
            quantity: item.quantity,
            price: item.price,
            color_name: item.variants?.color_name, 
            size: item.variants?.size,
            productName: item.variants?.products?.name,
            productImage: item.variants?.products?.images[0],
        }))
        
    };
 }