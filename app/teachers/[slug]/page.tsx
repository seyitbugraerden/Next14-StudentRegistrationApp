"use client";
import React, { useEffect, useState } from "react";
import AddNewTeacher from "../components/addNewTeacher";
import Link from "next/link";
import DeleteStage from "../components/deleteStage";
import { ring2 } from "ldrs";
import { usePathname } from "next/navigation";

const Page: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const path = usePathname();
  const pathId = path.split("/").pop();

  useEffect(() => {
    if (!pathId) return; // Ensure pathId is defined

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_TECH_URL}/${pathId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setIsOpen(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    ring2.register();
  }, [pathId]); // Add pathId as a dependency

  const handleRemoveTeacher = async (idx: number) => {
    if (!data || !data.teachers) return;

    // Create a new array excluding the item at index idx
    const updatedList = data.teachers.filter(
      (_: any, index: any) => index !== idx
    );

    // Update the state
    setData((prevData: any) => ({
      ...prevData,
      teachers: updatedList,
    }));

    try {
      // Make the PATCH request to update the server
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_TECH_URL}/${pathId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
            teachers: updatedList,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Update successful:", result);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="max-w-[50vw] mx-auto h-[99dvh] flex flex-col gap-4 justify-center items-center">
      {isOpen ? (
        <div
          className="absolute top-[50%] left-[50%] w-screen h-[95dvh] flex justify-center items-center bg-black/50"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <l-ring-2
            size="40"
            stroke="5"
            stroke-length="0.25"
            bg-opacity="0.1"
            speed="0.8"
            color="white"
          ></l-ring-2>
        </div>
      ) : (
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl 2xl:text-4xl font-bold text-white">
            {data?.stage || "Stage not found"}
          </h2>
          <div className="my-4 flex flex-row gap-4 flex-wrap justify-center">
            {data?.teachers && data.teachers.length > 0 ? (
              data.teachers.map((item: any, idx: number) => (
                <div key={idx} className="flex flex-row">
                  <div
                    key={idx}
                    className="rounded-xl border border-gray-800 py-4 px-2 shadow-xl transition hover:border-cyan-500/50 hover:shadow-cyan-500/50 cursor-pointer relative flex flex-row items-center gap-2 my-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 text-cyan-500"
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
                    <svg
                      onClick={() => handleRemoveTeacher(idx)}
                      width="387"
                      height="387"
                      viewBox="0 0 387 387"
                      color="white"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-2 absolute right-1 top-1"
                    >
                      <path
                        d="M377.471 28.4475C386.003 36.9797 386.003 50.8132 377.471 59.3455L247.012 189.805L196.426 139.219L326.885 8.75947C335.417 0.227236 349.25 0.227228 357.783 8.75946L377.471 28.4475ZM193.115 142.529L243.701 193.115L193.115 243.701L142.529 193.115L193.115 142.529ZM196.426 247.012L247.012 196.426L377.47 326.884C386.003 335.417 386.003 349.25 377.471 357.782L357.782 377.47C349.25 386.003 335.417 386.003 326.884 377.47L196.426 247.012ZM139.219 196.426L189.805 247.012L59.3456 377.47C50.8133 386.003 36.9798 386.003 28.4476 377.471L8.75956 357.782C0.227327 349.25 0.227338 335.417 8.75958 326.884L139.219 196.426ZM139.219 189.805L8.75947 59.3455C0.227238 50.8132 0.227229 36.9798 8.75946 28.4475L28.4475 8.75948C36.9797 0.227245 50.8132 0.227255 59.3455 8.75949L189.805 139.219L139.219 189.805Z"
                        fill="white"
                        stroke="#00BCD4"
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
                    <h2 className="text-xs 2xl:text-2xl font-bold text-white">
                      {item.name} {item.lastname}
                    </h2>
                  </div>
                </div>
              ))
            ) : (
              <p className="my-5 text-white">Öğretmen bulunmamaktadır.</p>
            )}
          </div>
          <Link href={`/teachers/${pathId}/add`}>
            <AddNewTeacher />
          </Link>
          <DeleteStage />
        </div>
      )}
    </div>
  );
};

export default Page;
