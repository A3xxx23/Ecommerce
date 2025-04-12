import { formatDateLong, formatPrice } from "../../../helpers";
import { OrderWithCustomer } from "../../../interfaces";

const TableHeaders = [
    'Client',
    'Date',
    'Status',
    'Total',
];

const statusOptions = [
    { value: 'pending', label: 'Pending' },
    { value: 'Paid', label: 'Paid' },
    { value: 'Shipped', label: 'Shipped' },
    { value: 'Delivered', label: 'Delivered' },
];

interface Props {
    orders: OrderWithCustomer[];
}

export const TableOrdersAdmin = ({orders}: Props) => {
  return (
    <div className="relative w-full h-full">
        <table className="text-sm w-full caption-bottom overflow-auto">
            <thead className="border-b border-gray-200 pb-3">
                <tr className="text-sm font-bold text-gray-950">
                    {
                        TableHeaders.map((header, index) => (
                            <th
                            key={index}
                            className="h-12 px-4 text-left"
                            >
                                {header}
                            </th>
                        ))}

                </tr>

            </thead>

            <tbody className='[&_tr:last-child]:border-b-0'>
                {
                    orders.map((order) => (
                        <tr 
                        key={order.id}
                        className="cursor-pointer hover:bg-gray-200 transition-colors duration-200"
                        >
                            <td className="p-4 font-medium tracking-tighter flex flex-col gap-1">
                                <span className="font-semibold text-gray-600">
                                    {order.customers?.full_name}
                                </span> 

                                <span>
                                    {order.customers?.email}
                                </span>

                            </td>

                            <td className="p-4 font-medium tracking-tighter">
                                {formatDateLong(order.created_at)}
                            </td>

                            <td className="p-4 font-medium tracking-tighter">
                                <select 
                                value={order.status}
                                onClick={e => e.stopPropagation()}
                                className="border border-gray-300 rounded"
                                >
                                    {statusOptions.map(option => (
                                        <option 
                                        value={option.value}
                                        key={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    ))}

                                </select>
                            </td>
                            <td className="p-4 font-medium tracking-tighter">
                                {formatPrice(order.total_amount)}
                            </td>

                        </tr>
                    ))}
            </tbody>

        </table>
      
    </div>
  );
};