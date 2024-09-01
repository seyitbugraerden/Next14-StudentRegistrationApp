"use client";
import React, { useState } from "react";

function TeacherAdd() {
  const [value, setValue] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_TECH_URL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ stage: value }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      window.location.href = "/teachers";
    } catch (error) {
      console.error("Error:", error);
    }
    setValue("");
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center bg-slate-950 z-[100]">
      <h2 className="text-2xl text-white">Bölüm Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row gap-4 text-xs my-6">
          <div className="flex flex-col gap-4 items-start text-white">
            <span>Bölüm ismi</span>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              className="border-[1px] border-neutral-200/50 outline-none px-3 py-2 text-white bg-transparent"
              placeholder="Bölüm ismi"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="rounded bg-cyan-500 px-12 py-3 text-xs 2xl:text-sm scale-75 origin-center 2xl:scale-100 font-medium text-slate-950 transition duration-300 hover:bg-cyan-500/60 hover:text-white focus:outline-none cursor-pointer"
          >
            Ekle
          </button>
        </div>
      </form>
    </div>
  );
}

export default TeacherAdd;
