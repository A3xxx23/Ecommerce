import { useQuery } from "@tanstack/react-query";
import { getOrderById } from "../../actions";

export const useOrder= (orderId: number) => {

    const { data , isLoading, isError} = useQuery({
        queryKey: ['order', orderId],
        queryFn: () => getOrderById(orderId),
        enabled: !!orderId, //si es nulo o undefines con la doble negacion es false
        retry: false, //no se va a volver a intentar en caso de fallar
    });

    return {
        data,
        isLoading,
        isError,
    };
};