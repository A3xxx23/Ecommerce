import { useQuery } from "@tanstack/react-query";
import { getOrdersByCustomerId } from "../../actions";


export const useOrders = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['orders'],
        queryFn: getOrdersByCustomerId
    });

    return {
        data,
        isLoading,
        error,
    }
};