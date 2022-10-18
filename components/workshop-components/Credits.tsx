import React, { useState } from "react";
import Slider from "./Slider";

import one from "public/images/credits/01.jpg";
import credits from "public/images/credits/05.png";

import * as htmlToImage from "html-to-image";
import { Notification, Pencil } from "components/Icons";
import download from "downloadjs";

import { TwitterPicker } from "react-color";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Image from "next/image";

type Props = {};

type creditData = {
  tagLine?: string;
  action?: string;
  username?: string;
  subTagLine?: string;
  tagLineDirection?: string;
};

export default function Credits({}: Props) {
  const [creditData, setCreditData] = useState<creditData>({
    tagLine: "",
    action: "",
    username: "",
    subTagLine: "",
  });
  const [preview, setPreview] = useState<string>();
  const [headerPicker, setHeaderPicker] = useState<boolean>(false);

  const [tagLineColor, setTagLineColor] = useState<string>("#fff");
  const [highlightColor, setHighlightColor] = useState<string>("#fff");

  const exportImage = () => {
    var node = document.getElementById("post-cover");
    htmlToImage
      .toPng(node as HTMLElement)
      .then(function (dataUrl) {
        // Download Image
        download(dataUrl, "post-cover.png");
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };
  return (
    <div>
      <div className="flex justify-center">
        <Image src={one} alt="" width={400} height={500} />
      </div>

      {/* Tool Section */}
      <div className="py-6  w-11/12 mx-auto relative">
        <h2 className="text-6xl text-white">Start Building</h2>
        <div className="flex flex-col md:flex-row items-start pt-2 justify-between md:space-x-12">
          <div className="font-albert grow-1 md:w-6/12 w-full mb-5">
            <div className="mb-3">
              <label
                htmlFor="cover-header"
                className="form-label inline-block mb-1 text-slate-100"
              >
                Credit Tag Line
              </label>
              <div className="flex items-center">
                <input
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-slate-900 bg-white bg-clip-padding border-solid border-slate-300 rounded transition ease-in-out m-0 focus:text-slate-900 focus:bg-white focus:outline-none"
                  value={creditData.tagLine}
                  onChange={(e) =>
                    setCreditData({ ...creditData, tagLine: e.target.value })
                  }
                />
                <div className="relative cursor-pointer">
                  <Pencil onClick={() => setHeaderPicker(!headerPicker)} />
                  {headerPicker && (
                    <div className="absolute md:-right-50 right-0 z-50 ">
                      <TwitterPicker
                        color={tagLineColor}
                        onChange={(color) => {
                          setTagLineColor(color.hex as string);
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="cover-header"
                className="form-label inline-block mb-1 text-slate-100"
              >
                Username
                <span className="text-red-500 ml-2">(Optional)</span>
              </label>
              <div className="flex items-center">
                <input
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-slate-900 bg-white bg-clip-padding border-solid border-slate-300 rounded transition ease-in-out m-0 focus:text-slate-900 focus:bg-white focus:outline-none"
                  value={creditData.username}
                  onChange={(e) =>
                    setCreditData({ ...creditData, username: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="cover-header"
                className="form-label inline-block mb-1 text-slate-100"
              >
                Action
                <span className="text-red-500 ml-2">(Optional)</span>
              </label>
              <div className="flex items-center">
                <input
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-slate-900 bg-white bg-clip-padding border-solid border-slate-300 rounded transition ease-in-out m-0 focus:text-slate-900 focus:bg-white focus:outline-none"
                  value={creditData.action}
                  onChange={(e) =>
                    setCreditData({ ...creditData, action: e.target.value })
                  }
                />
              </div>
            </div>

            <button
              className="px-5 p-3 bg-white rounded-md uppercase tracking-normal text-xl text-pink-900 font-bebas relative  lg:mt-0"
              type="submit"
              onClick={exportImage}
            >
              EXPORT
            </button>
          </div>
          {/* Aperçu -- Preview*/}
          <div
            className="max-w-100 rounded overflow-hidden shadow-lg relative pt-2 bg-white pattern-constellation"
            style={{
              width: "100%",
              maxWidth: "360px",
              minHeight: "525px",
            }}
          >
            <div className="inline-flex justify-end w-full px-6">
              <Notification width={24} height={24} />
            </div>
            <SkeletonTheme baseColor="#eff" highlightColor="#ffe">
              <section className="px-6 py-6 relative">
                {creditData.tagLine ? (
                  <p
                    className={`text-4xl mb-2 text-center`}
                    style={{
                      color: `${tagLineColor}`,
                    }}
                  >
                    {creditData.tagLine}{" "}
                  </p>
                ) : (
                  <Skeleton
                    height={30}
                    width={"80%"}
                    className={`float-${creditData.tagLine}`}
                  />
                )}
                <div className="mx-auto text-center">
                  <Image src={credits} alt="" />
                </div>
                {creditData.username && (
                  <p className={`text-md mb-2 text-center font-albert mx-auto`}>
                    {creditData.username}{" "}
                  </p>
                )}
                {creditData.action && (
                  <p className={`text-2xl mb-2 text-center`}>
                    {creditData.action}{" "}
                  </p>
                )}
              </section>
              <small className="absolute bottom-0 text-white text-center font-albert text-xs w-full p-1">
                Made with DeveloperGram
              </small>
            </SkeletonTheme>
          </div>
        </div>
      </div>
      {/* Actual Export */}

      <div className="absolute top-0 -right-0" style={{ zIndex: "-999" }}>
        <div
          className="max-w-100 rounded overflow-hidden shadow-lg w-96 py-6 bg-white pattern-constellation mb-6 pt-24"
          id="post-cover"
          style={{
            minWidth: "1080px",
            maxWidth: "1080px",
            minHeight: "1080px",
            maxHeight: "1080px",
          }}
        >
          <div className="inline-flex justify-end w-full px-6">
            <Notification width={48} height={48} />
          </div>
          <SkeletonTheme baseColor="#eff" highlightColor="#ffe">
            <section className="px-6 py-6 relative">
              {creditData.tagLine ? (
                <p
                  className={`text-8xl mb-2 ml-4 text-center`}
                  style={{
                    color: `${tagLineColor}`,
                  }}
                >
                  {creditData.tagLine}{" "}
                </p>
              ) : (
                <Skeleton height={30} width={"80%"} />
              )}
              <div className="mx-auto text-center">
                <Image src={credits} alt="" />
              </div>
              {creditData.username && (
                <p className={`text-2xl mb-2 text-center font-albert`}>
                  {creditData.username}{" "}
                </p>
              )}

              {creditData.action && (
                <p className={`text-6xl mb-2 text-center`}>
                  {creditData.action}{" "}
                </p>
              )}
              <div className="absolute text-center -bottom-64  font-albert text-base w-full mt-0">
                Made with DeveloperGram
              </div>
            </section>
          </SkeletonTheme>
        </div>
      </div>
      {/* Actual Export */}
    </div>
  );
}
