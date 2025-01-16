import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MyContext } from "../../context/myConext";
import { createProduct, getOneProductById } from "../../api/product";
import Toast from "../ChildComponets/Toast";
import StateSelect from "../ChildComponets/StateSelect";

const Order = () => {
  const { id } = useParams();
  const { user, Token } = useContext(MyContext);
  const [number, setNumber] = useState(0);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postelCode, setPostelCode] = useState("");
  const [country, setCountry] = useState("");
  const [responceData, setResponceData] = useState({});
  const [showResponce, setShowResponce] = useState(false);
  const [price, setPrice] = useState(0);
  const [stoke, setStoke] = useState(1);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const saveData = async () => {
      const res = await getOneProductById(id, Token);
      setCartProducts((prev) => {
        const exists = prev.some((product) => product.id === res.item.id);
        if (!exists) {
          return [...prev, res.item];
        }
        return prev;
      });
    };
    saveData();
  }, [id, Token]);
  console.log(cartProducts);
  
  const handleSubmit = (e) => {};

  return (
    <div className="products">
      <div className="flex products-container flex-col max-w-md rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          {/* {showResponce ? <Toast message={responceData.message} /> : null} */}
          <h1 className="my-3 text-4xl font-bold">Order Form To Buy product</h1>
          <p className="text-sm dark:text-gray-600">
            Order Form to Order your item
          </p>
        </div>
        <form noValidate="" className="space-y-12" onSubmit={handleSubmit}>
          {cartProducts?.map((item , index) => {
            return (
              <div className="space-y-4">
                <label htmlFor="password" className="text-lg">
                    <b> Product {index + 1} : </b>
                  </label>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm">
                    Item Name
                  </label>
                </div>
                <input
                  type="text"
                  name="password"
                  id="password"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  placeholder="0"
                  value={item.itemName}
                />
                <div className="flex justify-between ">
                  <label htmlFor="password" className="text-sm">
                    Stoke
                  </label>
                </div>
                <input
                  type="number"
                  name="password"
                  id="password"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  placeholder="0"
                  max={item.itemStoke}
                  min={1}
                  value={stoke}
                  onChange={(e)=>setStoke(e.target.value)}
                
                />
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm">
                    Price
                  </label>
                </div>
                <input
                  type="number"
                  name="password"
                  id="password"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  placeholder="0"
                  value={item.itemPrice}
                />
              </div>
            );
          })}
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="iphone, mi tv ,etc.."
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                fdprocessedid="a55yim"
                value={user.name}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="About Your Product"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                fdprocessedid="a55yim"
                value={user.email}
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Number
                </label>
              </div>
              <input
                type="number"
                name="password"
                id="password"
                placeholder="$391"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                fdprocessedid="v9uqds"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Address 1
              </label>
            </div>
            <input
              type="text"
              name="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              placeholder="address1"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Address 2
              </label>
            </div>
            <input
              type="text"
              name="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              placeholder="address2"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                City
              </label>
            </div>
            <input
              type="text"
              name="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              placeholder="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Postel Code
              </label>
            </div>
            <input
              type="number"
              name="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              placeholder="0"
              value={postelCode}
              onChange={(e) => setPostelCode(e.target.value)}
            />
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Select Your State
              </label>
              <StateSelect />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Country:
              </label>
              <b>INDIA</b>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
                fdprocessedid="u4vx"
              >
                Buy Product
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              <Link
                rel="noopener noreferrer"
                to="/admin"
                className="hover:underline dark:text-violet-600"
              >
                Back To Shopping Page
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Order;
