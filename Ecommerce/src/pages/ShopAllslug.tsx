import { Link } from "react-router";
import { Separator } from "../components/shared/Separator"
import { formatPrice } from "../helpers"
import { IconMinus, IconPlus, IconTruckDelivery,IconMessage } from '@tabler/icons-react';
import { ProductDescription } from "../components/one-product/ProductDescription";
import { GridImages } from "../components/one-product/GridImages";

export const ShopAllslug = () => {
  return (
  <>
      <div className="h-fit flex flex-col md:flex-row gap-16 mt-8">
        {/* Grid para imagenes de cada producto*/}

        <GridImages images={[]}/>

        <div className="flex-1 space-y-5">
            <h1 className="text-3xl font-bold tracking-tight text-black ">
                Hellstar Cap

            </h1>

            <div className="flex gap-5 items-center">
                <span className="tracking-wide text-lg font-semibold text-black">
                    {formatPrice(10000)}

                </span>

                <div className="relative">
                    {/* cuando este agotado */}

                    <span className="text-black">Sold Out</span>

                </div>

            </div>

            <Separator/>

            {/* caracteristicas del producto */}

            <ul className="space-y-2 ml-7 my-10" >
                <li className="text-sm flex items-center gap-2 tracking-tight font-medium text-black">
                    <span className="w-[5px] rounded-full bg-black h-[5px]"/>
                    OS
                </li>
            </ul>

            <div className="flex gap-3 flex-col text-black">
                <p>
                   Color: Black
                </p>
                <div className="flex gap-3">
                    <button 
                    className={`w-8 h-8 rounded-full flex justify-center items-center ${
                        true ? "border border-slate-800" : ""
                    }`}
                    >

                        <span className="w-[26px] h-[26px] rounded-full"
                        style={{background: "#000"}}
                        />
                    </button>
                </div>  
            </div>

            {/* option size */}

            <div className="flex flex-col gap-3">
                <p className="text-xs font-medium text-black">
                available size

                </p>

                <div className="flex gap-3">
                    <select className="border border-gray-300 rounded-lg px-3 py-1">
                        <option value="">OS</option>

                    </select>

                </div>
            </div>

            {/* Comprar */}

            {
                false ? (
                    <button 
                    className="bg-[#f3f3f3] uppercase font-semibold tracking-widest text-xs py-4 rounded-full transition-all
                    duration-300 hover:bg-[#e2e2e2] w-full text-slate-300"
                    disabled
                    >
                        Sold Out
                    </button>
                ) : (
                    <>
                    {/* Contador */}
                    <div className="space-y-3">
                        <p className="text-sm font-medium text-black">
                            Quantity:
                        </p>

                        <div className="flex gap-8 px-5 py-3 border border-slate-200 w-fit rounded-full">
                            <button>
                                <IconMinus size={15} className="text-black" />
                            </button>
                            <span className="text-slate-500 text-sm">1</span>
                            <button>
                                <IconPlus size={15} className="text-black" />
                            </button>

                        </div>
                    </div>

                    {/* Botones de accion */}
                    <div className="flex flex-col gap-3">
                        <button className="bg-[#f3f3f3] uppercase font-semibold tracking-widest text-xs py-4 rounded-full transition-all
                    duration-300 hover:bg-[#e2e2e2] text-black">
                        Add to cart
                        </button>
                        <button
                        className="bg-black hover:bg-slate-900 text-white uppercase font-semibold tracking-widest text-xs py-4 rounded-full"
                        >
                            Buy Now
                        </button>
                    </div>
                    </>
                )} 

                <div className="flex pt-2">
                    <div className="flex flex-col gap-1 flex-1 items-center">
                        <IconTruckDelivery size = {35} className="text-slate-950"/>
                        <p className="text-xs font-semibold text-black">Free Shipping</p>
                    </div>

                    <Link to = '#' className="flex flex-col gap-1 flex-1 items-center justify-center">
                        <IconMessage size={30} className="text-slate-950"/>
                        <p className="flex flex-col items-center text-xs text-black">
                            <span className="font-semibold text-slate-950">
                            Do you need help?
                            </span>
                            Contact us here
                        </p>
                    </Link>


                    </div>
                </div>
            
      </div>

      {/* Descripcion del producto */}

      <ProductDescription/>


  </>
  );
};