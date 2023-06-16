import { Helmet } from "react-helmet-async";
import useEnrolledClass from "../../../hooks/useEnrolledClass";
import moment from "moment";


const PaymentHistory = () => {
  const [myClass, refetch] = useEnrolledClass();

  return (
    <div className="w-8/12 mb-12">
      <Helmet>
        <title>Sports Club | Payment History </title>
      </Helmet>
      <h1 className="text-4xl text-center pb-2 my-text font-semibold mt-12 mb-5">
        Payment History
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="my-color1">
              <th>#</th>
              <th>TransactionId</th>
              <th>Class name</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {myClass.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.transactionId}</td>
                <td>{item.className}</td>
                <td className="">${item.price}</td>
                <td>{moment(item.date).format("YYYY-MM-DD hh:mm:ss")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
