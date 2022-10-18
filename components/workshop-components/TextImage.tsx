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
import one from "public/images/info-image/01.jpg";
import two from "public/images/info-image/02.jpg";
import three from "public/images/info-image/03.jpg";
type Props = {
  selectedOption?: string;
  workshop: any;
};
type slidesData = {
  count?: number;
  description?: string;
  link?: string;
  title?: string;
};

const TextImage = (props: Props) => {
  const [slideData, setSlideData] = useState<slidesData>({
    count: undefined,
    description: "",
    link: "",
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
                Slide Number{" "}
                <span className="text-red-500 ml-1">(Optional)</span>
              </label>
              <select
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                defaultValue={"0"}
                onChange={(e) =>
                  setSlideData({
                    ...slideData,
                    count: parseInt(e.target.value),
                  })
                }
              >
                <option disabled value={"0"}>
                  Choose a number
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label inline-block mb-1 text-slate-100"
              >
                Slide Header
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Enter Slide Header"
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
                Slide Description
              </label>
              <textarea
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-slate-900 bg-white bg-clip-padding border-solid border-slate-300 rounded transition ease-in-out m-0 focus:text-slate-900 focus:bg-white focus:outline-none "
                rows={7}
                maxLength={280}
                value={slideData.description}
                name="slide-description"
                onChange={(e) => {
                  setSlideData({ ...slideData, description: e.target.value });
                }}
                placeholder="Enter Slide Description"
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

            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label inline-block mb-1 text-slate-100"
              >
                Slide Link
                <span className="text-red-500 ml-2">(Optional)</span>
              </label>
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                placeholder="Enter Slide Link"
                onChange={(e) => {
                  setSlideData({ ...slideData, link: e.target.value });
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
                {slideData.count && (
                  <p className=" text-xl mb-2">0{slideData.count}</p>
                )}
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

                {slideData.description ? (
                  <p className="font-albert text-md py-2">
                    {slideData.description}
                  </p>
                ) : (
                  <Skeleton height={80} width={"100%"} />
                )}

                {preview ? (
                  <div
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

                <Link href={`${slideData?.link}`} passHref>
                  {slideData.link && (
                    <p className="text-white text-base  text-center py-2 underline font-100">
                      {slideData.link}
                    </p>
                  )}
                </Link>
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
          className="max-w-100 rounded overflow-hidden shadow-lg w-96  pt-2 bg-white pattern-constellation"
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
              {slideData.count ? (
                <p className=" text-4xl mb-2">0{slideData.count}</p>
              ) : (
                <Skeleton height={20} width={"20px"} />
              )}
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

              {slideData.description ? (
                <p className="font-albert text-3xl pb-8 leading-tight">
                  {slideData.description}
                </p>
              ) : (
                <Skeleton height={80} width={"100%"} />
              )}

              {preview ? (
                <div
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
                      objectFit: "cover",
                    }}
                  />
                </div>
              ) : (
                <Skeleton height={180} width={"100%"} />
              )}

              <Link href={`${slideData.link}`} passHref>
                {slideData.link ? (
                  <p className="text-white underline text-center mb-6 text-3xl pt-2">
                    {slideData.link}
                  </p>
                ) : (
                  <div className="mx-auto text-center">
                    <Skeleton height={10} width={"50%"} />
                  </div>
                )}
              </Link>
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

export default TextImage;
