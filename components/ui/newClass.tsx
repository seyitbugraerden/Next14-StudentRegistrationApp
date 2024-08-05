"use client";
import { selectedClass } from "@/state/state";
import { useAtom } from "jotai";
import React, { useState } from "react";
import Input from "./Input";

function NewClass() {
  const [isOpen, setisOpen] = useState(false);
  const [value] = useAtom(selectedClass);
  return (
    <>
      <div
        className="inline-block rounded bg-cyan-500 px-12 py-3 text-sm font-medium text-slate-950 transition duration-300 hover:bg-cyan-500/60 hover:text-white focus:outline-none cursor-pointer"
        onClick={() => {
          setisOpen(true);
        }}
      >
        Yeni Sınıf Ekle
      </div>
      {isOpen && (
        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-slate-950">
          <div className="flex flex-rpw gap-6">
            <div className="flex flex-row gap-6 items-center">
              <h2 className="text-4xl">{value}</h2>
              <span>-</span>
              <Input />
            </div>
            <div
              className="inline-block rounded bg-cyan-500 px-12 py-3 text-sm font-medium text-slate-950 transition duration-300 hover:bg-cyan-500/60 hover:text-white focus:outline-none cursor-pointer"
              onClick={() => {
                setisOpen(true);
              }}
            >
              Ekle
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NewClass;
