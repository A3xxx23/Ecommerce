import { CardProducts } from "../products/CardProducts";
import {PreparedProducts} from '../../interfaces'

interface Props {
    title: string;
    products: PreparedProducts[];
}

export const Products = ( {title,products } :Props) => {
    return(
        <div className="my-32">
            <h2 className="text-3xl font-semibold text-center mb-8 w-full text-black lg:ml-20 md:ml-16">
                {title}
            </h2>

            <div className="grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:ml-20 md:ml-16 sm:ml-12">
                {products.map(product =>(
                    <CardProducts
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    colors={product.colors}
                    img={product.img[0]}
                    slug={product.slug}
                    variants ={product.variants}
                    />

                ))}
                

            </div>

        </div>
    )
}
