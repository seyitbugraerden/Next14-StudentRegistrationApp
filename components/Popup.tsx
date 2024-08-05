"use client";
import React from "react";
import { useAtom } from "jotai";
import { modalUp, selectedClass } from "@/state/state";
import PopupBox from "./ui/PopupBox";

const Popup: React.FC<any> = ({ data }) => {
  const [popUp, setPopUp] = useAtom(modalUp);
  const [value] = useAtom(selectedClass);
 

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setPopUp(false);
    }
  });

  return (
    <>
      {popUp && (
        <div
          className="absolute left-0 top-0 w-screen h-screen flex justify-center items-center z-[999] bg-slate-950"
          id="main-pop"
        >
          <div className="gap-8 mt-24 flex flex-row flex-wrap justify-center">
            <PopupBox value={value} data={data} />
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
