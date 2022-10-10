import WorkShopBody from "components/WorkShopBody";
import { useState } from "react";
import Select from "react-select";

export default function Workshop() {
  type workOption = {
    value?: string;
    label?: string;
  };

  const [workShop, setWorkShop] = useState<workOption>();
  const options = [
    {
      value: "Cover",
      label: "Post Cover",
      description:
        "A flattery cover for the beginning of your informative Carousel",
    },
    {
      value: "TextImage",
      label: "Information with Pictures",
      description:
        "Create a unique set of cards with segmented information and add images to each one",
    },
    { value: "Info", label: "Information" },
    { value: "Closing", label: "Closing" },
  ];

  const customStyles = {
    option: () => ({
      padding: 10,
      fontSize: 20,
      background: "#fff",
      cursor: "pointer",
      color: "#424242",
    }),
    control: () => ({
      background: "#fff",
      display: "flex",
      margin: 10,
      // none of react-select's styles are passed to <Control />
      color: "#424242",
      cursor: "pointer",
      padding: 5,
    }),
  };
  return (
    <div className=" text-white pt-6">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl uppercase text-center">workshop</h1>
        <p className="font-albert text-center">
          What would you like to create?
        </p>

        <Select
          options={options}
          className="font-albert z-50 w-full lg:w-2/6 mx-auto text-center"
          styles={customStyles}
          onChange={(workoption) => {
            // Specifying the file type here as object prevents any errors
            setWorkShop(workoption as object);
          }}
        />
      </div>
      {workShop && (
        <div className="mt-6">
          <WorkShopBody workshop={workShop} />
        </div>
      )}
    </div>
  );
}
