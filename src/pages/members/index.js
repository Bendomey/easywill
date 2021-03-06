import React, { Fragment, useEffect, useState } from "react";
import { IconButton } from "evergreen-ui";
import axios from "axios";
import { Link } from "react-router-dom";

const MemberComponent = (props) => {
  const [data, setData] = useState([null]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.title = "Members | Easy Will Dashboard";
    setLoading(true);
    //fetch data
    axios("https://us-central1-samansiwill.cloudfunctions.net/members")
    // axios("http://localhost:5001/samansiwill/us-central1/members")
      .then((res) => res.data)
      .then((members) => {
        setLoading(false);
        setData(members.data);
        console.log(members.data);
      })
      .catch((e) => {
        setLoading(false);
        console.log("Error", e);
      });
  }, []);

  return (
    <Fragment>
      <div className={"mb-5"}>
        <div>
          <nav className="sm:hidden">
            <Link
              to="/"
              className="flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out"
            >
              <svg
                className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              Back
            </Link>
          </nav>
          <nav className="hidden sm:flex items-center text-sm leading-5 font-medium">
            <Link
              to="/"
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out"
            >
              Home
            </Link>
            <svg
              className="flex-shrink-0 mx-2 h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <Link
              to="/members"
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out"
            >
              Members
            </Link>
          </nav>
        </div>
        <div className="mt-2 md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
              Manage Members
            </h2>
          </div>

        </div>
      </div>
      {loading && (
        <div
          style={{ height: "50vh" }}
          className={"flex items-center justify-center"}
        >
          Loading ...
        </div>
      )}

      {!loading && Object.values(data).length === 0 && (
        <div
          style={{ height: "50vh" }}
          className={"flex items-center justify-center"}
        >
          No data here ...
        </div>
      )}

      {!loading && Object.values(data).length > 0 && (
        <Fragment>
          <div className="flex flex-col">
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        ID
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Gender
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Country
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {Object.entries(data).map(([key, member], i) => {
                      return (
                        <Fragment key={i}>
                          <tr
                            className={`${
                              i % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }`}
                          >
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm leading-5 font-medium text-gray-900">
                                    {member?.personalinformation?.firstname ||
                                      "N/A"}{" "}
                                    {member?.personalinformation?.othername ||
                                      "N/A"}
                                  </div>
                                  <div className="text-sm leading-5 text-gray-500">
                                    {member?.personalinformation?.phonenumber ||
                                      "N/A"}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="text-sm leading-5 text-gray-900">
                                {member?.personalinformation?.idnumtype ||
                                  "N/A"}
                              </div>
                              <div className="text-sm leading-5 text-gray-500">
                                {member?.personalinformation?.idnum || "N/A"}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                              {member?.personalinformation?.gender || "N/A"}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                              {member?.personalinformation?.addresscountry ||
                                "N/A"}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                              <Link
                                to={{
                                  pathname: `/members/${key}`,
                                  state: {
                                    member,
                                  },
                                }}
                              >
                                <IconButton
                                  appearance="minimal"
                                  icon="eye-open"
                                  iconSize={18}
                                />
                              </Link>
                            </td>
                          </tr>
                        </Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default MemberComponent;
