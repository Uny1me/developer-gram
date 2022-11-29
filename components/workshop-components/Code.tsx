import { useState } from "react";
import Link from "next/link";

import Slider from "./Slider";
// React Skeleton
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import download from "downloadjs";

// Export Node to Image Lib
import * as htmlToImage from "html-to-image";
import { PurpleArrow, Pencil } from "components/Icons";

import { TwitterPicker } from "react-color";

// PlaceHolder Images
import one from "public/images/code/01.jpg";
import two from "public/images/code/02.jpg";
import three from "public/images/code/03.jpg";

type Props = {
  selectedOption?: string;
  workshop: any;
};
type slidesData = {
  explanation?: string;

  title?: string;
};

const Code = (props: Props) => {
  const [slideData, setSlideData] = useState<slidesData>({
    explanation: "",
    title: "",
  });
  const [preview, setPreview] = useState<string>();
  const [picker, setPicker] = useState<boolean>(false);
  const [headerColor, setHeaderColor] = useState<string>("#fff");

  const exportImage = () => {
    var node = document.getElementById("info-text");
    htmlToImage
      .toPng(node as HTMLElement)
      .then(function (dataUrl) {
        // Download Image
        download(dataUrl, "text-image.png");
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <div className="mb-6 w-full">
      {/* Explanation Section */}

      <Slider one={one} two={two} three={three} />

      {/* Explanation Section */}

      {/* Tool Section */}
      <div className="py-6  w-11/12 mx-auto relative">
        <h2 className="text-6xl text-white">Start Building</h2>
        <div className="flex flex-col md:flex-row items-start pt-2 justify-between md:space-x-12 ">
          <div className="font-albert grow-1 md:w-6/12 w-full mb-5">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label inline-block mb-1 text-slate-100"
              >
                Code Heading
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Enter Code Heading"
                  onChange={(e) =>
                    setSlideData({ ...slideData, title: e.target.value })
                  }
                />
                <div className="relative cursor-pointer">
                  <Pencil onClick={() => setPicker(!picker)} />
                  {picker && (
                    <div className="absolute md:-right-50 right-0 ">
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
                htmlFor="exampleFormControlTextarea1"
                className="form-label inline-block mb-1 text-slate-100"
              >
                Code Explanation
              </label>
              <textarea
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-slate-900 bg-white bg-clip-padding border-solid border-slate-300 rounded transition ease-in-out m-0 focus:text-slate-900 focus:bg-white focus:outline-none "
                rows={7}
                maxLength={280}
                value={slideData.explanation}
                name="slide-description"
                onChange={(e) => {
                  setSlideData({ ...slideData, explanation: e.target.value });
                }}
                placeholder="Enter Code Explanation"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label inline-block mb-1 text-slate-100"
              >
                Slide Image
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

            <button
              className="px-5 p-3 bg-white rounded-md uppercase tracking-normal text-xl text-pink-900 font-bebas relative  lg:mt-0"
              type="submit"
              onClick={exportImage}
            >
              EXPORT
            </button>
          </div>
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
              <section className="px-6 py-6">
                {slideData.title ? (
                  <p
                    className=" text-xl mb-2"
                    style={{
                      color: headerColor,
                    }}
                  >
                    {slideData.title}
                  </p>
                ) : (
                  <Skeleton height={20} width={"80%"} />
                )}

                {slideData.explanation ? (
                  <p className="font-albert text-md py-2 leading-relaxed">
                    {slideData.explanation}
                  </p>
                ) : (
                  <Skeleton height={80} width={"100%"} />
                )}

                {preview ? (
                  <div
                    className="pt-6"
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
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ) : (
                  <Skeleton height={180} width={"100%"} />
                )}
              </section>
            </SkeletonTheme>
          </div>
        </div>
      </div>

      {/* Actual Export */}

      <div
        className="absolute top-0 -right-0"
        style={{
          zIndex: "-999",
        }}
      >
        <div
          className="max-w-100 rounded overflow-hidden shadow-lg w-96 pt-2 bg-white pattern-constellation"
          id="info-text"
          style={{
            minWidth: "1080px",
            maxWidth: "1080px",
            minHeight: "1080px",
            maxHeight: "1080px",
          }}
        >
          <div className="inline-flex justify-end w-full px-6">
            <PurpleArrow width={96} height={96} />
          </div>
          <SkeletonTheme baseColor="#eff" highlightColor="#ffe">
            <section className="px-6 py-4">
              {slideData.title ? (
                <p
                  className="text-5xl my-8"
                  style={{
                    color: headerColor,
                  }}
                >
                  {slideData.title}
                </p>
              ) : (
                <Skeleton height={20} width={"80%"} />
              )}

              {slideData.explanation ? (
                <p className="font-albert text-3xl pb-8 leading-loose">
                  {slideData.explanation}
                </p>
              ) : (
                <Skeleton height={80} width={"100%"} />
              )}

              {preview ? (
                <div
                  // className="relative bottom-0"
                  style={{
                    width: "100%",

                    height: "500px",
                    overflow: "hidden",
                  }}
                >
                  {/*eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={preview}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              ) : (
                <Skeleton height={180} width={"100%"} />
              )}
            </section>
          </SkeletonTheme>
        </div>
      </div>
      {/* Actual Export */}
      <a
        href="https://icons8.com/icon/JBsFFuVDTkKw/right-arrow"
        className="hidden"
      >
        Right Arrow icon by Icons8
      </a>
    </div>
  );
};

export default Code;
