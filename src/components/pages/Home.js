import React from "react";
import banner from "./banner.gif";

console.log(banner);

export default function Home() {
  return (
    <img
      src={banner}
      alt="banner"
      resizeMode="stretch"
      className="banner-custom"
    />
  );
}
