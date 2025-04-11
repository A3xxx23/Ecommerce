import { ReactNode } from "react";

interface Props{
    className?: string;
    tittleSection?: string;
    children: ReactNode
}

export const SectionFormProducts = ({className, tittleSection, children}: Props) => {
    return (
        <div className={`bg-white border border-gray-300 shadow-sm flex flex-col gap-4 p-7 h-fit
        ${className}`}
        >
            {
                tittleSection && (
                    <h2 className="font-bold tracking-tight text-xl text-stone-950">
                        {tittleSection}:
                    </h2>
                )
            }
            {children}
        </div>
    );
};