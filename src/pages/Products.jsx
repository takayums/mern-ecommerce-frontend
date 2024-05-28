import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Tshirt } from "../assets";

const Products = () => {
  return (
    <section>
      <div className="bg-gray-100 py-4">
        <div className="max-w-5xl mx-auto container">
          <p className="flex gap-1 items-center text-gray-500">
            Ecommerce <FiChevronRight />
            <span className="font-medium text-black">Search</span>
          </p>
        </div>
      </div>

      <div className="container max-w-5xl mx-auto mt-8 grid grid-cols-4 gap-5">
        <div className="space-y-10 h-fit pt-6 pl-4 pr-3 pb-8 border border-gray-200 rounded-xl">
          <div>
            <p className="text-sm font-medium mb-4">Categories</p>
            <ul>
              <li className="flex items-center gap-2 py-3 px-1 border-b-2 border-gray-200">
                <input
                  type="checkbox"
                  className="h-4 w-4 bg-gray-100 border rounded-sm border-gray-300"
                />
                <label className="text-sm text-gray-600">Perfume</label>
              </li>
              <li className="flex items-center gap-2 py-3 px-1 border-b-2 border-gray-200">
                <input
                  type="checkbox"
                  className="h-4 w-4 bg-gray-100 border rounded-sm border-gray-300"
                />
                <label className="text-sm text-gray-600">Trousers</label>
              </li>
              <li className="flex items-center gap-2 py-3 px-1 border-b-2 border-gray-200">
                <input
                  type="checkbox"
                  className="h-4 w-4 bg-gray-100 border rounded-sm border-gray-300"
                />
                <label className="text-sm text-gray-600">Shoe</label>
              </li>
              <li className="flex items-center gap-2 py-3 px-1 border-b-2 border-gray-200">
                <input
                  type="checkbox"
                  className="h-4 w-4 bg-gray-100 border rounded-sm border-gray-300"
                />
                <label className="text-sm text-gray-600">Handbag</label>
              </li>
              <li className="flex items-center gap-2 py-3 px-1 border-b-2 border-gray-200">
                <input
                  type="checkbox"
                  className="h-4 w-4 bg-gray-100 border rounded-sm border-gray-300"
                />
                <label className="text-sm text-gray-600">Hat</label>
              </li>
              <li className="flex items-center gap-2 py-3 px-1 border-b-2 border-gray-200">
                <input
                  type="checkbox"
                  className="h-4 w-4 bg-gray-100 border rounded-sm border-gray-300"
                />
                <label className="text-sm text-gray-600">Thermos</label>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium mb-4">Colors</p>
            <ul className="flex gap-2">
              <li>
                <button className="w-8 h-8 rounded-full bg-blue-400 focus:border focus:border-black focus:p-1"></button>
              </li>
              <li>
                <button className="w-8 h-8 rounded-full bg-yellow-400 focus:border focus:border-black focus:p-1"></button>
              </li>
              <li>
                <button className="w-8 h-8 rounded-full bg-green-400 focus:border focus:border-black focus:p-1"></button>
              </li>
              <li>
                <button className="w-8 h-8 rounded-full bg-blue-600 focus:border focus:border-black focus:p-1"></button>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium mb-4">Size</p>
            <ul className="flex gap-2 flex-wrap">
              <li>
                <button className="focus:border-black text-sm border-gray-300 uppercase w-10 h-10 rounded-lg border-2">
                  s
                </button>
              </li>
              <li>
                <button className="focus:border-black text-sm border-gray-300 uppercase w-10 h-10 rounded-lg border-2">
                  m
                </button>
              </li>
              <li>
                <button className="focus:border-black text-sm border-gray-300 uppercase w-10 h-10 rounded-lg border-2">
                  x
                </button>
              </li>
              <li>
                <button className="focus:border-black text-sm border-gray-300 uppercase w-10 h-10 rounded-lg border-2">
                  xl
                </button>
              </li>
              <li>
                <button className="focus:border-black text-sm border-gray-300 uppercase w-10 h-10 rounded-lg border-2">
                  xxl
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-3">
          <div>
            <p className="text-sm font-medium mb-4">Applied Filters:</p>
            <div className="mb-7">
              <span className="px-4 py-1 mr-4 inline-flex gap-1 items-center rounded-full border border-gray-300 text-sm capitalize">
                In Stock
                <IoCloseOutline className="text-base" />
              </span>
              <span className="px-4 py-1 mr-4 inline-flex gap-1 items-center rounded-full border border-gray-300 text-sm capitalize">
                In Stock
                <IoCloseOutline className="text-base" />
              </span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-gray-500">
                Showing 1-9 of 36 results.
              </p>
              <p className="flex items-center text-gray-500">
                Sort by <MdKeyboardArrowDown className="text-base ml-1" />
              </p>
            </div>
            <div className="grid grid-cols-3">
              <div className="py-4 px-2">
                <div className="w-full rounded bg-gray-200 mb-6">
                  <img
                    src={Tshirt}
                    alt="Tshirt"
                    className="w-full object-cover object-center"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium mb-3">
                    Classic Monochrome Tees
                  </p>
                  <span className="px-4 py-1 mr-4 rounded-full border border-gray-300 text-sm uppercase">
                    In Stock
                  </span>
                  <span className="text-base text-gray-600">$35.00</span>
                </div>
              </div>
              <div className="py-4 px-2">
                <div className="w-full rounded bg-gray-200 mb-6">
                  <img
                    src={Tshirt}
                    alt="Tshirt"
                    className="w-full object-cover object-center"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium mb-3">
                    Classic Monochrome Tees
                  </p>
                  <span className="px-4 py-1 mr-4 rounded-full border border-gray-300 text-sm uppercase">
                    In Stock
                  </span>
                  <span className="text-base text-gray-600">$35.00</span>
                </div>
              </div>
              <div className="py-4 px-2">
                <div className="w-full rounded bg-gray-200 mb-6">
                  <img
                    src={Tshirt}
                    alt="Tshirt"
                    className="w-full object-cover object-center"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium mb-3">
                    Classic Monochrome Tees
                  </p>
                  <span className="px-4 py-1 mr-4 rounded-full border border-gray-300 text-sm uppercase">
                    In Stock
                  </span>
                  <span className="text-base text-gray-600">$35.00</span>
                </div>
              </div>
              <div className="py-4 px-2">
                <div className="w-full rounded bg-gray-200 mb-6">
                  <img
                    src={Tshirt}
                    alt="Tshirt"
                    className="w-full object-cover object-center"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium mb-3">
                    Classic Monochrome Tees
                  </p>
                  <span className="px-4 py-1 mr-4 rounded-full border border-gray-300 text-sm uppercase">
                    In Stock
                  </span>
                  <span className="text-base text-gray-600">$35.00</span>
                </div>
              </div>
              <div className="py-4 px-2">
                <div className="w-full rounded bg-gray-200 mb-6">
                  <img
                    src={Tshirt}
                    alt="Tshirt"
                    className="w-full object-cover object-center"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium mb-3">
                    Classic Monochrome Tees
                  </p>
                  <span className="px-4 py-1 mr-4 rounded-full border border-gray-300 text-sm uppercase">
                    In Stock
                  </span>
                  <span className="text-base text-gray-600">$35.00</span>
                </div>
              </div>
              <div className="py-4 px-2">
                <div className="w-full rounded bg-gray-200 mb-6">
                  <img
                    src={Tshirt}
                    alt="Tshirt"
                    className="w-full object-cover object-center"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium mb-3">
                    Classic Monochrome Tees
                  </p>
                  <span className="px-4 py-1 mr-4 rounded-full border border-gray-300 text-sm uppercase">
                    In Stock
                  </span>
                  <span className="text-base text-gray-600">$35.00</span>
                </div>
              </div>
              <div className="py-4 px-2">
                <div className="w-full rounded bg-gray-200 mb-6">
                  <img
                    src={Tshirt}
                    alt="Tshirt"
                    className="w-full object-cover object-center"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium mb-3">
                    Classic Monochrome Tees
                  </p>
                  <span className="px-4 py-1 mr-4 rounded-full border border-gray-300 text-sm uppercase">
                    In Stock
                  </span>
                  <span className="text-base text-gray-600">$35.00</span>
                </div>
              </div>
              <div className="py-4 px-2">
                <div className="w-full rounded bg-gray-200 mb-6">
                  <img
                    src={Tshirt}
                    alt="Tshirt"
                    className="w-full object-cover object-center"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium mb-3">
                    Classic Monochrome Tees
                  </p>
                  <span className="px-4 py-1 mr-4 rounded-full border border-gray-300 text-sm uppercase">
                    In Stock
                  </span>
                  <span className="text-base text-gray-600">$35.00</span>
                </div>
              </div>
              <div className="py-4 px-2">
                <div className="w-full rounded bg-gray-200 mb-6">
                  <img
                    src={Tshirt}
                    alt="Tshirt"
                    className="w-full object-cover object-center"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium mb-3">
                    Classic Monochrome Tees
                  </p>
                  <span className="px-4 py-1 mr-4 rounded-full border border-gray-300 text-sm uppercase">
                    In Stock
                  </span>
                  <span className="text-base text-gray-600">$35.00</span>
                </div>
              </div>
              <div className="py-4 px-2">
                <div className="w-full rounded bg-gray-200 mb-6">
                  <img
                    src={Tshirt}
                    alt="Tshirt"
                    className="w-full object-cover object-center"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium mb-3">
                    Classic Monochrome Tees
                  </p>
                  <span className="px-4 py-1 mr-4 rounded-full border border-gray-300 text-sm uppercase">
                    In Stock
                  </span>
                  <span className="text-base text-gray-600">$35.00</span>
                </div>
              </div>
              <div className="py-4 px-2">
                <div className="w-full rounded bg-gray-200 mb-6">
                  <img
                    src={Tshirt}
                    alt="Tshirt"
                    className="w-full object-cover object-center"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium mb-3">
                    Classic Monochrome Tees
                  </p>
                  <span className="px-4 py-1 mr-4 rounded-full border border-gray-300 text-sm uppercase">
                    In Stock
                  </span>
                  <span className="text-base text-gray-600">$35.00</span>
                </div>
              </div>
              <div className="py-4 px-2">
                <div className="w-full rounded bg-gray-200 mb-6">
                  <img
                    src={Tshirt}
                    alt="Tshirt"
                    className="w-full object-cover object-center"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium mb-3">
                    Classic Monochrome Tees
                  </p>
                  <span className="px-4 py-1 mr-4 rounded-full border border-gray-300 text-sm uppercase">
                    In Stock
                  </span>
                  <span className="text-base text-gray-600">$35.00</span>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <ul className="flex justify-center items-center">
                <li className="px-2">
                  <button
                    aria-disabled="true"
                    disabled=""
                    className="w-9 h-9 flex items-center justify-center rounded-md border disabled"
                  >
                    <span>
                      <svg
                        width="8"
                        height="15"
                        viewBox="0 0 8 15"
                        className="fill-current stroke-current"
                      >
                        <path
                          d="M7.12979 1.91389L7.1299 1.914L7.1344 1.90875C7.31476 1.69833 7.31528 1.36878 7.1047 1.15819C7.01062 1.06412 6.86296 1.00488 6.73613 1.00488C6.57736 1.00488 6.4537 1.07206 6.34569 1.18007L6.34564 1.18001L6.34229 1.18358L0.830207 7.06752C0.830152 7.06757 0.830098 7.06763 0.830043 7.06769C0.402311 7.52078 0.406126 8.26524 0.827473 8.73615L0.827439 8.73618L0.829982 8.73889L6.34248 14.6014L6.34243 14.6014L6.34569 14.6047C6.546 14.805 6.88221 14.8491 7.1047 14.6266C7.30447 14.4268 7.34883 14.0918 7.12833 13.8693L1.62078 8.01209C1.55579 7.93114 1.56859 7.82519 1.61408 7.7797L1.61413 7.77975L1.61729 7.77639L7.12979 1.91389Z"
                          strokeWidth="0.3"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </li>
                <li className="px-2">
                  <button className="w-9 h-9 rounded-md border hover:border-cyan-500 hover:text-indigo-500 text-indigo-500">
                    1
                  </button>
                </li>
                <li className="px-2">
                  <button className="w-9 h-9 rounded-md border hover:border-cyan-500 hover:text-indigo-500">
                    2
                  </button>
                </li>
                <li className="px-2">
                  <button className="w-9 h-9 rounded-md border hover:border-cyan-500 hover:text-indigo-500">
                    3
                  </button>
                </li>
                <li className="px-2">
                  <button className="w-9 h-9 rounded-md border hover:border-cyan-500 hover:text-indigo-500">
                    4
                  </button>
                </li>
                <li className="px-2">
                  <button className="w-9 h-9 rounded-md border hover:border-cyan-500 hover:text-indigo-500">
                    5
                  </button>
                </li>
                <li className="px-2">
                  <button
                    aria-disabled="false"
                    className="w-9 h-9 flex items-center justify-center rounded-md border hover:text-indigo-500"
                  >
                    <span>
                      <svg
                        width="8"
                        height="15"
                        viewBox="0 0 8 15"
                        className="fill-current stroke-current"
                      >
                        <path
                          d="M0.870212 13.0861L0.870097 13.086L0.865602 13.0912C0.685237 13.3017 0.684716 13.6312 0.895299 13.8418C0.989374 13.9359 1.13704 13.9951 1.26387 13.9951C1.42264 13.9951 1.5463 13.9279 1.65431 13.8199L1.65436 13.82L1.65771 13.8164L7.16979 7.93248C7.16985 7.93243 7.1699 7.93237 7.16996 7.93231C7.59769 7.47923 7.59387 6.73477 7.17253 6.26385L7.17256 6.26382L7.17002 6.26111L1.65752 0.398611L1.65757 0.398563L1.65431 0.395299C1.454 0.194997 1.11779 0.150934 0.895299 0.373424C0.695526 0.573197 0.651169 0.908167 0.871667 1.13067L6.37922 6.98791C6.4442 7.06886 6.43141 7.17481 6.38592 7.2203L6.38587 7.22025L6.38271 7.22361L0.870212 13.0861Z"
                          strokeWidth="0.3"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
