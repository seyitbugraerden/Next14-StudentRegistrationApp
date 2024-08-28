"use client";
import React from "react";

const DeleteStage: React.FC<any> = async ({ slug }) => {
  const deletedFunction = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_TECH_URL}/${slug}`,
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
      className="ms-4 mt-4 inline-block rounded bg-cyan-500 px-12 py-3 text-sm font-medium text-slate-950 transition duration-300 hover:bg-cyan-500/60 hover:text-white focus:outline-none cursor-pointer"
    >
      Bölümü Sil
    </button>
  );
};

export default DeleteStage;
