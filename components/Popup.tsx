"use client";
import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { modalUp, selectedClass } from "@/state/state";
import PopupBox from "./ui/PopupBox";

interface PopupProps {
  data: any;
}

const Popup: React.FC<PopupProps> = ({ data }) => {
  const [popUp, setPopUp] = useAtom(modalUp);
  const [value] = useAtom(selectedClass);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPopUp(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [setPopUp]);
  if (popUp === true) {
    window.addEventListener("click", (e: any) => {
      if (e.target.id === "main-pop") {
        setPopUp(false);
      }
    });
  }
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
