import React, { useState } from "react";

const ItemForm = () => {
    const [itemName , setItemName] = useState('')
    const [itemContent , setItemContent] = useState('')
    const [itemImage , setItemImage] = useState('')
    const [itemStoke , setItemStoke] = useState(0)
    const [itemPrice , setItemPrice] = useState(0)
    const [itemCatagory , setItemCatagory] = useState('')

  return (
    <div className="auth-main">
      <div className="flex flex-col max-w-md rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
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
              <label htmlFor="isAdmin" className="text-sm">
                Item Stoke
              </label>
              <input
                type="number"
                placeholder="0"
                value={itemStoke}
                onChange={(e) => setItemStoke(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
                fdprocessedid="u4vx"
              >
                Sign up
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              you have an account yet?
              <Link
                rel="noopener noreferrer"
                to="/login"
                className="hover:underline dark:text-violet-600"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemForm;
