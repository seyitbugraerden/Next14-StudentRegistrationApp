"use client";
import { modalUp } from "@/state/state";
import { useSetAtom } from "jotai";
import React from "react";
import NewClass from "./newClass";

const PopupBox: React.FC<any> = ({ value, data }) => {
  const popupvalue = useSetAtom(modalUp);
  const selected = data.find((item: any) => item.class === value);
  const selectedClass = selected.classes;
  const id = selected.id;

  const handleDelete = async (classToDelete: string) => {
    // Sınıfı silmek için gerekli olan güncellemeleri yap
    const updatedClasses = selectedClass.filter(
      (item: any) => item.class !== classToDelete
    );

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ classes: updatedClasses }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
      // Optionally close the modal or update local state
      popupvalue(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center justify-center gap-5 flex-wrap">
        <div
          className="absolute top-12 right-12 z-[101] scale-[.05] origin-top-right cursor-pointer"
          onClick={() => {
            popupvalue(false);
          }}
        >
          <svg
            width="387"
            height="387"
            viewBox="0 0 387 387"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M377.471 28.4475C386.003 36.9797 386.003 50.8132 377.471 59.3455L247.012 189.805L196.426 139.219L326.885 8.75947C335.417 0.227236 349.25 0.227228 357.783 8.75946L377.471 28.4475ZM193.115 142.529L243.701 193.115L193.115 243.701L142.529 193.115L193.115 142.529ZM196.426 247.012L247.012 196.426L377.47 326.884C386.003 335.417 386.003 349.25 377.471 357.782L357.782 377.47C349.25 386.003 335.417 386.003 326.884 377.47L196.426 247.012ZM139.219 196.426L189.805 247.012L59.3456 377.47C50.8133 386.003 36.9798 386.003 28.4476 377.471L8.75956 357.782C0.227327 349.25 0.227338 335.417 8.75958 326.884L139.219 196.426ZM139.219 189.805L8.75947 59.3455C0.227238 50.8132 0.227229 36.9798 8.75946 28.4475L28.4475 8.75948C36.9797 0.227245 50.8132 0.227255 59.3455 8.75949L189.805 139.219L139.219 189.805Z"
              fill="white"
              stroke="##00BCD4"
              strokeWidth="4.68175"
            />
            <rect
              x="149.386"
              y="102.23"
              width="160.39"
              height="66.7489"
              transform="rotate(45 149.386 102.23)"
              fill="white"
            />
            <rect
              x="273.595"
              y="159.793"
              width="160.39"
              height="66.7489"
              transform="rotate(135 273.595 159.793)"
              fill="white"
            />
          </svg>
        </div>
        {selectedClass.map((item: any, idx: any) => (
          <div
            className="flex flex-row gap-3 rounded-xl border border-gray-800 p-8 cursor-pointer shadow-xl transition hover:border-cyan-500/50 hover:shadow-cyan-500/50 relative"
            key={idx}
          >
            <div
              className="scale-[.03] origin-top-right absolute top-2 right-2 z-[99]"
              onClick={() => {
                handleDelete(item.class);
              }}
            >
              <svg
                width="387"
                height="387"
                viewBox="0 0 387 387"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M377.471 28.4475C386.003 36.9797 386.003 50.8132 377.471 59.3455L247.012 189.805L196.426 139.219L326.885 8.75947C335.417 0.227236 349.25 0.227228 357.783 8.75946L377.471 28.4475ZM193.115 142.529L243.701 193.115L193.115 243.701L142.529 193.115L193.115 142.529ZM196.426 247.012L247.012 196.426L377.47 326.884C386.003 335.417 386.003 349.25 377.471 357.782L357.782 377.47C349.25 386.003 335.417 386.003 326.884 377.47L196.426 247.012ZM139.219 196.426L189.805 247.012L59.3456 377.47C50.8133 386.003 36.9798 386.003 28.4476 377.471L8.75956 357.782C0.227327 349.25 0.227338 335.417 8.75958 326.884L139.219 196.426ZM139.219 189.805L8.75947 59.3455C0.227238 50.8132 0.227229 36.9798 8.75946 28.4475L28.4475 8.75948C36.9797 0.227245 50.8132 0.227255 59.3455 8.75949L189.805 139.219L139.219 189.805Z"
                  fill="white"
                  stroke="##00BCD4"
                  strokeWidth="4.68175"
                />
                <rect
                  x="149.386"
                  y="102.23"
                  width="160.39"
                  height="66.7489"
                  transform="rotate(45 149.386 102.23)"
                  fill="white"
                />
                <rect
                  x="273.595"
                  y="159.793"
                  width="160.39"
                  height="66.7489"
                  transform="rotate(135 273.595 159.793)"
                  fill="white"
                />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-cyan-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            <h2 className="text-4xl font-bold text-white">
              {value}-{item.class}
            </h2>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <NewClass />
      </div>
    </div>
  );
};

export default PopupBox;
