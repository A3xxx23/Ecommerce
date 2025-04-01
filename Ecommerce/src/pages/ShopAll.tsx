import { useState } from "react";
import { CardProducts } from "../components/products/CardProducts"
import { ContainerFilter } from "../components/products/ContainerFilter";
import { PreparedProducts } from "../helpers"
import { useFilteredProducts} from "../hooks";
import { Pagination } from "../components/shared/Pagination";

export const ShopAll = () => {

    const [page, setPage] = useState(1);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

    const {data: products = [], isLoading, totalProducts,
    } = useFilteredProducts({
        page, 
        brand: selectedBrands,
    });

    const preparedProducts = PreparedProducts(products);

    return (
    <>
        <h1 className="text-5xl font-semibold text-center mb-12 text-gray-900">
            All Products
        </h1>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 text-black font-bold">
            {/*Filter*/}
            <ContainerFilter
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            
            />

            {
                isLoading ? (
                    <div className="flex justify-center items-center col-span-2 h-[500px]">
                        <p className="text-2xl text-gray-500 text-center">Loading...</p>
                    </div>
                ) : (
                    <div className="col-span-2 lg:col-span-2 xl:col-span-4 flex gap-12 flex-col">
                    <div className="grid gap-3 grid-cols-2 gap-y-10 xl:grid-cols-4">
                        {
                            preparedProducts.map(product => (
                                <CardProducts
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            colors={product.colors}
                            img={product.images[0]}
                            slug={product.slug}
                            variants={product.variants}
                        />
                        
                         ))}
                    </div>

                    {/* Pagination component*/}
                    <Pagination
                    page={page}
                    setPage={setPage}
                    totalItems={totalProducts}
                    />
                </div>

                )
            }
        </div>
     </>
    )
}