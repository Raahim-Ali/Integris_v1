"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Pages = ["Home", "Services", "Our Work", "About Us", "Contact Us"];
const Resources = ["Blog", "Careers", "Podcast", "Forum"];

export default function Footer() {
  return (
    <div className="flex flex-col  bg-primaryBlack">
      <div
        className="flex gap-10"
        style={{
          padding: "130px 165px",
        }}
      >
        {/* Left Section */}
        <div className="flex flex-col w-2/5 gap-6">
          <div>
            <p className="text-main text-4xl font-bold poppins">OCTALCODE</p>
          </div>
          <div className="flex flex-col gap-8">
            <p
              className="text-sm text-whitePrimary font-medium inter"
              style={{ width: "426px" }}
            >
              Octal Code, we excel in web development, offering a comprehensive
              suite of services encompassing the entire software development
              lifecycle.
            </p>
            <div className="flex gap-5">
              <Link href="#">
                <Image
                  src="/Assets/Footer/Facebook.svg"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="#">
                <Image src="/Assets/Footer/Insta.svg" width={30} height={30} />
              </Link>
              <Link href="#">
                <Image
                  src="/Assets/Footer/Twitter.svg"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex w-3/5 justify-end gap-16">
          {/* Explore Section */}
          <div className="w-1/3 flex flex-col  gap-6">
            <p className="text-whitePrimary text-2xl font-bold uppercase poppins">
              Pages
            </p>
            <div className="flex flex-col gap-3 ">
              {Pages.map((item, index) => (
                <p
                  className="text-sm text-whitePrimary font-medium inter"
                  key={index}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="w-1/3 flex flex-col  gap-6">
            <p className="text-whitePrimary text-2xl font-bold uppercase poppins">
              Resources
            </p>
            <div className="flex flex-col gap-3">
              {Resources.map((item, index) => (
                <p
                  className="text-sm text-whitePrimary font-medium inter"
                  key={index}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Legal Section */}
          <div className="w-1/3 flex flex-col  gap-6">
            <p className="text-whitePrimary text-2xl font-bold uppercase poppins">
              Legal
            </p>
            <div className="flex flex-col gap-3">
              <p className="text-whitePrimary text-sm font-normal inter">
                <Link href="#">Terms</Link>
              </p>
              <p className="text-whitePrimary text-sm font-normal inter">
                <Link href="#">Privacy</Link>
              </p>
              <p className="text-whitePrimary text-sm font-normal inter">
                <Link href="#">Others</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="text-center text-gray-600 pt-5 pb-5">
        © 2023 OctalCode. All rights reserved.
      </div>
    </div>
  );
}
