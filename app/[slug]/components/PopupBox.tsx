"use client";
import React, { useEffect, useState } from "react";
import NewClass from "../../../components/ui/newClass";
import Link from "next/link";
import { selectedClass } from "@/state/state";
import { useAtom } from "jotai";
import { ring2 } from "ldrs";
const PopupBox: React.FC<any> = () => {
  const [data, setData] = useState<any>();
  const [isValue, setIsValue] = useState(true);
  const [value] = useAtom(selectedClass);
  const selected = data?.find((item: any) => item.class === value);
  const selectedClassOld = selected?.classes;
  selectedClassOld?.sort((a: any, b: any) => a.class.localeCompare(b.class));
  const id = selected?.id;

  const handleDelete = async (classToDelete: string) => {
    const updatedClasses = selectedClassOld?.filter(
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
      window.location.href = "/";
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result.items);
        setIsValue(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    ring2.register();
  }, []); // Include all dependencies here

  if (isValue) {
    return (
      <l-ring-2
        size="40"
        stroke="5"
        stroke-length="0.25"
        bg-opacity="0.1"
        speed="0.8"
        color="white"
      ></l-ring-2>
    );
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col gap-6">
        <h2 className="text-center text-2xl 2xl:text-4xl text-white font-bold relative">
          {value !== "Mezun" ? `${value}.` : "Mezun"} Sınıf
        </h2>
        <div className="flex flex-row items-center justify-center gap-2 flex-wrap relative">
          {selectedClassOld?.map((item: any, idx: any) => (
            <div
              className="flex flex-row items-center gap-2 rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-cyan-500/50 hover:shadow-cyan-500/50 cursor-pointer relative"
              key={idx}
            >
              <div
                className="scale-[.03] origin-top-right absolute top-2 right-2 z-[99]"
                onClick={() => handleDelete(item.class)}
                aria-hidden="true"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 text-cyan-500 2xl:size-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
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
              <Link
                href={`/class/${value}_${item.class}`}
                className="text-xs font-bold text-white"
              >
                {value}-{item.class}
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center text-white scale-75 2xl:scale-100">
          <NewClass />
        </div>
      </div>
    </div>
  );
};

export default PopupBox;
