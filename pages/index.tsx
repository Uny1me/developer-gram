import type { NextPage } from "next";
import Link from "next/link";
import styles from "styles/Home.module.css";
import Image from "next/image";
import MockUp from "public/images/mockup.webp";
import { bounceInUp, fadeInLeft } from "react-animations";
import styled, { keyframes } from "styled-components";

const Home: NextPage = () => {
  const bounceAnimation = keyframes`${bounceInUp}`;
  const fadeAnimation = keyframes`${fadeInLeft}`;

  const BouncyDiv = styled.div`
    animation: 1.25s ${bounceAnimation};
  `;
  const FadeDivOne = styled.div`
    animation: 1s ${fadeAnimation};
  `;
  const FadeDivPointTwoFive = styled.div`
    animation: 1.5s ${fadeAnimation};
  `;
  const FadeDivPointFive = styled.div`
    animation: 1.7s ${fadeAnimation};
  `;
  const FadeDivTwo = styled.div`
    animation: 2s ${fadeAnimation};
  `;

  return (
    <main
      className={`${styles.main} flex flex-col lg:items-center items-start lg:flex-row lg:text-left`}
    >
      <h1 className="text-8xl text-white tracking-normal py-3 hidden lg:block">
        <FadeDivOne>
          <h2 className="text-lg lg:text-2xl text-white">Developer Gram</h2>
        </FadeDivOne>
        <FadeDivPointTwoFive>
          Generate
          <br /> visual posts <br />
        </FadeDivPointTwoFive>{" "}
        <FadeDivPointFive>
          for your Instagram as <br /> a Developer
        </FadeDivPointFive>
        <FadeDivTwo>
          <Link href="/workshop" passHref>
            <button className="p-3 px-5  bg-white rounded-md uppercase tracking-wider text-xl text-pink-900">
              Get Started
            </button>
          </Link>
        </FadeDivTwo>
      </h1>

      <h1 className=" text-2xl text-white tracking-normal py-3 block lg:hidden">
        Generate visual posts for your Instagram as a Developer
      </h1>

      <FadeDivOne>
        <Image src={MockUp} width={"390"} height={"740"} alt="none" />
      </FadeDivOne>
    </main>
  );
};

export default Home;
