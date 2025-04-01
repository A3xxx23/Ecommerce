import { supabase } from "../supabase/client"

////funcion de obtener productos

export const getProducts = async () => {
    const {data: products, error} = await supabase
    .from('products')
    .select('*, variants(*)')
    .order('created_at', {ascending:false});

    if(error){
        console.log(error.message);
        throw new Error(error.message);
    }

    return products
};

////funcion de filtrado de productos

export const getFilteredProducts = async ({ 
    page = 1, 
    brand = [],
}: {
    page: number,
    brand: string[];
}) => {

    const itemsPerPage = 12;
    const from = (page - 1) * itemsPerPage;
    const to = from + itemsPerPage - 1; 

    let query = supabase
    .from('products')
    .select('*, variants(*)', {count:'exact'}) //el count me devuelve el total de registros en mi BD
    .order('created_at', {ascending:false})
    .range(from, to);

    //filtrar las brands

    if(brand.length > 0){
        query = query.in('brand', brand);
    }

    // Desestructuracion de objetos

    const {data, error, count} = await query;

    if(error){
        console.log(error.message);
        throw new Error(error.message);
    }

    return { data, count};

};

/// Funcion para obtener el producto mas reciente

export const getRecentProducts = async () => {
    const { data:products, error} = await supabase
    .from('products')
    .select('*, variants(*)',) 
    .order('created_at', {ascending:false})
    .limit(4);

    if(error){
        console.log(error.message);
        throw new Error(error.message);
    }

    return products;
};

/// Funcion para obtener los productos random

export const getRandomProducts = async () => {
    const { data:products, error} = await supabase
    .from('products')
    .select('*, variants(*)',) 
    .order('created_at', {ascending:false})
    .limit(20);

    if(error){
        console.log(error.message);
        throw new Error(error.message);
    }

    const randomProducts = products
    .sort(()=> 0.5 - Math.random())
    .slice(0, 8);

    return randomProducts;
};