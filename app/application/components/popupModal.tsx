import Image from "next/image";
import React from "react";
import Delete from "@/public/Delete.svg";
function PopupModals() {
  return (
    <div className="w-screen h-screen flex justify-center items-center absolute top-0 left-0 z-[999] backdrop-blur-sm bg-white/10">
      <div className="p-5 bg-red-500 min-w-[25vw]">
        <div className="flex justify-between items-center">
          <span>11 - A</span>
          <span className="ms-4 text-xs font-light">
            <strong>Fizik</strong> - Mustafa Erden
          </span>
        </div>
        <div className="w-full h-[1px] bg-white mt-4 mb-8"></div>
        <div className="flex flex-row justify-between">
          Seyit Buğra Erden
          <div>
            <span>
              <Image src={Delete} alt="delete" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupModals;
