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

const Notification = (props: Props) => {
  return (
    <Image
      alt=""
      width={props.width}
      height={props.height}
      src="data:image/png;base64,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"
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
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 ml-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    </div>
  );
};

export { PurpleArrow, Pencil, Notification };
