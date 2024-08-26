"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ring2 } from "ldrs";
function TeacherAdd() {
  const [newTeacherName, setNewTeacherName] = useState("");
  const [newTeacherSurName, setNewTeacherSurName] = useState("");
  const [fetchDataElement, setFetchDataElement] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);
  const [section, setSection] = useState();
  const pathname = usePathname();
  const classId = pathname.split("/")[2];
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_TECH_URL}/${classId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setFetchDataElement(result.teachers);
        setSection(result);
        setIsOpen(true);
      } catch (error) {
        setError("Failed to fetch data. Please try again later.");
      }
    };

    fetchData();
    ring2.register();
  }, [classId]); // Add classId to dependency array

  const sendNewTeacherList = async (updatedTeachers: any[]) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_TECH_URL}/${classId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ teachers: updatedTeachers }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log("Update successful:", result);
      window.location.href = `/teachers/${classId}`;
    } catch (error) {
      setError("Failed to update teacher list. Please try again later.");
    }
  };

  const handleAddTeacher = () => {
    if (newTeacherName.trim() !== "" && newTeacherSurName.trim() !== "") {
      const updatedTeachers = [
        ...fetchDataElement,
        { lastname: newTeacherSurName, name: newTeacherName },
      ];
      setFetchDataElement(updatedTeachers);
      sendNewTeacherList(updatedTeachers); // Pass updatedTeachers to the function
      setNewTeacherName("");
      setNewTeacherSurName("");
    }
  };
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center bg-slate-950 z-[100]">
      {error && (
        <div className="mb-4 p-4 bg-red-500 text-white rounded">{error}</div>
      )}
      {isOpen ? (
        <>
          <h2 className="text-4xl text-white mb-12">
            {section?.stage} Öğretmeni Ekle
          </h2>

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
                placeholder="Soy isim"
                value={newTeacherSurName}
                onChange={(e) => setNewTeacherSurName(e.target.value)}
              />
            </div>
          </div>
          <div
            onClick={handleAddTeacher}
            className="mt-12 rounded bg-cyan-500 px-12 py-3 text-sm font-medium text-slate-950 transition duration-300 hover:bg-cyan-500/60 hover:text-white focus:outline-none cursor-pointer"
          >
            Ekle
          </div>
        </>
      ) : (
        <l-ring-2
          size="40"
          stroke="5"
          stroke-length="0.25"
          bg-opacity="0.1"
          speed="0.8"
          color="white"
        ></l-ring-2>
      )}
    </div>
  );
}

export default TeacherAdd;
