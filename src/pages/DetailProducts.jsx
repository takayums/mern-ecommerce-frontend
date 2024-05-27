import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { Tshirt } from "../assets";
import { BiHeart } from "react-icons/bi";
import { TfiMore } from "react-icons/tfi";
import { FaRegStar } from "react-icons/fa";

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

        <div className="mt-10 flex gap-8">
          <div className="basis-60 flex gap-4 flex-col">
            <button className="flex items-center gap-4 px-6 py-2 rounded-lg bg-gray-200 font-medium text-base">
              <TfiMore />
              Details
            </button>
            <button className="flex items-center gap-4 px-6 py-2 rounded-lg font-medium text-base">
              <FaRegStar />
              Reviews
            </button>
          </div>
          <div className="grow">
            <p className="font-medium text-base mb-6">Detail</p>
            <p className="text-sm text-gray-500 leading-5 mb-14">
              Elevate your everyday style with our Men's Black T-Shirts, the
              ultimate wardrobe essential for modern men. Crafted with
              meticulous attention to detail and designed for comfort, these
              versatile black tees are a must-have addition to your collection.
              The classic black color never goes out of style. Whether you're
              dressing up for a special occasion or keeping it casual, these
              black t-shirts are the perfect choice, effortlessly complementing
              any outfit.
            </p>
            <ul className="list-disc text-gray-500">
              <li>Premium Quality</li>
              <li>Versatile Wardrobe Staple</li>
              <li>Available in Various Sizes</li>
              <li>Tailored Fit</li>
            </ul>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="font-bold text-2xl mb-2">You might also like</h3>
          <p className="text-sm text-gray-400 uppercase">similar products</p>
          <div className="mt-14 grid grid-cols-4 gap-5">
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
        </div>
      </div>
    </section>
  );
};

export default DetailProducts;
