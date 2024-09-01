"use client";
import { usePathname } from "next/navigation";
import React from "react";

const DeleteStage: React.FC<any> = () => {
  const path = usePathname();
  const pathId = path.split("/").pop();
  const deletedFunction = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_TECH_URL}/${pathId}`,
        {
          method: "DELETE",
        }
      );
      window.location.href = "/teachers";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={deletedFunction}
      className="mt-4 inline-block rounded bg-cyan-500 px-12 py-3 text-xs scale-[.8] origin-center font-medium text-slate-950 transition duration-300 hover:bg-cyan-500/60 hover:text-white focus:outline-none cursor-pointer"
    >
      Bölümü Sil
    </button>
  );
};

export default DeleteStage;
