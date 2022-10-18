import WorkShopBody from "components/WorkShopBody";
import { customSelectStyle, WorkShopOptions } from "lib/lib";
import { useState } from "react";
import Select from "react-select";

export default function Workshop() {
  type workOption = {
    value?: string;
    label?: string;
  };

  const [workShop, setWorkShop] = useState<workOption>();

  return (
    <div className=" text-white pt-5">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl uppercase text-center">workshop</h1>
        <p className="font-albert text-center">
          What would you like to create?
        </p>

        <Select
          options={WorkShopOptions}
          className="font-albert z-50 w-full lg:w-2/6 mx-auto text-center"
          styles={customSelectStyle}
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
