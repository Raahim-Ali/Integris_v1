import Greenbtn from "@/app/components/Greenbtn";
import Image from "next/image";
import React from "react";

export default function HealthTech() {
  return (
    <>
      <div div style={{ padding: "100px 0px" }}>
        <div
          className="flex gap-3"
          style={{
            width: "100%",
            padding: "0px 165px",
            justifyContent: "center",
            fontStretch: "expanded",
          }}
        >
          <d iv style={{ width: "50%" }} className=" flex flex-col gap-5">
            <p
              className="text-BlackPrimary poppins text-3xl font-semibold"
              style={{ lineHeight: " 144.622%", width: "95%" }}
            >
              HealthTech Startup re-create serves 1000 customers in their first
              year with zero costs using AWS
            </p>
            <p className="custom-text-24 font-medium inter">
              Power of AWS Lambda
            </p>
            <div className="flex flex-col gap-3">
              <p
                className="text-xl poppins font-light text-rgb"
                style={{ width: "95%" }}
              >
                Lambda functions were used in the project allowing Moonfare to
                pay micropayments only for requests that have been handled –
                serverless lets you process the code without needing to scale up
                servers.
              </p>
              <p
                className="text-xl poppins font-light text-rgb"
                style={{ width: "95%" }}
              >
                The cost? The first million requests in a month are exceeded
                Moonfare is only charged $0.20 for every million requests.
              </p>
            </div>
            <Greenbtn buttonText="Read Full Case Study" />
          </d>
          <div className="" style={{}}>
            <Image
              style={{ objectFit: "contain" }}
              src="/Assets/SIngleService/HealthTech/Image.svg"
              width={564}
              height={541}
            />
          </div>
        </div>
      </div>
      <div className="bg-primaryBlack text-gray-50 pt-20 pb-20 flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-col jusify-center items-center gap-3">
          <p className="text-center inter text-xl text-white font-normal">
            Madeup your mind?
          </p>
          <p
            className="custom-text-64 text-white font-extrabold  "
            style={{ fontSize: "64px" }}
          >
            Let's craft your idea 🚀
          </p>
        </div>
        <Greenbtn buttonText="Let's collaborate" />
      </div>
    </>
  );
}
