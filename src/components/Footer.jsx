import React from "react";
import { Amex, Logo, Mastercard, Visa } from "../assets";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-36">
      <div className="bg-gray-300 mb-10">
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
      <div className="container max-w-5xl mx-auto">
        <div className="flex justify-between mb-20">
          <div className="w-[272px]">
            <div className="flex items-center gap-4 mb-3">
              <img src={Logo} className="bg-black px-3 py-1 rounded-lg" />
              <p className="font-bold text-xl">Ecommerce</p>
            </div>
            <p className="text-gray-500 text-sm mb-6">
              DevCut is a YouTube channel for practical project-based learning.
            </p>
            <div className="flex text-2xl gap-6 items-center">
              <FaGithub />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="mb-10 text-sm font-medium text-gray-400 uppercase">
                support
              </p>
              <ul className="space-y-4">
                <li className="text-sm text-gray-700 font-medium capitalize">
                  FAQ
                </li>
                <li className="text-sm text-gray-700 font-medium capitalize">
                  terms of you
                </li>
                <li className="text-sm text-gray-700 font-medium capitalize">
                  pricacy policy
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-10 text-sm font-medium text-gray-400 uppercase">
                company
              </p>
              <ul className="space-y-4">
                <li className="text-sm text-gray-700 font-medium capitalize">
                  About Us
                </li>
                <li className="text-sm text-gray-700 font-medium capitalize">
                  Contacts
                </li>
                <li className="text-sm text-gray-700 font-medium capitalize">
                  Careers
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-10 text-sm font-medium text-gray-400 uppercase">
                shop
              </p>
              <ul className="space-y-4">
                <li className="text-sm text-gray-700 font-medium capitalize">
                  my account
                </li>
                <li className="text-sm text-gray-700 font-medium capitalize">
                  checkout
                </li>
                <li className="text-sm text-gray-700 font-medium capitalize">
                  cart
                </li>
              </ul>
            </div>
          </div>

          <div>
            <p className="mb-10 text-sm font-medium text-gray-400 uppercase">
              accepted payment
            </p>
            <div className="flex gap-4">
              <img src={Mastercard} alt="Mastercard" className="grayscale" />
              <img src={Amex} alt="Amex" className="grayscale" />
              <img src={Visa} alt="Visa" className="grayscale" />
            </div>
          </div>
        </div>

        <div className="text-center p-6">
          <p className="text-sm text-gray-500">
            &copy; 2024 DevCut. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
