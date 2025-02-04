import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Signup } from "../../api/Auth";
import Toast from "../ChildComponets/Toast";

const SignUpComponent = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [responceData, setResponceData] = useState({});
  const [showResponce, setShowResponce] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name == "" || email == "" || password == "") {
        return alert('something missing');
    }

    const data = {
      name,
      email,
      password,
      isAdmin
    }
    const responce = await Signup(data);
    setResponceData(responce);
    setShowResponce(true)

    setTimeout(()=>{
      setShowResponce(false);
    },3000) 
  }  

  return (
    <div className="auth-main">
      <div className="flex flex-col max-w-md rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          {showResponce ? <Toast message={responceData.message}/> : null}
          <h1 className="my-3 text-4xl font-bold">Sign up</h1>
          <p className="text-sm dark:text-gray-600">
            Sign up to create your account
          </p>
        </div>
        <form noValidate="" className="space-y-12" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="sharad patel"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                fdprocessedid="a55yim"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                fdprocessedid="a55yim"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                fdprocessedid="v9uqds"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between mb-2">
              <label htmlFor="isAdmin" className="text-sm">
                Are You Admin
              </label>
              <input type="checkbox" value={isAdmin} onChange={()=>setIsAdmin(!isAdmin)}/>
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

export default SignUpComponent;
