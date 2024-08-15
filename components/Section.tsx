import React from "react";
import { LampDemo } from "@/components/ui/lamp";
import { fetchClasses } from "@/fetch/fetch";
import MainBox from "./ui/MainBox";

async function Section() {
  const data = await fetchClasses();
  return (
    <>
      <LampDemo />
      <section className="!bg-transparent text-white relative z-[99]">
        <div className="mx-auto w-screen max-w-[80%] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Hoş Geldiniz !</h2>

            <p className="mt-4 text-gray-300">
              Dilediğiniz sınıfı inceleyebilir, güncelleyebilir ve
              öğrencilerinize en uygun kurs programını hazırlayabilirsiniz.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5">
            {data?.map((item, idx) => (
              <MainBox item={item} key={idx} />
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#"
              className="inline-block rounded bg-cyan-500 px-12 py-3 text-sm font-medium text-slate-950 transition duration-300 hover:bg-cyan-500/20 hover:text-white focus:outline-none"
            >
              Program oluştur
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;
