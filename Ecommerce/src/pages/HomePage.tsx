import { Brands } from '../components/Home/brand'
import {Products} from '../components/Home/Products'
import { Services } from '../components/Home/Services'
import { newArrivalsProducts } from '../data/initialData'
import { PreparedProducts } from '../helpers'

export const HomePage = () => {

    const preparednewArrivalsProducts = PreparedProducts(newArrivalsProducts);
    
    return (
        <div>
            <Services/>

            <Products
            title='New Arrivals' 
            products={preparednewArrivalsProducts}
            />

            <Products
            title='Featured Products' 
            products={[]}
            />

            <Brands/>
  
        </div>
    )
}
