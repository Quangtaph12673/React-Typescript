/* eslint-disable array-callback-return */
import { ProductPagination, ProductStatus } from "constants/product";
import { ProductModel } from "models/product";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPermission, removeEmptyArray } from "utils/utils";
import StatusProduct from "./StatusProduct";
const ProductList = ({
  handleShowFromCreate,
  handleShowFromEdit,
  handleShowDialogDelete,
  handleUpdateStatusProduct,
  handlePagination,
  disablePagination,
  products,
}: any) => {
  const getDataStatus = (data: ProductModel): void => {
    handleUpdateStatusProduct(data);
  };
  const [productShow, setProductShow] = useState<ProductModel>();
  const [result, setResult] = useState<any>();

  useEffect(() => {
    try {
      if (!products) return;
      setProductShow(
        products.map((item: any) => {
          if (item.status !== ProductStatus.delete) {
            return item;
          }
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, [products]);

  useEffect(() => {
    if (productShow) {
      setResult(removeEmptyArray(productShow));
    }
  }, [productShow]);
  return (
    <Fragment>
      <div className='flex flex-1  flex-col md:flex-row lg:flex-row mx-2 text-center'>
        <div className='mb-2 border-solid border-gray-300 rounded border shadow-sm w-full'>
          <div className='relative bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b uppercase text-center'>
            Products
            <div className='absolute top-3 right-[5%]'>
              <Link to='/admin/trash-products'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 hover:text-[#3ae734] text-[#dd4b27]'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className='p-3'>
            <table className='table-responsive w-full rounded'>
              <thead>
                <tr>
                  <th className='border w-1/4 px-4 py-2'>Name</th>
                  <th className='border w-1/6 px-4 py-2'>Category</th>
                  <th className='border w-1/6 px-4 py-2'>Photo</th>
                  <th className='border w-1/6 px-4 py-2'>Price</th>
                  <th className='border w-1/6 px-4 py-2'>Sale</th>
                  <th className='border w-1/6 px-4 py-2'>Quantity</th>
                  <th className='border w-1/6 px-4 py-2'>Sold</th>
                  <th className='border w-1/7 px-4 py-2'>Status</th>
                  <th className='border w-1/5 px-4 py-2'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {result ? (
                  result.map((item: any, index: number) => {
                    return (
                      <tr key={index}>
                        <td className='border px-4 py-2'>{item.name}</td>
                        <td className='border px-4 py-2'>
                          {item.category.name}
                        </td>
                        <td className='border px-4 py-2'>
                          <img src={item.photo} width='100' alt='isphoto' />
                        </td>
                        <td className='border px-4 py-2'>{item.price} $</td>
                        <td className='border px-4 py-2'>
                          {item.sale ? item.sale : 0} $
                        </td>
                        <td className='border px-4 py-2'>{item.quantity} </td>
                        <td className='border px-4 py-2'>{item.sold} </td>
                        <td className='border px-4 py-2'>
                          <StatusProduct
                            getDataStatus={getDataStatus}
                            data={item}
                            statusItem={item.status}
                          />
                        </td>

                        <td className='border px-4 py-2'>
                          <div className='flex justify-center items-center'>
                            <Link
                              target='_blank'
                              to={`/product-view-check/${
                                item._id
                              }?auth=${getPermission()}`}
                              className='cursor-pointer  mx-1 '>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-7 w-7'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='#0CE943'>
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth={2}
                                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                                />
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth={2}
                                  d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                                />
                              </svg>
                            </Link>
                            <span
                              onClick={() =>
                                handleShowFromEdit({
                                  status: true,
                                  data: item,
                                })
                              }
                              className='cursor-pointer  mx-1 '>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-6 w-6'
                                viewBox='0 0 20 20'
                                fill='#0CE943'>
                                <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                                <path
                                  fillRule='evenodd'
                                  d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                                  clipRule='evenodd'
                                />
                              </svg>
                            </span>
                            <span
                              onClick={() => handleShowDialogDelete(true, item)}
                              className='cursor-pointer  mx-1 '>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-6 w-6'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='red'>
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth={2}
                                  d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                                />
                              </svg>
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={9}>not product</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='absolute xl:bottom-[23%] xl:right-[2%]   sm:bottom-[7%] sm:right-[1.5%] sm:w-[80%] flex justify-between'>
        <div onClick={() => handleShowFromCreate(true)}>
          <button className='bg-transparent hover:bg-green-500 text-[#48bb78] font-semibold hover:text-white py-2 px-4 border border-green hover:border-transparent rounded'>
            Create
          </button>
        </div>
        <div className='inline-flex '>
          <button
            disabled={
              disablePagination.action === ProductPagination.minus
                ? disablePagination.status
                : false
            }
            onClick={() => handlePagination({ type: ProductPagination.minus })}
            className='bg-gray-200 hover:bg-gray-500 text-gray-900 font-bold py-2 px-4 rounded-l shadow'>
            Prev
          </button>
          <button
            disabled={
              disablePagination.action === ProductPagination.plus
                ? disablePagination.status
                : false
            }
            onClick={() => handlePagination({ type: ProductPagination.plus })}
            className='bg-gray-200 hover:bg-gray-500 text-gray-900 font-bold py-2 px-4 rounded-r shadow'>
            Next
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
