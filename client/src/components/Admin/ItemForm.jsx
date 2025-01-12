import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemForm = () => {
  const [itemName, setItemName] = useState("");
  const [itemContent, setItemContent] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [itemStoke, setItemStoke] = useState(0);
  const [itemPrice, setItemPrice] = useState(0);
  const [itemCatagory, setItemCatagory] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="products">
      <div className="flex products-container flex-col max-w-md rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          {/* {showResponce ? <Toast message={responceData.message} /> : null} */}
          <h1 className="my-3 text-4xl font-bold">Item Form To Create</h1>
          <p className="text-sm dark:text-gray-600">
            Item Form to create your item
          </p>
        </div>
        <form noValidate="" className="space-y-12" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Item Name
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="sharad patel"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                fdprocessedid="a55yim"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Item Content
              </label>
              <textarea
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                fdprocessedid="a55yim"
                value={itemContent}
                onChange={(e) => setItemContent(e.target.value)}
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Item Price
                </label>
              </div>
              <input
                type="number"
                name="password"
                id="password"
                placeholder="$391"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                fdprocessedid="v9uqds"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
              />
            </div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Item Stoke
              </label>
            </div>
            <input
              type="number"
              name="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              placeholder="0"
              value={itemStoke}
              onChange={(e) => setItemStoke(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Select Your Role
            </label>
            <select
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-600 focus:border-violet-600 dark:bg-gray-50 dark:text-gray-800"
              aria-label="Default select example"
              value={itemCatagory}
              onChange={(e) => setItemCatagory(e.target.value)}
            >
              <option>select Catagory</option>
              <option value="Electronics & Gadgets">
                Electronics & Gadgets
              </option>
              <option value="Fashion & Apparel">Fashion & Apparel</option>
              <option value="Health & Beauty">Health & Beauty</option>
              <option value="Sports & Outdoors">Home & Kitchen</option>
              <option value="Books & Stationery">Books & Stationery</option>
              <option value="Toys & Games">Toys & Games</option>
              <option value="Automotive">Automotive</option>
              <option value="Pet Supplies">Pet Supplies</option>
              <option value="Groceries & Gourmet Food">
                Groceries & Gourmet Food
              </option>
              <option value="Jewelry & Watches">Jewelry & Watches</option>
              <option value="Baby & Kids">Baby & Kids</option>
              <option value="Travel & Luggage">Travel & Luggage</option>
              <option value="Personal Care & Wellness">
                Personal Care & Wellness
              </option>
              <option value="Crafts & Sewing">Crafts & Sewing</option>
            </select>
          </div>

          <fieldset className="w-full space-y-1 dark:text-gray-800">
            <label htmlFor="files" className="block text-sm font-medium">
              Attachments
            </label>
            <div className="flex">
              <input
                type="file"
                name="files"
                id="files"
                className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-300 dark:text-gray-600 dark:bg-gray-100"
              />
            </div>
          </fieldset>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
                fdprocessedid="u4vx"
              >
                Create Item
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              <Link
                rel="noopener noreferrer"
                to="/admin"
                className="hover:underline dark:text-violet-600"
              >
                Back To Admin Page
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemForm;
