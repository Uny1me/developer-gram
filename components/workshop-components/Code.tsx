import React, { useState } from "react";
import Slider from "./Slider";

import one from "public/images/cover/00.jpg";
import two from "public/images/cover/01.jpg";
import three from "public/images/cover/02.jpg";
import four from "public/images/cover/03.jpg";

import * as htmlToImage from "html-to-image";
import { Pencil, PurpleArrow } from "components/Icons";
import download from "downloadjs";

import { TwitterPicker } from "react-color";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

type Props = {};

type coverData = {
  header?: string;
  highlight?: string;
  imageDirection?: string;
  illustrationDirection?: string;
  headerDirection?: string;
  username?: string;
};

export default function Cpde({}: Props) {
  const [coverData, setCoverData] = useState<coverData>({
    header: "",
    highlight: "",
    imageDirection: "",
    illustrationDirection: "right",
    headerDirection: "left",
    username: "",
  });
  const [preview, setPreview] = useState<string>();
  const [headerPicker, setHeaderPicker] = useState<boolean>(false);
  const [picker, setPicker] = useState<boolean>(false);
  const [headerColor, setHeaderColor] = useState<string>("#fff");
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
      <Slider one={one} two={two} three={three} four={four} />

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
                Cover Header
              </label>
              <div className="flex items-center">
                <input
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-slate-900 bg-white bg-clip-padding border-solid border-slate-300 rounded transition ease-in-out m-0 focus:text-slate-900 focus:bg-white focus:outline-none"
                  value={coverData.header}
                  onChange={(e) =>
                    setCoverData({ ...coverData, header: e.target.value })
                  }
                />
                <div className="relative cursor-pointer">
                  <Pencil onClick={() => setHeaderPicker(!headerPicker)} />
                  {headerPicker && (
                    <div className="absolute md:-right-50 right-0 z-50 ">
                      <TwitterPicker
                        color={headerColor}
                        onChange={(color) => {
                          setHeaderColor(color.hex as string);
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
                Cover Header Highlight
                <span className="text-red-500 ml-2">(Optional)</span>
              </label>
              <div className="flex items-center">
                <input
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-slate-900 bg-white bg-clip-padding border-solid border-slate-300 rounded transition ease-in-out m-0 focus:text-slate-900 focus:bg-white focus:outline-none"
                  value={coverData.highlight}
                  onChange={(e) =>
                    setCoverData({ ...coverData, highlight: e.target.value })
                  }
                />
                <div className="relative cursor-pointer">
                  <Pencil onClick={() => setPicker(!picker)} />
                  {picker && (
                    <div className="absolute md:-right-50 right-0 ">
                      <TwitterPicker
                        color={highlightColor}
                        onChange={(color) => {
                          setHighlightColor(color.hex as string);
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label inline-block mb-1 text-slate-100"
              >
                Cover Heading Direction
              </label>
              <select
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="Cover Heading Direction"
                defaultValue={"left"}
                onChange={(e) =>
                  setCoverData({
                    ...coverData,
                    headerDirection: e.target.value,
                  })
                }
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label inline-block mb-1 text-slate-100"
              >
                Cover Illustration
              </label>

              <input
                type="file"
                accept="image/*"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-slate-900 bg-white bg-clip-padding border-solid border-slate-300 rounded transition ease-in-out m-0 focus:text-slate-900 focus:bg-white  focus:outline-none"
                id="file_input"
                onChange={(event) => {
                  // The exclamation before the array says that it cannot possibly be null
                  // This addresses the error: event.target.files' is possibly 'null'
                  const file = event.target.files![0];
                  if (file && file.type.substring(0, 5) === "image") {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setPreview(reader.result as string);
                      //Argument of type 'string | ArrayBuffer | null' is not assignable to parameter of type 'SetStateAction<string | undefined>'.
                      // Type 'null' is not assignable to type 'SetStateAction<string | undefined>'.
                      // Solution add as string
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label inline-block mb-1 text-slate-100"
              >
                Illustration Direction
              </label>
              <select
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="illustrationDirection"
                defaultValue={"right"}
                onChange={(e) =>
                  setCoverData({
                    ...coverData,
                    illustrationDirection: e.target.value,
                  })
                }
              >
                <option value="start">Left</option>
                <option value="center">Center</option>
                <option value="end">Right</option>
              </select>
            </div>
            <div className="mb-3">
              <label
                htmlFor="cover-header"
                className="form-label inline-block mb-1 text-slate-100"
              >
                Username
                <span className="text-red-500 ml-2">
                  (Instagram or others)
                </span>{" "}
              </label>

              <input
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-slate-900 bg-white bg-clip-padding border-solid border-slate-300 rounded transition ease-in-out m-0 focus:text-slate-900 focus:bg-white focus:outline-none"
                value={coverData.username}
                onChange={(e) =>
                  setCoverData({ ...coverData, username: e.target.value })
                }
              />
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
              <PurpleArrow width={24} height={24} />
            </div>
            <SkeletonTheme baseColor="#eff" highlightColor="#ffe">
              <section className="px-6 py-6 relative">
                {coverData.header ? (
                  <p
                    className={`text-4xl mb-2 text-${coverData.headerDirection}`}
                    style={{
                      color: `${headerColor}`,
                    }}
                  >
                    {coverData.header}{" "}
                  </p>
                ) : (
                  <Skeleton
                    height={30}
                    width={"80%"}
                    className={`float-${coverData.headerDirection}`}
                  />
                )}
                {coverData.highlight && (
                  <p
                    className={`text-4xl mb-2 text-${coverData.headerDirection}`}
                    style={{ color: `${highlightColor}` }}
                  >
                    {coverData.highlight}
                  </p>
                )}{" "}
                {preview ? (
                  <div
                    className={`flex items-center justify-${coverData.illustrationDirection} mt-24`}
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  >
                    {/*eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={preview}
                      alt=""
                      className=""
                      style={{
                        width: "70%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ) : (
                  <Skeleton height={180} width={"100%"} />
                )}
                {coverData.username && (
                  <p
                    className={`text-md font-albert my-4
                    ${coverData.illustrationDirection === "end" && "text-right"}
                    text-${coverData.illustrationDirection}`}
                  >
                    {coverData.username}
                  </p>
                )}{" "}
              </section>
            </SkeletonTheme>
          </div>
        </div>
      </div>
      {/* Actual Export */}

      <div className="absolute top-0 -right-0" style={{ zIndex: "-999" }}>
        <div
          className="max-w-100 rounded overflow-hidden shadow-lg w-96 py-6 bg-white pattern-constellation mb-6"
          id="post-cover"
          style={{
            minWidth: "1080px",
            maxWidth: "1080px",
            minHeight: "1080px",
            maxHeight: "1080px",
          }}
        >
          <div className="inline-flex justify-end w-full px-12 ">
            <PurpleArrow width={96} height={96} />
          </div>
          <SkeletonTheme baseColor="#eff" highlightColor="#ffe">
            <section className="px-6 py-6 relative">
              {coverData.header ? (
                <p
                  className={`text-8xl mb-2 ml-4 text-${coverData.headerDirection}`}
                  style={{
                    color: `${headerColor}`,
                  }}
                >
                  {coverData.header}{" "}
                </p>
              ) : (
                <Skeleton
                  height={30}
                  width={"80%"}
                  className={`float-${coverData.headerDirection}`}
                />
              )}
              {coverData.highlight && (
                <p
                  className={`text-8xl mb-2 ml-4 text-${coverData.headerDirection}`}
                  style={{ color: `${highlightColor}` }}
                >
                  {coverData.highlight}
                </p>
              )}{" "}
              {preview ? (
                <div
                  className={`flex items-center justify-${coverData.illustrationDirection} mt-24`}
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  {/*eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={preview}
                    alt=""
                    className="ml-4 mr-4"
                    style={{
                      width: "60%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ) : (
                <Skeleton height={180} width={"100%"} />
              )}
              {coverData.username && (
                <p
                  className={`text-md font-albert my-12  ml-6
                    ${coverData.illustrationDirection === "end" && "text-right"}
                    text-${coverData.illustrationDirection}`}
                >
                  {coverData.username}
                </p>
              )}{" "}
            </section>
          </SkeletonTheme>
        </div>
      </div>
      {/* Actual Export */}
    </div>
  );
}
