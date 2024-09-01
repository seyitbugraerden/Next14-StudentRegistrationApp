"use client";
import React, { useEffect, useState } from "react";
import { LampDemo } from "@/components/ui/lamp";
import { ring2 } from "ldrs";
import AddStage from "./components/addStage";
import Link from "next/link";

function Section() {
  const [data, setData] = useState<any>();
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_TECH_URL}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.items);
        setIsOpen(false);
      } catch (error) {
        // Handle error here
        console.error(error);
      }
    };

    fetchData();
    ring2.register();
  }, []);

  return (
    <>
      {isOpen && (
        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/50 z-[9999999999999999]">
          <l-ring-2
            size="40"
            stroke="5"
            stroke-length="0.25"
            bg-opacity="0.1"
            speed="0.8"
            color="white"
          ></l-ring-2>
        </div>
      )}
      
      <LampDemo />
      <section className="!bg-transparent text-white relative z-[99] -top-16">
        <div className="mx-auto w-screen max-w-[80%] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-2xl 2xl:text-4xl">
              Bölümler ve Öğretmenler
            </h2>

            <p className="mt-4 text-gray-300 text-xs 2xl:text-md">
              Dilediğiniz bölümü inceleyebilir ve öğretmen listenizi güncel
              tutabilirsiniz.
            </p>
          </div>

          <div className="mt-8 flex flex-row gap-4 flex-wrap justify-center">
            {data?.map((item: any, idx: any) => (
              <Link
                href={`/teachers/${item.id}`}
                key={idx}
                className="flex flex-row items-center gap-2 rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-cyan-500/50 hover:shadow-cyan-500/50 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 text-cyan-500 2xl:size-10"
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
                <h2 className="text-xs font-bold text-white 2xl:text-xl">
                  {item.stage}
                </h2>
              </Link>
            ))}
          </div>
          {!isOpen && <AddStage />}
        </div>
      </section>
    </>
  );
}

export default Section;
