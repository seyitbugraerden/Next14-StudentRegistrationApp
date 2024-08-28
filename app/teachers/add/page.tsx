"use client";
import React, { useState } from "react";

function TeacherAdd() {
  const [value, setValue] = useState<any>(null);

  const actionFunction = () => {
    console.log(value);
    setValue("");
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center bg-slate-950 z-[100]">
      <>
        <h2 className="text-4xl text-white mb-12">Bölüm Ekle</h2>
        <form action={actionFunction}>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-4 items-start text-white">
              <span>Bölüm ismi</span>
              <input
                value={value}
                onChange={(e: any) => {
                  setValue(e.target.value);
                }}
                type="text"
                className="border-[1px] border-neutral-200/50 outline-none px-3 py-2 text-white bg-transparent"
                placeholder="Bölüm ismi"
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="mt-12 rounded bg-cyan-500 px-12 py-3 text-sm font-medium text-slate-950 transition duration-300 hover:bg-cyan-500/60 hover:text-white focus:outline-none cursor-pointer">
              Ekle
            </button>
          </div>
        </form>
      </>
    </div>
  );
}

export default TeacherAdd;
