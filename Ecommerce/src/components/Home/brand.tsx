const brands = [
    
    {
        image: '/brands/chrome.png',
        alt: 'Chrome Hearts',
    },
    {
        image: '/brands/denimTears.png',
        alt: 'Denim Tears',
    },
    {
        image: '/brands/erickemmanuel.png',
        alt: 'erick emmanuel',
    },
    {
        image: '/brands/essentials.png',
        alt: 'essentials',
    },
    {
        image: '/brands/galleryDept.png',
        alt: 'Gallery Dept',
    },
    {
        image: '/brands/NB.png',
        alt: 'New Balance',
    },
    {
        image: '/brands/Nike.png',
        alt: 'Nike',
    },
    {
        image: '/brands/RHUDE.png',
        alt: 'RHUDE',
    },
    {
        image: '/brands/YZY.png',
        alt: 'Yezzy',
    },
]

export const Brands = () => {
    return (
        <div className="flex flex-col items-center gap-3 pt-16 pb-12">
            <h2 className="font-bold text-2xl text-black">Brands available</h2>

            <p className="w-2/3 text-center text-sm md:text-base text-black">
                Discover our exclusive collection of clothing from top brands at unbeatable prices.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-8 items-center md:grid-cols-6">
                {
                    brands.map( (brand,index) =>
                        <div key={index}>
                            <img 
                        src={brand.image} 
                        alt={brand.alt} 
                        className="w-20 h-20 object-contain"/>
                        </div>
                    )
                }

            </div>

        </div>
    )
}