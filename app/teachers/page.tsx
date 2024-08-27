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
      } catch (error) {}
    };

    fetchData();
    ring2.register();
  }, []);

  return (
    <>
      <LampDemo />
      <section className="!bg-transparent text-white relative z-[99]">
        <div className="mx-auto w-screen max-w-[80%] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Bölümler ve Öğretmenler
            </h2>

            <p className="mt-4 text-gray-300">
              Dilediğiniz bölümü inceleyebilir ve öğretmen listenizi güncel
              tutabilirsiniz.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5 min-h-[80px]">
            {isOpen ? (
              <div
                className="absolute top-[50%] left-[50%]"
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
              data?.map((item: any, idx: any) => (
                <Link
                  href={`/teachers/${item.id}`}
                  key={idx}
                  className="rounded-xl border border-gray-800 py-4 px-2 shadow-xl transition hover:border-cyan-500/50 hover:shadow-cyan-500/50 cursor-pointer flex flex-row items-center gap-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10 text-cyan-500 "
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
                  <h2 className="text-xl font-bold text-white">{item.stage}</h2>
                </Link>
              ))
            )}
          </div>
          <AddStage />
        </div>
      </section>
    </>
  );
}

export default Section;
