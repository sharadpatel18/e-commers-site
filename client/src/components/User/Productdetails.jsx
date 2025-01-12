import React, { useContext, useEffect, useState } from "react";
import { getOneProductById } from "../../api/product";
import { useParams } from "react-router-dom";
import { MyContext } from "../../context/MyConext";

const ProductDetail = () => {
    const {id} = useParams();
    const {Token} = useContext(MyContext);
    const [product , setProduct] = useState({});

    useEffect(()=>{
        const saveData = async () => {
            const responce = await getOneProductById(id , Token);
            console.log(responce.item[0]);
            
            setProduct(responce.item[0]);
        }
        saveData();
    },[])

  return (
    <div className="products flex justify-center items-center p-4">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
         
          <div className="flex-1 bg-gray-100 flex justify-center items-center p-6">
            <img
              src={product?.itemImage}
              alt={product?.itemName} 
              className="rounded-lg shadow-lg"
            />
          </div>

         
          <div className="flex-1 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product?.itemName} 
            </h1>
            <p className="text-gray-600 mb-4">{product?.itemContent}</p>

         
            <div className="mb-6">
              <p className="text-2xl font-semibold text-blue-600">
                {`₹${product?.itemPrice}`}
              </p>
              <p
                className={`mt-2 ${
                  product?.itemStoke > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {product?.itemStoke > 0 ? "In Stock" : "Out of Stock"} 
              </p>
            </div>

            
            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Customer Reviews
              </h2>
              <div className="flex items-center mb-4">
              
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill={
                        index < Math.round(product?.averageRating)
                          ? "yellow"
                          : "gray"
                      }
                      className="w-5 h-5"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  {product?.averageRating} out of 5
                </span>
                <span className="ml-4 text-gray-500">
                  ({product?.totalRatings} reviews)
                </span>
              </div>

            
              {/* <div className="space-y-2">
                {product.reviews?.map((review, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="w-12 text-sm">{review.stars} star</span>
                    <div className="flex-1 bg-gray-200 rounded h-4 overflow-hidden">
                      <div
                        className="bg-orange-500 h-4"
                        style={{ width: review.percentage }}
                      ></div>
                    </div>
                    <span className="w-12 text-right text-sm text-gray-600">
                      {review.percentage}
                    </span>
                  </div>
                ))}
              </div> */}
            </div>

            <div className="mt-6 flex space-x-4">
              <button
                className="flex-1 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
                disabled={product?.itemStoke === 0} 
              >
                Add to Cart
              </button>
              <button className="flex-1 px-6 py-3 bg-gray-100 text-gray-800 rounded-lg shadow-md hover:bg-gray-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
