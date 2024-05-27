import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { Tshirt } from "../assets";
import { BiHeart } from "react-icons/bi";

const DetailProducts = () => {
  return (
    <section className="px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-4">
          <p className="flex gap-1 items-center text-gray-500">
            Ecommerce <FiChevronRight />
            <span className="font-medium text-black">Black Man-Tshirt</span>
          </p>
        </div>

        <div className="flex">
          <div className="relative bg-gray-200 basis-1/2">
            <img
              src={Tshirt}
              alt="Tshirt"
              className="w-72 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="basis-1/2 pl-28">
            <div className="flex justify-between mb-3">
              <h1 className="font-bold text-2xl text-black">
                Raw Black T-Shirt Lineup
              </h1>
              <IoShareSocialOutline className="text-2xl text-gray-500" />
            </div>
            <div className="flex gap-2">
              <p className="text-sm text-gray-500 flex gap-1 items-center font-medium px-4 p-1 rounded-full bg-gray-300">
                <IoMdStar className="text-gray-500 text-2xl" />
                4.2 - 54 Reviews
              </p>
              <span className="px-4 py-1 mr-4 rounded-full border-2 border-gray-300 text-gray-500 font-medium text-sm uppercase">
                In Stock
              </span>
            </div>
            <p className="mt-6 text-lg font-semibold text-black">$75.00</p>
            <div className="mt-8">
              <p className="text-gray-500 mb-2.5 font-medium uppercase">
                Avalabel colors
              </p>
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
              </ul>
            </div>

            <div className="mt-6">
              <p className="text-gray-500 mb-2.5 font-medium uppercase">
                select size
              </p>
              <ul className="flex gap-2">
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

            <div className="mt-8">
              <p className="text-gray-500 font-medium uppercase mb-2.5">
                select size
              </p>
              <div className="border inline px-4 py-2 rounded-lg text-base space-x-8">
                <button className="text-xl">+</button>
                <input value={1} className="w-5 text-center" />
                <button className="text-xl">-</button>
              </div>
            </div>

            <div className="mt-10 inline-flex gap-3">
              <button className="px-28 py-3 bg-black font-medium rounded-md text-white text-sm">
                Add Cart
              </button>
              <button className="px-6 py-3 outline-none rounded-md border border-b-gray-400">
                <BiHeart className="text-lg" />
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              — Free shipping on orders $100+
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProducts;
