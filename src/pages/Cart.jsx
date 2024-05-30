import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Tshirt } from "../assets";

const Cart = () => {
  return (
    <section>
      <div className="bg-gray-100 py-4">
        <div className="max-w-5xl mx-auto container">
          <p className="flex gap-1 items-center text-gray-500">
            Ecommerce <FiChevronRight />
            <span className="font-medium text-black">Cart</span>
          </p>
        </div>
      </div>
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-6 mt-10 gap-10">
          <div className="col-span-4">
            <p className="font-semibold border-b-2 border-gray-200 pb-4 text-base text-black capitalize">
              Your Cart
            </p>
            <div className="flex flex-col gap-10">
              <div className="flex items-center justify-between">
                <div className="w-20 h-20 p-4 rounded bg-gray-200">
                  <img
                    src={Tshirt}
                    alt="Tshirt"
                    className="w-full object-cover object-center"
                  />
                </div>
                <div>
                  <p className="text-lg font-medium text-black">
                    Raw Black T-Shirt Lineup
                  </p>
                  <div className="font-medium text-base flex text-gray-500 items-center gap-2">
                    <p className="flex items-center">
                      Color:
                      <div className="w-3 h-3 rounded-full bg-green-400 ml-2"></div>
                    </p>
                    <p>-</p>
                    <p>Size: M</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-medium text-base text-black">$75.00</p>
                  <div className="border inline px-4 py-2 rounded-lg text-base space-x-8">
                    <button className="text-xl">+</button>
                    <input value={1} className="w-5 text-center" />
                    <button className="text-xl">-</button>
                  </div>
                  <div className="p-2.5 bg-gray-300 rounded">
                    <IoClose />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-20 h-20 p-4 rounded bg-gray-200">
                  <img
                    src={Tshirt}
                    alt="Tshirt"
                    className="w-full object-cover object-center"
                  />
                </div>
                <div>
                  <p className="text-lg font-medium text-black">
                    Raw Black T-Shirt Lineup
                  </p>
                  <div className="font-medium text-base flex text-gray-500 items-center gap-2">
                    <p className="flex items-center">
                      Color:
                      <div className="w-3 h-3 rounded-full bg-green-400 ml-2"></div>
                    </p>
                    <p>-</p>
                    <p>Size: M</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-medium text-base text-black">$75.00</p>
                  <div className="border inline px-4 py-2 rounded-lg text-base space-x-8">
                    <button className="text-xl">+</button>
                    <input value={1} className="w-5 text-center" />
                    <button className="text-xl">-</button>
                  </div>
                  <div className="p-2.5 bg-gray-300 rounded">
                    <IoClose />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-20 h-20 p-4 rounded bg-gray-200">
                  <img
                    src={Tshirt}
                    alt="Tshirt"
                    className="w-full object-cover object-center"
                  />
                </div>
                <div>
                  <p className="text-lg font-medium text-black">
                    Raw Black T-Shirt Lineup
                  </p>
                  <div className="font-medium text-base flex text-gray-500 items-center gap-2">
                    <p className="flex items-center">
                      Color:
                      <div className="w-3 h-3 rounded-full bg-green-400 ml-2"></div>
                    </p>
                    <p>-</p>
                    <p>Size: M</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-medium text-base text-black">$75.00</p>
                  <div className="border inline px-4 py-2 rounded-lg text-base space-x-8">
                    <button className="text-xl">+</button>
                    <input value={1} className="w-5 text-center" />
                    <button className="text-xl">-</button>
                  </div>
                  <div className="p-2.5 bg-gray-300 rounded">
                    <IoClose />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 pt-8 px-6 pb-10 rounded border border-gray-300 h-fit">
            <p className="mb-8 text-lg font-semibold text-black">
              Order Summary
            </p>
            <div className="space-y-3 border-b border-gray-300 pb-6">
              <p className="flex text-base font-medium justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="text-black">$300.00</span>
              </p>
              <p className="flex text-base font-medium justify-between">
                <span className="text-gray-500">Shipping:</span>
                <span className="text-black">Free</span>
              </p>
              <p className="flex text-base font-medium justify-between">
                <span className="text-gray-500">Tax:</span>
                <span className="text-black">$300.00</span>
              </p>
            </div>
            <p className="flex text-base font-medium mt-6 mb-8 justify-between">
              <span className="text-black">Total:</span>
              <span className="text-black">$300.00</span>
            </p>
            <button className="w-full mb-8 py-3 bg-black font-medium rounded-md text-white text-sm">
              Add Cart
            </button>
            <p className="underline text-sm text-center">Continue Shopping</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
