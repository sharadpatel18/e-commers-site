import React, { useContext, useEffect, useState } from "react";
import { getAllProducts } from "../../api/product";
import { MyContext } from "../../context/myConext";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const { Token } = useContext(MyContext);
  const Navigate = useNavigate();
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    const saveData =async () => {
      const responce = await getAllProducts(Token);
      setProducts(responce.item);
    }
    saveData();
  }, []);

  return (
    <div className="products">
      <div className="flex flex-col products-container p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <h2 className="text-xl font-semibold">products</h2>
        <ul className="flex flex-col divide-y dark:divide-gray-300">
         {
          Products?.map((item)=>{
            return (
              <li className="flex flex-col py-6 sm:flex-row sm:justify-between" key={item._id}>
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                  src={item.itemImage}
                  alt="Polaroid camera"
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                        {item.itemName}
                      </h3>
                      <p className="text-sm dark:text-gray-600">{item.itemCatagory}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">&#8377; {item.itemPrice}</p>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      className="px-6 py-2 border rounded-md dark:border-violet-600"
                      onClick={()=>Navigate(`/productdetails/${item._id}`)}
                    >
                      Add To Cart
                    </button>
                    <button
                      type="button"
                      className="px-6 py-2 border rounded-md dark:bg-violet-600 dark:text-gray-50 dark:border-violet-600"
                      onClick={()=>Navigate(`/productdetails/${item._id}`)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </li>
            )
          })
         }
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
