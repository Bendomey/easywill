import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toaster, Spinner } from "evergreen-ui";
import axios from "axios";
import {v4} from 'uuid'

const RegisterComponent = (props) => {
  const { push } = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  useEffect(() => {
    document.title = "Register | Easy will";
    let token = localStorage.getItem("easy_token");
    if (token) {
      push("/");
    }
  });

  function handleFormSubmission(e) {
    e.preventDefault();
    setLoading(true);

    axios({
      method: "POST",
      // url: `http://localhost:5001/samansiwill/us-central1/addAdmin/${name}/${email}/${password}/${v4()}`,
      url: `https://us-central1-samansiwill.cloudfunctions.net/${name}/${email}/${password}/${v4()}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        setLoading(false);
        toaster.success("Hurray", {
          description: "Account created succesfully, please login to continue",
        });
        push("/login");
      })
      .catch((e) => {
        setLoading(false);
        if (e.message === "Network Error") {
          toaster.success("Hurray", {
            description:
              "Account created successfully, please login to continue",
          });
          return push("/login");
        }
        toaster.warning("Error", {
          description: "Account created successfully, please login to continue",
        });
      });
  }

  return (
    <Fragment>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={require("../../assets/logo.svg")}
              alt="Easy Will logo"
            />
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Register
            </h2>
          </div>
          <form className="mt-8" onSubmit={handleFormSubmission}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm">
              <div>
                <input
                  aria-label="Full Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <input
                  aria-label="Email address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Email address"
                />
              </div>
              <div className="-mt-px">
                <input
                  aria-label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {loading ? <Spinner size={30} /> : "Register "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterComponent;
