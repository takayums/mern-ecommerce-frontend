import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { Tshirt, Tshirt2, User } from "../assets";

const Home = () => {
  return (
    <section>
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-2 items-center h-[440px]">
          <div className="">
            <h1 className="text-3xl font-semibold text-black mb-3">
              Fresh Arrivals Online
            </h1>
            <p className="text-sm text-gray-500 mb-12">
              Discover Our Newest Collection Today.
            </p>
            <button className="px-6 py-3 flex items-center bg-black font-medium text-white rounded-md">
              View Collection
              <span className="p-1">
                <BiRightArrowAlt className="text-xl" />
              </span>
            </button>
          </div>
          <div className="">
            <img src={User} alt="User" className="ml-auto" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-12 mt-11">
          <div>
            <div className="inline-block p-2 rounded-full bg-gray-200 text-xl mb-6">
              <TbTruckDelivery />
            </div>
            <p className="text-base font-semibold mb-3">Free Shipping</p>
            <p className="text-sm font-normal text-gray-500">
              Upgrade your style today and get FREE shipping on all orders!
              Don't miss out.
            </p>
          </div>
          <div>
            <div className="inline-block p-2 rounded-full bg-gray-200 text-xl mb-6">
              <BsStars />
            </div>
            <p className="text-base font-semibold mb-3">
              Satisfaction Guarantee
            </p>
            <p className="text-sm font-normal text-gray-500">
              Shop confidently with our Satisfaction Guarantee: Love it or get a
              refund.
            </p>
          </div>
          <div>
            <div className="inline-block p-2 rounded-full bg-gray-200 text-xl mb-6">
              <RiSecurePaymentLine />
            </div>
            <p className="text-base font-semibold mb-3">Secure Payment</p>
            <p className="text-sm font-normal text-gray-500">
              Your security is our priority. Your payments are secure with us.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-[12px] uppercase text-gray-400 text-center">
            Shop Now
          </p>
          <h3 className="text-2xl capitalize font-bold text-center mb-10">
            Best Selling
          </h3>
          <div className="grid grid-cols-4 gap-5">
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

        <div className="grid grid-cols-2 items-center h-[440px]">
          <div className="">
            <h3 className="text-2xl font-semibold text-black mb-3">
              Browse Our Fashion Paradise!
            </h3>
            <p className="text-sm text-gray-500 mb-12">
              Step into a world of style and explore our diverse collection of
              clothing categories.
            </p>
            <button className="px-6 py-3 flex items-center bg-black font-medium text-white rounded-md">
              Sart Browsing
              <span className="p-1">
                <BiRightArrowAlt className="text-2xl" />
              </span>
            </button>
          </div>
          <div className="w-[225px] ml-auto">
            <img src={Tshirt2} alt="User" />
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="px-4 py-1 mr-4 rounded-full border border-gray-300 font-medium text-sm uppercase">
              Features
            </span>
            <span className="px-4 py-1 mr-4 rounded-full text-sm uppercase text-gray-500 font-medium">
              Latest
            </span>
          </div>
          <div className="grid grid-cols-4 gap-5">
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
      <div className="bg-gray-300">
        <div className="container mx-auto max-w-[1116px] flex items-center justify-between p-14">
          <div className="basis-1/2">
            <h3 className="text-2xl capitalize font-bold mb-6">
              Joint Our Newslatter
            </h3>
            <p className="font-normal text-sm text-gray-500">
              We love to surprise our subscribers with occasional gifts.
            </p>
          </div>
          <div>
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md text-sm mr-4"
            />
            <button className="text-sm font-medium text-white px-4 py-3 bg-black rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
