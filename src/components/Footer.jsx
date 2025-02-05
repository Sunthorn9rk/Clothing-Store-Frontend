import React from "react";
import {FaFacebookF} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {GoMail} from "react-icons/go";

function Footer() {
  return (
    <footer class="bg-black/10 w-full relative pt-52 mt-52 md:pt-36 md:mt-36 lg:pt-28 lg:mt-28 ">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6  lg:py-8 ">
        <div className="mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl md:flex md:justify-between p-12 bg-black rounded-3xl absolute top-[-220px] mr-2 md:top-[-150px] md:mr-5 lg:top-[-115px] lg:mr-1">
          <div className="text-white text-5xl font-black w-full xl:w-3/5 flex items-center justify-center">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </div>
          <div className="w-full xl:w-2/6 space-y-4 pt-10 md:pt-0">
            <div className="bg-white p-4 rounded-3xl text-base flex gap-2 text-black/40">
              <GoMail className="size-6" />
              Enter your email address
            </div>
            <div>
              <a href="#">
                <div className="bg-white p-4 rounded-3xl text-base text-center">
                  Subscribe to Newsletter
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="md:flex md:justify-between mb-12">
          <div class="mb-6 md:mb-0">
            {/* LOGO */}
            <a href="/" className="flex items-center space-x-3 ">
              <span className="self-center text-3xl font-black whitespace-nowrap">
                SHOP.CO
              </span>
            </a>
            <div className="max-w-full md:max-w-80 pr-4 pt-8">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </div>
            <div className="pt-10 flex gap-4">
              <a href="#" class="">
                <div className="bg-black text-white rounded-full flex items-center justify-center p-2 w-8">
                  <FaXTwitter />
                </div>
                <span class="sr-only">X twitter page</span>
              </a>
              <a href="#" class="">
                <div className="bg-black text-white rounded-full flex items-center justify-center p-2 w-8">
                  <FaFacebookF />
                </div>
                <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="">
                <div className="bg-black text-white rounded-full flex items-center justify-center p-2 w-8">
                  <FaInstagram />
                </div>
                <span class="sr-only">instagram page</span>
              </a>
              <a href="#" class="">
                <div className="bg-black text-white rounded-full flex items-center justify-center p-2 w-8">
                  <FaGithub />
                </div>
                <span class="sr-only">Github page</span>
              </a>
            </div>
          </div>
          <div class="grid md:grid-cols-4 xl:gap-20 gap-6 grid-cols-2">
            <div>
              <h2 class="mb-6 text-xl font-normal text-gray-900 uppercase">
                Company
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li className="my-4">
                  <a href="#" class="hover:underline">
                    About
                  </a>
                </li>
                <li className="my-4">
                  <a href="#" class="hover:underline">
                    Features
                  </a>
                </li>
                <li className="my-4">
                  <a href="#" class="hover:underline">
                    Works
                  </a>
                </li>
                <li className="my-4">
                  <a href="#" class="hover:underline">
                    Career
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-xl font-normal text-gray-900 uppercase">
                Help
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li className="my-4">
                  <a href="#" class="hover:underline">
                    Customer Support
                  </a>
                </li>
                <li className="my-4">
                  <a href="#" class="hover:underline">
                    Delivery Details
                  </a>
                </li>
                <li className="my-4">
                  <a href="#" class="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
                <li className="my-4">
                  <a href="#" class="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-xl font-normal text-gray-900 uppercase">
                FAQ
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li className="my-4">
                  <a href="#" class="hover:underline">
                    Account
                  </a>
                </li>
                <li className="my-4">
                  <a href="#" class="hover:underline">
                    Manage Deliveries
                  </a>
                </li>
                <li className="my-4">
                  <a href="#" class="hover:underline">
                    Orders
                  </a>
                </li>
                <li className="my-4">
                  <a href="#" class="hover:underline">
                    Payments
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-xl font-normal text-gray-900 uppercase">
                Resources
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li className="my-4">
                  <a href="#" class="hover:underline">
                    Free eBooks
                  </a>
                </li>
                <li className="my-4">
                  <a href="#" class="hover:underline">
                    Development Tutorial
                  </a>
                </li>
                <li className="my-4">
                  <a href="#" class="hover:underline">
                    How to - Blog
                  </a>
                </li>
                <li className="my-4">
                  <a href="#" class="hover:underline">
                    Youtube Playlist
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-2 border-gray-300 sm:mx-auto" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            SHOP.CO © 2000-2024, All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
            <div>
              <img src="/Badge.png" className=" w-20" />
              <span class="sr-only">Facebook page</span>
            </div>
            <div>
              <img src="/Badge-1.png" className=" w-20" />
              <span class="sr-only">Facebook page</span>
            </div>
            <div>
              <img src="/Badge-2.png" className=" w-20" />
              <span class="sr-only">Facebook page</span>
            </div>
            <div>
              <img src="/Badge-3.png" className=" w-20" />
              <span class="sr-only">Facebook page</span>
            </div>
            <div>
              <img src="/Badge-4.png" />
              <span class="sr-only">Facebook page</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
