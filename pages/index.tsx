import type { NextPage } from "next";
import Link from "next/link";
import styles from "styles/Home.module.css";
import Image from "next/image";
import MockUp from "public/images/mockup.webp";
import { bounceInUp } from "react-animations";
import styled, { keyframes } from "styled-components";

const Home: NextPage = () => {
  const bounceAnimation = keyframes`${bounceInUp}`;

  const BouncyDiv = styled.div`
    animation: 2s ${bounceAnimation};
  `;

  return (
    <main
      className={`${styles.main} flex flex-col lg:items-center items-start lg:flex-row lg:text-left`}
    >
      <div>
        <h2 className="text-lg lg:text-2xl text-white">Developer Gram</h2>
        <h1 className="text-8xl text-white tracking-normal py-3 hidden lg:block">
          Generate
          <br /> visual posts <br /> for your Instagram as <br /> a Developer
        </h1>
        <h1 className=" text-2xl text-white tracking-normal py-3 block lg:hidden">
          Generate visual posts for your Instagram as a Developer
        </h1>
        <Link href="/workshop">
          <button className="p-3 px-5  bg-white rounded-md uppercase tracking-wider text-xl text-pink-900">
            Get Started
          </button>
        </Link>
      </div>
      <BouncyDiv>
        <Image src={MockUp} width={"390"} height={"740"} alt="none" />
      </BouncyDiv>
    </main>
  );
};

export default Home;
