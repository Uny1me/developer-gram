import React from "react";
import Slider from "./Slider";

import one from "public/images/cover/00.jpg";
import two from "public/images/cover/01.jpg";
import three from "public/images/cover/02.jpg";

type Props = {};

export default function Cover({}: Props) {
  return (
    <div>
      <Slider one={one} two={two} three={three} />

      {/* Tool Section */}
      <div className="py-6  w-11/12 mx-auto relative">
        <h2 className="text-6xl text-white">Start Building</h2>
        <div className="flex flex-col md:flex-row items-start pt-2 justify-between md:space-x-12">
          <form action=""></form>
        </div>
      </div>
    </div>
  );
}
