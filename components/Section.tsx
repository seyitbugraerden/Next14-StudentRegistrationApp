import React from "react";
import { LampDemo } from "@/components/ui/lamp";
import { fetchClasses } from "@/fetch/fetch";
import MainBox from "./ui/MainBox";

async function Section() {
  const data = await fetchClasses();
  return (
    <>
      <LampDemo />
      <section className="!bg-transparent text-white relative z-[99] -top-16">
        <div className="mx-auto w-screen max-w-[80%] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-2xl 2xl:text-4xl">Hoş Geldiniz !</h2>

            <p className="mt-4 text-gray-300 text-xs 2xl:text-md">
              Dilediğiniz sınıfı inceleyebilir, güncelleyebilir ve
              öğrencilerinize en uygun kurs programını hazırlayabilirsiniz.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5">
            {data?.map((item, idx) => (
              <MainBox item={item} key={idx} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;
