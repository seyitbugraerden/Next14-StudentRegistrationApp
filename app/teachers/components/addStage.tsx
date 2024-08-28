import Link from "next/link";
import React from "react";

function AddStage() {
  return (
    <div className="text-center mt-8">
      <Link
        href="/teachers/add"
        className="inline-block rounded bg-cyan-500 px-12 py-3 text-sm font-medium text-slate-950 transition duration-300 hover:bg-cyan-500/20 hover:text-white focus:outline-none"
      >
        Bölüm Ekle
      </Link>
    </div>
  );
}

export default AddStage;
