import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dialog } from "evergreen-ui";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const FAQS = (props) => {
  useEffect(() => {
    document.title = "Manage FAQs | Easy Will";
  });
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [picURL, setPicURL] = useState("");
  const handleImageChange = (e) => {
    if (e.target.files[0] !== undefined) {
      setPicURL(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
    } else {
      setPicURL(URL.createObjectURL(file));
      setFile(file);
    }
  };
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
              to="/faqs"
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out"
            >
              Manage Frequently Asked Questions
            </Link>
          </nav>
        </div>
        <div className="mt-2 md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
              Manage FAQS
            </h2>
          </div>
          <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
            <span className="ml-3 shadow-sm rounded-md">
              <button
                type="button"
                onClick={() => setShow(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Add FAQ
              </button>
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col">
          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>

                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Created At
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Created At
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">Why Lawyers</div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      Active
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                      Owner
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        className="text-red-600 hover:text-red-900 focus:outline-none ml-5 focus:underline"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        title={"Add A FAQ"}
        isShown={show}
        onCloseComplete={() => setShow(false)}
        confirmLabel={"Add Faq"}
        width={800}
        minHeightContent={400}
      >
        <Fragment>
          <div>
            <div className={"mb-3"}>
              <div className="flex-shrink-0 h-full w-full flex justify-around items-center flex-row">
                <img
                  style={{ width: 150, height: 150 }}
                  className="rounded-full"
                  src={!picURL ? require("../../assets/default.png") : picURL}
                  alt=""
                />
                <div className="mt-1 relative shadow-sm">
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="form-input block w-full sm:text-sm sm:leading-5"
                    placeholder="file here ..."
                  />
                </div>
              </div>
            </div>
            <div className={"mb-3"}>
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Title
              </label>
              <div className="mt-1 relative shadow-sm">
                <input
                  id="text"
                  className="form-input block w-full sm:text-sm sm:leading-5"
                  placeholder="title ..."
                />
              </div>
            </div>
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Description
            </label>

            <ReactQuill
              theme="snow"
              value={description}
              onChange={setDescription}
            />
          </div>
        </Fragment>
      </Dialog>
    </Fragment>
  );
};

export default FAQS;
