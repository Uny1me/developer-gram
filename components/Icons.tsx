import React from "react";
import Image from "next/image";

type Props = {
  width?: number;
  height?: number;
  onClick?: (params: any) => any;
};

const PurpleArrow = (props: Props) => {
  return (
    <Image
      alt=""
      width={props.width}
      height={props.height}
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAEE0lEQVR4nO2cT4gbVRzHP29mMuvWFSJ6UC+eBKVVg0XxIrR0l4KCVq0eKhW8Ws9CK3hQcI978ib0IF5qdVEQ7FbcPWolTf0TWvAu9FA8uJu0ycw8D8tInM2kk2Qmefve77PsIZnfvPfj+8m+5E2YBUEQBEEQBEEQBEEQBEEQBEEQBEEQBMFW1LwbmBUXjrSXvHtZRXMS0Ci+SnY4++bWwe159uWEgPUTrXrSCzc0PJs5dM1b8JZfW3/i1lwawwEBafio3fC13lMyVwlWC8iGn2KSBGsF5IWfYooEKwV88/KN+6I43gKeGVWXlaCgeVvFK29999TfFbb3P7xZTTRL4iRZVWp0+AAq8/LTcPge7V/+4qXf7q+qtyxWCgB9EvYGPIxhEha0/+PXr15/oIrOslgqgP8Wl0kkAI3kTvLDLCRYKUDDxcHHk0rQd5JLVS9HVgoIPP8ccHXwuUmXo6rfE6wU8Mq3j/+jgt4x4JfB5018T7DyY2jK+olWXUfhBtx1I7aHWe0TrBYA5kuwXgCYLcEJAWCuBGcEgJkSnBIA5klwTgCYJcFJAWCOhFwBF95oh2pHf6xQp4GHxx145KQGaR/Wyywl5O6E/W31kUK9j8Xhw/CwJ7121O9ENz578eqj48yfK0Ar/fY4AxXBtPBTypLg+96DS5F//fzKT48VnXvUtSCrX/lZypIQBMHiolr8taiEmVyMMz38lHlIqFzAfgk/ZdYSKhWw38KH/J4nlXBALV47f6T9UN45lQmwKfyix4fV+EFwoOb1vs+rr0SAjeGPU5etqYXBobza0gXYHP449YM1ivydXakCXAh/nPPSml4v+iOvpjQBLoU/zvlxHHW8ndrxvOOlCHAx/CLj9OOo20m6jVM/P3kzryb/UoTmr2kbMJWyex42XhRH3W7cffqdy8//OercXAEe6vNJJjadqnoeHDeK+91OgfABgrwD8ZL+0N9WJOjTSvHIqAn3C1X3rBT0o363E98uFD44/IVMylpjs+4rNkAPvY9gLJRueYFeee/KcuHvBJwWMO/wwWEBJoQPjgowJXxwUIBJ4QP4Uzexj1hrbNZ9Sgof3fJq04UPDv0FlB5+OH344IgAU8MHBwSYHD5YLuDTg5tLcU1vAYdLGK4ZxLWVd39/odR7iK28RSklDlnF4PDBcgEku/cLT4dueWFyvIrwwXYBU1P+mp/FagEa/aVm4p9mEIfHqgwfLBcQRN45oDnBqc1aHFay5mexWsCZ9tHtBG8ZzRU0FPxt+aGubM3PYvXH0JS1xmbd08kl4Lm7lLb8hWrX/CxOCIBCEmYePjgkAEZKmEv44JgA2N0dR0HyCfA6gEZfrEX+B2faR+f67ysFQRAEQRAEQRAEQRAEQRAEQRAEQRAE+/gXDfwI2bN1MaoAAAAASUVORK5CYII="
    />
  );
};

const Pencil = (props: Props) => {
  return (
    <div onClick={props.onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6 ml-3"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    </div>
  );
};

export { PurpleArrow, Pencil };
