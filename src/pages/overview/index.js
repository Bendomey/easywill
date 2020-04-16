import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const OverviewDashboard = (props) => {
  const [data, setData] = useState([null]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.title = "Overview | Easy Will Dashboard";
    setLoading(true);
    //fetch data
    axios("https://us-central1-samansiwill.cloudfunctions.net/members")
    // axios("http://localhost:5001/samansiwill/us-central1/members")
      .then((res) => res.data)
      .then((members) => {
        setLoading(false);
        setData(Object.values(members.data).length);
      })
      .catch((e) => {
        setLoading(false);
        console.log("Error", e);
      });
  }, []);

  return (
    <Fragment>
      <h1 className="text-2xl font-semibold text-gray-900">Overview</h1>
      <div>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <svg
                    className="h-6 w-6 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                      Members
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl leading-8 font-semibold text-gray-900">
                        {loading ? "loading..." : data || "N/A"}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm leading-5">
                <Link
                  to="/members"
                  className="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
                >
                  View all
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                      Faqs
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl leading-8 font-semibold text-gray-900">
                        10
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm leading-5">
                <Link
                  to="/"
                  className="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
                >
                  View all
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <svg
                    className="h-6 w-6 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                      Admins
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl leading-8 font-semibold text-gray-900">
                        2
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm leading-5">
                <Link
                  to="/"
                  className="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
                >
                  View all
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OverviewDashboard;
