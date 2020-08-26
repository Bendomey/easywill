import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dialog, toaster } from "evergreen-ui";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { storage } from "../../component/upload";
import { v4 } from "uuid";
import axios from "axios";
import moment from "moment";

const FAQS = (props) => {
  useEffect(() => {
    document.title = "Manage FAQs | Easy Will";
  });
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [picURL, setPicURL] = useState(null);
  const [loading, setLoading] = useState(false);

  const [faqs, setFaqs] = useState(null);
  const [loadFaqs, setLoadFaqs] = useState(null);

  const fetchFaqs = () => {
    setLoadFaqs(true);
    axios("https://us-central1-samansiwill.cloudfunctions.net/faqs")
    // axios("http://localhost:5001/samansiwill/us-central1/faqs")
      .then((res) => res.data)
      .then((result) => {
        setLoadFaqs(false);
        setFaqs(result.data);
      })
      .catch((e) => {
        setLoadFaqs(false);
        console.log("Error", e);
      });
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  const handleImageChange = (e) => {
    if (e.target.files[0] !== undefined) {
      setPicURL(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
    } else {
      setPicURL(URL.createObjectURL(file));
      setFile(file);
    }
  };

  function handleSubmit(close) {
    //validation
    if(!file) return toaster.warning("Error",{
      description:"Please add an image"
    });

    if(title.trim().length === 0) return toaster.warning("Error",{
      description:"Please add title to the faq"
    });

    if(description.trim().length === 0) return toaster.warning("Error",{
      description:"Please add a description to the faq"
    });


    setLoading(true);
    let newImageName = v4();
    const upload = storage
      .ref(`faqs/${newImageName}.${file.name.split(".")[1]}`)
      .put(file);
    upload.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref(`faqs`)
          .child(`${newImageName}.${file.name.split(".")[1]}`)
          .getDownloadURL()
          .then((data) => {
            //data that is uploaded
            axios({
              method: "POST",
              url: `https://us-central1-samansiwill.cloudfunctions.net/addFaq`,
              headers: {
                "Content-Type": "application/json",
              },
              data: {
                title,
                description,
                image: data,
                gen: newImageName,
              },
            })
              .then((data) => {
                setLoading(false);
                if (data.data.ok === false) {
                  setLoading(false);
                  toaster.warning("Error", {
                    description: data.data.error,
                  });
                  return;
                }
                toaster.success("Hurray", {
                  description: "Faq Added successfully",
                });
                close();
                fetchFaqs();
              })
              .catch((e) => {
                setLoading(false);
                console.log(e);
                close();
              });
          });
      }
    );
  }

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
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
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
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
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
      {loadFaqs && (
        <div
          style={{ height: "50vh" }}
          className={"flex items-center justify-center"}
        >
          Loading ...
        </div>
      )}

      {!loadFaqs && !faqs && (
        <div
          style={{ height: "50vh" }}
          className={"flex items-center justify-center"}
        >
          No data here ...
        </div>
      )}

      {!loadFaqs && faqs && Object.values(faqs).length !== 0 && (
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
                    {Object.entries(faqs).map(([key, member], i) => {
                      return (
                        <Fragment key={i}>
                          <tr>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src={member.image}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  {member.title.split("").length > 20
                                    ? `${member.title.slice(0, 20)}...`
                                    : member.title}
                                </div>
                              </div>
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              {member.description
                                .replace(/<[^>]+>/g, "")
                                .split("").length > 20
                                ? `${member.description
                                    .replace(/<[^>]+>/g, "")
                                    .slice(0, 20)}...`
                                : member.description.replace(/<[^>]+>/g, "")}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                              {moment(member.createdAt).format("Do MMMM YYYY hh:mm a")}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                              <button className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">
                                Edit
                              </button>
                              <button className="text-red-600 hover:text-red-900 focus:outline-none ml-5 focus:underline">
                                Delete
                              </button>
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
        </div>
      )}

      <Dialog
        title={"Add A FAQ"}
        isShown={show}
        onCloseComplete={() => setShow(false)}
        onConfirm={(close) => handleSubmit(close)}
        isConfirmDisabled={loading}
        isConfirmLoading={loading}
        confirmLabel={"Add Faq"}
        width={800}
        minHeightContent={370}
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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
