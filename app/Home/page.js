"use client";
import HeroSection from "./HeroSection";
import Blog from "./Blog";
import Idea from "./Idea";
import Products from "./Products";
import Process from "./Process";
import About from "./About";
import { client } from "../Library/contentful";
import { useEffect, useState } from "react";

function HomePage() {
  const [fetchedBlogs, setFetchedBlogs] = useState([]);

  useEffect(() => {
    client.getEntries({ content_type: "blog" }).then((res) => {
      console.log("res", res);
      setFetchedBlogs(res.items);
    });
  }, []);

  return (
    <>
      <HeroSection
        title="Driven by a Passion for Innovation and Improvement"
        paragraph="In the international market, Integris International FZE is a specialist in the import
and export of petrochemical products across a variety of countries."
        imgSrc="/Assets/Herosection/bg.svg"
      />
      <About />
      <Products />
      <Process />
      <Idea />
      <Blog blogs={fetchedBlogs} />
    </>
  );
}

export default HomePage;
