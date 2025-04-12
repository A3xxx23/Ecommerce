import { TableOrdersAdmin } from "../../components/dashboard";
import { Loader } from "../../components/shared/Loader";
import { useAllOrders } from "../../hooks/orders/useAllOrders";


export const DashboardOrdersPage = () => {

  const { data , isLoading } = useAllOrders();

  if ( isLoading || !data ) return <Loader/>; 


  return (<div className="space-y-5">
    <h1 className="text-2xl font-bold text-gray-900">
        Orders
    </h1>

    <TableOrdersAdmin orders={data}/>
    
  </div>
  );
};