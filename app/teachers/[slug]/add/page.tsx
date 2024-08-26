"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function TeacherAdd() {
  const [newTeacherName, setNewTeacherName] = useState("");
  const [newTeacherSurName, setNewTeacherSurName] = useState("");
  const [oldTeachers, setOldTeachers] = useState([]);
  const pathname = usePathname();
  const classId = pathname.split("/")[2];

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center bg-slate-950 z-[100]">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-4 items-start text-white">
          <span>Öğretmen Adı</span>
          <input
            type="text"
            className="border-[1px] border-neutral-200/50 outline-none px-3 py-2 text-white bg-transparent"
            placeholder="İsim"
            value={newTeacherName}
            onChange={(e) => setNewTeacherName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-4 items-start text-white">
          <span>Öğretmen Soy Adı</span>
          <input
            type="text"
            className="border-[1px] border-neutral-200/50 outline-none px-3 py-2 text-white bg-transparent"
            placeholder="Soyisim"
            value={newTeacherSurName}
            onChange={(e) => setNewTeacherSurName(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-12 rounded bg-cyan-500 px-12 py-3 text-sm font-medium text-slate-950 transition duration-300 hover:bg-cyan-500/60 hover:text-white focus:outline-none cursor-pointer">
        Ekle
      </div>
    </div>
  );
}

export default TeacherAdd;
