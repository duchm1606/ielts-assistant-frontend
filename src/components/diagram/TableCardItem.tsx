import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IDiagramInfoDetail } from "@/type/chart";

// const data: IDiagramInfoDetail = {
//   chartType: "Table",
//   title: "Transaction Details by Company",
//   xAxis: "",
//   yAxis: "",
//   dataKey: ["Transaction ID", "Amount", "Status", "Customer Email", "Company"],
//   data: [
//     {
//       "Transaction ID": "1F4A1024",
//       Amount: 350,
//       Status: "Completed",
//       "Customer Email": "customer1@shop.com",
//       Company: "TechGiant",
//     },
//     {
//       "Transaction ID": "1F4A1025",
//       Amount: 220,
//       Status: "Pending",
//       "Customer Email": "customer2@shop.com",
//       Company: "HomeEssentials",
//     },
//     {
//       "Transaction ID": "1F4A1026",
//       Amount: 400,
//       Status: "Refunded",
//       "Customer Email": "customer3@shop.com",
//       Company: "TechGiant",
//     },
//     {
//       "Transaction ID": "1F4A1027",
//       Amount: 185,
//       Status: "Pending",
//       "Customer Email": "customer4@shop.com",
//       Company: "FastFashion",
//     },
//     {
//       "Transaction ID": "1F4A1028",
//       Amount: 150,
//       Status: "Completed",
//       "Customer Email": "customer5@shop.com",
//       Company: "FastFashion",
//     },
//     {
//       "Transaction ID": "1F4A1029",
//       Amount: 500,
//       Status: "Processing",
//       "Customer Email": "customer6@shop.com",
//       Company: "TechGiant",
//     },
//     {
//       "Transaction ID": "1F4A1030",
//       Amount: 300,
//       Status: "Refunded",
//       "Customer Email": "customer7@shop.com",
//       Company: "HomeEssentials",
//     },
//     {
//       "Transaction ID": "1F4A1031",
//       Amount: 275,
//       Status: "Completed",
//       "Customer Email": "customer8@shop.com",
//       Company: "HomeEssentials",
//     },
//     {
//       "Transaction ID": "1F4A1032",
//       Amount: 320,
//       Status: "Processing",
//       "Customer Email": "customer9@shop.com",
//       Company: "FastFashion",
//     },
//     {
//       "Transaction ID": "1F4A1033",
//       Amount: 210,
//       Status: "Pending",
//       "Customer Email": "customer10@shop.com",
//       Company: "TechGiant",
//     },
//   ],
// };

// const invoices = [
//   {
//     invoice: "INV001",
//     paymentStatus: "Paid",
//     totalAmount: "$250.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV002",
//     paymentStatus: "Pending",
//     totalAmount: "$150.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV003",
//     paymentStatus: "Unpaid",
//     totalAmount: "$350.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV004",
//     paymentStatus: "Paid",
//     totalAmount: "$450.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV005",
//     paymentStatus: "Paid",
//     totalAmount: "$550.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV006",
//     paymentStatus: "Pending",
//     totalAmount: "$200.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV007",
//     paymentStatus: "Unpaid",
//     totalAmount: "$300.00",
//     paymentMethod: "Credit Card",
//   },
// ];

const TableCardItem = ({ data }: { data: IDiagramInfoDetail }) => {
  return (
    <Table>
      <TableCaption>{data.title}</TableCaption>
      <TableHeader>
        <TableRow>
          {data.dataKey.map((item, index) => (
            <TableHead key={item}>{item}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.data.map((item, index) => (
          <TableRow key={data.dataKey[index]}>
            {data.dataKey.map((key, index) => (
              <TableCell key={key}>{item[key]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableCardItem;
