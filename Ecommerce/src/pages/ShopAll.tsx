import { CardProducts } from "../components/products/CardProducts"
import { ContainerFilter } from "../components/products/ContainerFilter";
import { allProducts } from "../data/initialData"
import { PreparedProducts } from "../helpers"

export const ShopAll = () => {

    const preparedProducts = PreparedProducts(allProducts);


    return (
    <>
        <h1 className="text-5xl font-semibold text-center mb-12 text-gray-900">
            All Products
        </h1>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 text-black font-bold">
            {/*Filter*/}
            <ContainerFilter/>

            <div className="col-span-2 lg:col-span-2 xl:col-span-4 flex gap-12 flex-col">
                <div className="grid gap-3 grid-cols-2 gap-y-10 xl:grid-cols-4">
                    {
                        preparedProducts.map(product => (
                            <CardProducts
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        colors={product.colors}
                        img={product.img[0]}
                        slug={product.slug}
                        variants={product.variants}
                    />
                     ))}
                </div>
            </div>
        </div>
     </>
    )
}