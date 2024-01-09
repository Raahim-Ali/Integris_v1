"use client";
import "./Navbar.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Greenbtn from "../Greenbtn";
import Link from "next/link";
function Navbar() {
  const router = useRouter();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };
  // const backgroundImageUrl = "/Assets/Herosection/heroBg.svg";

  return (
    <>
      <div
        className="navbar"
        // style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div
          className="logo"
          onClick={() => {
            router.push("/Home");
          }}
        >
          <img className="logoImg" src="/Assets/Navbar/logo.svg" alt="logo" />
          <p className="logoText">OCTALCODE</p>
        </div>
        <div className="navbar-items">
          <p
            className="navbarIcon"
            onClick={() => {
              router.push("/");
            }}
          >
            HOME
          </p>

          <p className="navbarIcon">
            <Link href="/#Services">SERVICES</Link>
          </p>
          <p className="navbarIcon">
            <Link href="/#Work">PORTFOLIO</Link>
          </p>
          <p className="navbarIcon">
            <Link href="/#Industries">INDUSTRIES</Link>
          </p>
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
