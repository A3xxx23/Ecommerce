import { Color, Product, variantProduct } from "../interfaces";

//Funcion para el precio en dolar

export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits:2,
    }
    ).format(price)
};

//prepare prodcuts

export const PreparedProducts = (products: Product[]) =>{
    return products.map(product =>{

        //variants for colors

        const colors = product.variants.reduce((acc: Color[], variant: variantProduct ) => {
            const existingColor = acc.find(item => item.color === variant.color)

            if(existingColor){
                //if color exist,compare price existing and variant
                existingColor.price = Math.min(existingColor.price,variant.price)
            } //mantener min

            else{
                acc.push({
                    color: variant.color,
                    price: variant.price,
                    name: variant.color_name,
                });
            }

            return acc;

        }, []);

        //obtener precio bajo de variants

        const price = Math.min(...colors.map(item => item.price));

        //return product format
        return{
            ...product,
            price,
            colors: colors.map(({name, color}) => ({name, color})),
            variants: product.variants,
        }

    });
}