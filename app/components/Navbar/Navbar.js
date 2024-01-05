"use client";
import "./Navbar.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Greenbtn from "../Greenbtn";
import Image from "next/image";
function Navbar() {
  const router = useRouter();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <div className="navbar">
        <div
          className="logo"
          onClick={() => {
            router.push("/Home");
          }}
        >
          <Image
            src="/Assets/Navbar/logo.svg"
            width={50}
            height={50}
            alt="logo"
          />
          <p>OCTALCODE</p>
        </div>
        <div className="navbar-items">
          <div
            className="navbarIcon"
            onClick={() => {
              router.push("/");
            }}
          >
            HOME
          </div>
          <div
            className="navbarIcon"
            onClick={() => {
              router.push("/work");
            }}
          >
            WHY US
          </div>
          <div className="navbarIcon">CASE STUDIES</div>
          <div className="navbarIcon">FAQs</div>
          <Greenbtn buttonText="Contact us" href="/Contact" />
        </div>
        <button className="sidebarBtn" onClick={toggleDropdown}>
          ☰
        </button>
      </div>
      {isDropdownOpen ? (
        <div className="dropdownMenu">
          <div
            className="navbarIcon"
            onClick={() => {
              router.push("/");
              toggleDropdown();
            }}
          >
            HOME
          </div>
          <div
            className="navbarIcon"
            onClick={() => {
              router.push("/work");
              toggleDropdown();
            }}
          >
            WHY US
          </div>
          <div className="navbarIcon">CASE STUDIES</div>
          <div className="navbarIcon">FAQs</div>
          <Greenbtn
            buttonText="Contact us"
            href="/Contact"
            onClick={toggleDropdown}
          />
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
