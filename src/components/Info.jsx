import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DumyCard } from "./Data";
import { useLocation } from "react-router-dom";

const Info = () => {
  // bring to top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navigate = useNavigate();
  const handleShowCard = (id) => {
    navigate(`/about/${id}`);
  };
  return (
    <div className="container  my-16 md:my-[50px] lg:my-[150px]">
      <div className="md:flex md:justify-center md:gap-[70px]">
        {/* This is card */}
        <div className="hidden lg:grid  md:gap-[81px] ">
          {DumyCard.map((record) => {
            return (
              <div
                onClick={() => {
                  handleShowCard(record.id);
                }}
                className="w-[195px] h-[250px] bg-[#DEAF07] p-[6px] rounded cursor-pointer"
                key={record.id}
              >
                <img
                  src={record.img}
                  alt=""
                  className=" w-[181px] h-[181px] mx-auto rounded"
                />
                <h2 className="text-[14px] font-bold py-[5px]">
                  {record.title}
                </h2>
                <p className=" text-[8px]">{record.details}</p>
              </div>
            );
          })}
        </div>

        {/* This is table */}
        <div className="">
          <div className="flex justify-center mb-10 md:mb-12">
            <button className="bg-[#DEAF07] text-base py-3 px-5 md:py-[16px] md:px-[84px]">
              Enter To Competition
            </button>
          </div>
          <div className="border rounded border-[#DEAF07]">
            <table className="w-[100%] md:w-[500px] xl:w-[690px] divide-y divide-[#DEAF07]">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 md:px-6 py-3 text-left font-medium text-[#FCC607] uppercase"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-5 md:px-6 py-3 text-left font-medium text-[#FCC607] uppercase"
                  >
                    Age
                  </th>
                  <th
                    scope="col"
                    className="px-5 md:px-6 py-3 text-left font-medium text-[#FCC607] uppercase"
                  >
                    Address
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-5 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                    John Brown
                  </td>
                  <td className="px-5 md:px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                    45
                  </td>
                  <td className="px-5 md:px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                    New York No. 1 Lake Park
                  </td>
                </tr>

                <tr>
                  <td className="px-5 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                    Jim Green
                  </td>
                  <td className="px-5 md:px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                    27
                  </td>
                  <td className="px-5 md:px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                    London No. 1 Lake Park
                  </td>
                </tr>

                <tr>
                  <td className="px-5 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                    Joe Black
                  </td>
                  <td className="px-5 md:px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                    31
                  </td>
                  <td className="px-5 md:px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                    Sidney No. 1 Lake Park
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* This is card */}
        <div className="hidden lg:grid  gap-y-[81px]">
          {DumyCard.map((record) => {
            return (
              <div
                onClick={() => {
                  handleShowCard(record.id);
                }}
                className="w-[195px] h-[250px] bg-[#DEAF07] p-[6px] rounded cursor-pointer"
                key={record.id}
              >
                <img
                  src={record.img}
                  alt=""
                  className=" w-[181px] h-[181px] mx-auto rounded"
                />
                <h2 className="text-[14px] font-bold py-[5px]">
                  {record.title}
                </h2>
                <p className=" text-[8px]">{record.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Info;
