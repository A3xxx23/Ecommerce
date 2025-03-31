import { Separator } from "../shared/Separator";

const availableBrands = [
    "Nike",
    "Chrome Hearts",
    "Erick Emanuel",
    "Essentials",
    "Gallery Dept",
    "New Balance",
    "RHUDE",
    "Adidas",
    "Denim Tears",
    "Godspeed"
]

export const ContainerFilter = () => {
    return <div className="p-5 border border-slate-200 rounded-lg h-fit col-span-2 lg:col-span-1">
        <h3 className="text-xl mb-4 font-semibold">
            Filters
        </h3>

        {/* para separar la parte de los filtros del titulo*/}
        <Separator/>

        <div className="gap-2 flex flex-col">
            {
                availableBrands.map(brand =>(
                    <label key={brand} className="inline-flex items-center" >
                        <input 
                        type='checkbox'
                        className="text-black border-black focus:ring-black accent-black"
                        />
                        <span className="ml-2 text-gray-700 text-sm cursor-pointer">{brand}</span>

                    </label>

                ))
            }

        </div>

    </div>;

};