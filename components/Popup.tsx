"use client";
import React from "react";
import { useAtom } from "jotai";
import { modalUp, selectedClass } from "@/state/state";
import PopupBox from "./ui/PopupBox";

const Popup: React.FC<any> = ({ data }) => {
  const [popUp] = useAtom(modalUp);
  const [value] = useAtom(selectedClass);
  return (
    <>
      {popUp && (
        <div className="absolute left-0 top-0 w-screen h-screen flex justify-center items-center z-[999] bg-slate-950">
          <div className="mt-8 gap-8 p-24 flex flex-row flex-wrap justify-center">
            <PopupBox value={value} data={data} />
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
