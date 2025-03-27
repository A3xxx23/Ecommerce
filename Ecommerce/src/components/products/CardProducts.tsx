import { Link } from "react-router-dom";
import { IconPlus } from '@tabler/icons-react';
import { useState } from "react";
import { variantProduct } from "../../interfaces";

interface Props {
    img: string;
    name: string;
    price: number;
    slug: string;
    colors: {name: string; color: string}[];
    variants: variantProduct[];
}

export const CardProducts = ({
    img,
    name,
    price,
    slug,
    colors,
    variants
}:Props) => {

    // set del color y agregando el active color como State

    const [activeColor, setActiveColor] = useState<{
        name:string;
        color: string;
    }>
    
    (colors[0]);

    // Tomar el variant que seleccione el user. The find() method in JavaScript looks through 
    // an array and returns the first item that meets a specific condition you provide.

    const selectedVariant = variants.find(
        variant => variant.color === activeColor.color
    );

    //para saber el stock

    const stock = selectedVariant?.stock || 0;
    
    return (
        <div className="flex flex-col gap-6 relative">
            <Link to={`/products/${slug}`} className="flex relative group overflow-hidden">
                <div className="flex h-[350px] w-full items-center justify-center py-2 lg:h-[250px]">
                    <img 
                    src={img} 
                    alt={name} 
                    className="object-contain h-full w-full"
                    />
                </div>

                <button className=" bg-black border-slate-200 text-white absolute w-full bottom-0 py-3 rounded-3xl flex items-center justify-center gap-1
                text-sm font-medium hover:bg-stone-400 translate-y-[100%] transition-all duration-300 group-hover:translate-y-0">
                    <IconPlus/>
                    Add cart

                </button>
            </Link>

            <div className="flex flex-col gap-1 items-center">
                <p className="text-[15px] font-medium text-black">{name}</p>
                <p className="text-[15px] font-medium text-black">{price}</p>
               
               <div className="flex gap-3">
                {
                    colors.map (color =>(
                        <span key={color.color}
                        className="grid place-items-center w-5 h-5 rounded-full cursor-pointer"
                        >
                            <span className="w-[14px] h-[14px] rounded-full"
                            style={{
                                backgroundColor: color.color,
                            }}
                            />
                            
                        </span>
                    ))
                }

               </div>
            </div>

            <div className="absolute top-2 left-2">
                {
                    stock === 0 && <span>Agotado</span>
                }

            </div>
        </div>

    )
}