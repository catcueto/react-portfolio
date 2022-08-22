import React from "react";
import banner from "../imgs/banner.gif";

console.log(banner);

export default function Home() {
  return (
    <div className="flex height-fix">
      <img
        src={banner}
        alt="banner"
        resizemode="stretch"
        className="banner-custom"
      />
    </div>
  );
}
