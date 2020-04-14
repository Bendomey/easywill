import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const SingleUser = (props) => {
  const [data, setData] = useState(null);
  const { push, location } = useHistory();

  useEffect(() => {
    if (location?.state?.member === undefined) return push("/members");
    document.title =
      (location.state.member.personalinformation?.othername || "Single User") +
      " | Easy Will";
    setData(location.state.member);
  },[location, push]);

  return (
    <Fragment>
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">Summary</h3>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-5">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                  Personal Information
                </dt>
                <dd className="mt-1 text-1xl leading-9 font-semibold text-gray-900">
                  {data?.personalinformation ? "Submitted" : "Not Submitted"}
                </dd>
              </dl>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                  Assets
                </dt>
                <dd className="mt-1 text-1xl leading-9 font-semibold text-gray-900">
                  {data?.assets && Object.values(data.assets).length > 0
                    ? "Submitted"
                    : "Not Submitted"}
                </dd>
              </dl>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                  Beneficiaries
                </dt>
                <dd className="mt-1 text-1xl leading-9 font-semibold text-gray-900">
                  {data?.beneficiaries &&
                  Object.values(data.beneficiaries).length > 0
                    ? "Submitted"
                    : "Not Submitted"}
                </dd>
              </dl>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                  Distribution
                </dt>
                <dd className="mt-1 text-1xl leading-9 font-semibold text-gray-900">
                  {data?.distribution ? "Submitted" : "Not Submitted"}
                </dd>
              </dl>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                  Executor
                </dt>
                <dd className="mt-1 text-1xl leading-9 font-semibold text-gray-900">
                  {data?.executor ? "Submitted" : "Not Submitted"}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      {data?.personalinformation && (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-3">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Personal Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
              Personal details and application.
            </p>
          </div>
          <div>
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  First Name
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.firstname || "N/A"}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Other Names
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.othername || "N/A"}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Family Name
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.familyname || "N/A"}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Gender
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.gender || "N/A"}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Phone Number
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.phonenumber || "N/A"}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Date Of Birth
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.dateofbirth || "N/A"}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Birth Country
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.birthcountry || "N/A"}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Birth State
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.birthstate || "N/A"}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Birth City
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.birthcity || "N/A"}
                </dd>
              </div>

              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Address (Country)
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.addresscountry || "N/A"}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Address (State)
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.addressstate || "N/A"}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Address (City)
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.addressscity || "N/A"}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Address (Apt Number)
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.aptnumber || "N/A"}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  ID Number Type
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.idnumtype || "N/A"}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  ID Number
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.idnum || "N/A"}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Tin Number
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.tinnumber || "N/A"}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Father's First Name
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.fatherfirstname || "N/A"}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Father's Other Names
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.fatherothername || "N/A"}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Father's Family Name
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.fatherfamilyname || "N/A"}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Father's Phone Number
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.fatherphonenumber || "N/A"}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Father's Date Of Birth
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.fatherdob || "N/A"}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Father's Birth Country
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.fatherbirthcountry || "N/A"}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Father's Birth State
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.fatherbirthstate || "N/A"}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Father's Birth City
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.fatherbirthcity || "N/A"}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Mother's First Name
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.motherfirstname || "N/A"}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Mother's Other Names
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.motherothername || "N/A"}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Mother's Family Name
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.mothersfamilyname || "N/A"}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Mother's Phone Number
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.motherphonenumber || "N/A"}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Mother's Date Of Birth
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.motherdob || "N/A"}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Mother's Birth Country
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.motherbirthcountry || "N/A"}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Mother's Birth State
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.motherbirthstate || "N/A"}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Mother's Birth City
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  {data?.personalinformation?.motherbirthcity || "N/A"}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}

      {data && data.executor !== undefined && (
        <div className="bg-white shadow overflow-hidden  sm:rounded-lg mt-3">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Executor
            </h3>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 col-gap-4 row-gap-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  First Name
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900">
                  {data.executor?.firstname || "N/A"}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Other Name
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900">
                  {data.executor?.othername || "N/A"}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Family Name
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900">
                  {data.executor?.familyname || "N/A"}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Gender
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900">
                  {data.executor?.gender || "N/A"}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Date Of Birth
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900">
                  {data.executor?.dateofbirth || "N/A"}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Phone Number
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900">
                  {data.executor?.phonenumber || "N/A"}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Address
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900">
                  {data.executor?.address || "N/A"}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Country
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900">
                  {data.executor?.country || "N/A"}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  State
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900">
                  {data.executor?.state || "N/A"}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  City
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900">
                  {data.executor?.city || "N/A"}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  ID Number Type
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900">
                  {data.executor?.idnumtype || "N/A"}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  ID Number
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900">
                  {data.executor?.idnumber || "N/A"}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}

      {data?.assets && Object.values(data.assets).length > 0 && (
        <div className="bg-white shadow overflow-hidden  sm:rounded-lg mt-3">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Assets
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
              Member assets
            </p>
          </div>
          {data?.assets &&
            Object.entries(data.assets).map(([key, value], i) => {
              return (
                <div className={"border-b mt-5"}>
                  {Object.entries(value).map(([keyAsset, keyValue], j) => {
                    return (
                      <Fragment key={j}>
                        <div
                          className={`${
                            j % 2 === 0 ? "bg-gray-50" : "bg-white"
                          } px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
                        >
                          <dt className="text-sm leading-5 font-medium text-gray-500">
                            {keyAsset}
                          </dt>
                          <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                            {keyValue}
                          </dd>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              );
            })}
        </div>
      )}

      {data?.assets && Object.values(data.beneficiaries).length > 0 && (
        <div className="bg-white shadow overflow-hidden  sm:rounded-lg mt-3">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Beneficiaries
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
              Member beneficiaries
            </p>
          </div>

          {Object.entries(data.beneficiaries).map(([key, value], i) => {
            return (
              <Fragment key={i}>
                <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                  <dl className="grid grid-cols-1 col-gap-4 row-gap-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        First Name
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900">
                        {value?.firstname || "N/A"}
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        Other Name
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900">
                        {value?.othername || "N/A"}
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        Family Name
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900">
                        {value?.familyname || "N/A"}
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        Gender
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900">
                        {value?.gender || "N/A"}
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        Date Of Birth
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900">
                        {value?.dateofbirth || "N/A"}
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        Phone Number
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900">
                        {value?.phonenumber || "N/A"}
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        Relation
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900">
                        {value?.relation || "N/A"}
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        Country
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900">
                        {value?.country || "N/A"}
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        State
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900">
                        {value?.state || "N/A"}
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        City
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900">
                        {value?.city || "N/A"}
                      </dd>
                    </div>
                  </dl>
                  {data?.distribution &&
                    Object.keys(data?.distribution).map((keyDis, i) => {
                      if (keyDis === key)
                        return (
                          <div className="sm:col-span-2 mt-2" key={i}>
                            <dt className="text-sm leading-5 font-medium text-gray-500">
                              Asset(s)
                            </dt>
                            <dd className="mt-1 text-sm leading-5 text-gray-900">
                              <div className="bg-white shadow overflow-hidden sm:rounded-md mt-2">
                                {/*{console.log(Object.(data?.distribution[keyDis]).length)}*/}
                                <ul>
                                  {Object.values(
                                    data?.distribution[keyDis]
                                  ).map((distribute, i) => {
                                    if (distribute instanceof Object)
                                      return (
                                        <li key={i}>
                                          <span
                                            className="block hover:bg-gray-50 border-b  focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
                                          >
                                            <div className="px-4 py-4 sm:px-6">
                                              <div className="flex items-center justify-between">
                                                <div className="text-sm leading-5 font-medium text-indigo-600 truncate">
                                                  Asset
                                                </div>
                                                <div className="ml-2 flex-shrink-0 flex">
                                                  Distribution Condition
                                                </div>
                                              </div>
                                              <div className="mt-2 sm:flex sm:justify-between">
                                                {distribute.asset}
                                                <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {
                                                      distribute.distributioncondition
                                                    }
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </li>
                                      );
                                    return undefined;
                                  })}
                                </ul>
                              </div>
                            </dd>
                          </div>
                        );
                      return null;
                    })}
                </div>
              </Fragment>
            );
          })}
        </div>
      )}
    </Fragment>
  );
};

export default SingleUser;
