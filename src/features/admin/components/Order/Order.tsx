/* eslint-disable array-callback-return */
import { OrderStatus } from "constants/order";
import { OrderModel } from "models/order";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import StatusOrder from "./StatusOrder";

export const OrderList = ({ orders, handleUpdateStatusOrder }: any) => {
  const getDataStatus = (data: OrderModel): void => {
    handleUpdateStatusOrder(data);
  };
  return (
    <Fragment>
      <div className="flex flex-1  flex-col md:flex-row lg:flex-row mx-2 text-center">
        <div className="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
          <div className="relative bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b uppercase text-center">
            Order
            <div className="absolute top-3 right-[5%]">
              <Link to="/admin/trash-orders">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:text-[#3ae734] text-[#dd4b27]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </Link>
            </div>
            <div className="absolute top-3 left-[5%]">
              <Link to="/admin/complete-orders">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#3ae734"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="p-3">
            <table className="table-responsive w-full rounded">
              <thead>
                <tr>
                  <th className="border w-1/5 px-4 py-2">Name</th>
                  <th className="border w-1/6 px-4 py-2">Email</th>
                  <th className="border w-1/6 px-4 py-2">Phone</th>
                  <th className="border w-1/6 px-4 py-2">Address</th>
                  <th className="border w-1/6 px-4 py-2">Note</th>
                  <th className="border w-1/6 px-4 py-2">Status</th>
                  <th className="border w-1/6 px-4 py-2">Active</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item: any, index: number) => {
                  if (
                    item.status === OrderStatus.unconfirmed ||
                    item.status === OrderStatus.confirmed
                  ) {
                    return (
                      <tr key={index}>
                        <td className="border px-4 py-2">{item.name}</td>
                        <td className="border px-4 py-2">{item.email}</td>
                        <td className="border px-4 py-2">{item.phone}</td>
                        <td className="border px-4 py-2"> {item.address}</td>
                        <td className="border px-4 py-2">{item.note}</td>
                        <td className="border px-4 py-2">
                          {" "}
                          <StatusOrder
                            getDataStatus={getDataStatus}
                            data={item}
                            statusItem={item.status}
                          />
                        </td>

                        <td className="border px-4 py-2">
                          <div className="flex justify-center items-center">
                            <span className="cursor-pointer  mx-1 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#0CE943"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                            </span>
                            <span className="cursor-pointer  mx-1 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                viewBox="0 0 20 20"
                                fill="#0CE943"
                              >
                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                <path
                                  fillRule="evenodd"
                                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span className="cursor-pointer  mx-1 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="red"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="absolute xl:bottom-[23%] xl:right-[2%]   sm:bottom-[7%] sm:right-[1.5%] sm:w-[80%] flex justify-between">
        <div>
          <button className="bg-transparent hover:bg-green-500 text-[#48bb78] font-semibold hover:text-white py-2 px-4 border border-green hover:border-transparent rounded">
            Create
          </button>
        </div>
        <div className="inline-flex ">
          <button className="bg-gray-200 hover:bg-gray-500 text-gray-900 font-bold py-2 px-4 rounded-l shadow">
            Prev
          </button>
          <button className="bg-gray-200 hover:bg-gray-500 text-gray-900 font-bold py-2 px-4 rounded-r shadow">
            Next
          </button>
        </div>
      </div>
    </Fragment>
  );
};
