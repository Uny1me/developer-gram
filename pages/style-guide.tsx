import type { NextPage } from "next";

import styles from "styles/Home.module.css";
import Image from "next/image";
import MockUp from "public/images/mockup-style.webp";
import { customSelectStyle, StyleGuideOptions } from "lib/lib";
import { useState } from "react";
import Select from "react-select";

type workOption = {
  value?: string;
  label?: string;
};
const StyleGuide: NextPage = () => {
  type workOption = {
    value?: string;
    label?: string;
    description?: string;
  };

  const [guide, setGuide] = useState<workOption>();

  return (
    <main
      className={`${styles.main} flex flex-col lg:items-center items-start lg:flex-row lg:text-left`}
    >
      <div>
        <span className="icon-line"></span>
        <h1 className="text-8xl text-white tracking-normal py-3 hidden lg:block">
          Guide
          <br /> For using <br /> Our Workshop <br /> Better
        </h1>
        <h1 className=" text-2xl text-white tracking-normal py-3 block lg:hidden">
          Generate visual posts for your Instagram as a Developer
        </h1>
        <Select
          options={StyleGuideOptions}
          className="font-albert z-50 w-full  text-center"
          styles={customSelectStyle}
          onChange={(guide) => {
            // Specifying the file type here as object prevents any errors
            setGuide(guide as object);
          }}
        />
      </div>
      <Image src={MockUp} width={"390"} height={"740"} alt="none" />
      {/* https://codetoimg.com/ */}
    </main>
  );
};

export default StyleGuide;
