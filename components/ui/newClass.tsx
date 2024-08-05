"use client";
import { selectedClass } from "@/state/state";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";

function NewClass() {
  const [data, setData] = useState(null); //ilk datanın saklandığı alan
  const [selectedData, setSelectedData] = useState(null); //Ekrandaki datanın sakladığımız datayla eşleştiği alan
  const [isOpen, setIsOpen] = useState(false);
  const [value] = useAtom(selectedClass);
  const [newClass, setNewClass] = useState("");
  const [ekli, setEkli] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        const selectedElement = result?.items?.find(
          (item: any) => item.class === value
        );
        setSelectedData(selectedElement ? { ...selectedElement } : null);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [value]); // Re-run when `value` changes

  const handleSubmit = async () => {
    if (!selectedData) return;

    // Check if the new class already exists
    const classExists = selectedData.classes.some(
      (item: any) => item.class === newClass.toUpperCase()
    );

    if (classExists) {
      console.log("Class already exists");
      setEkli(true);
      setTimeout(() => {
        setEkli(false);
        setNewClass("");
      }, 3000);
      return; // Prevent PATCH request if class already exists
    }

    // Proceed with adding the new class
    const updatedClasses = [
      ...selectedData.classes,
      {
        class: newClass.toUpperCase(),
        students: [],
      },
    ];

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/${selectedData.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ classes: updatedClasses }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
      // Optionally close the modal or update local state
      setIsOpen(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div
        className="inline-block rounded bg-cyan-500 px-12 py-3 text-sm font-medium text-slate-950 transition duration-300 hover:bg-cyan-500/60 hover:text-white focus:outline-none cursor-pointer"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Yeni Sınıf Ekle
      </div>
      {isOpen && (
        <div className="absolute top-0 left-0 w-screen h-screen flex flex-col gap-4 justify-center items-center bg-slate-950">
          <div className="flex flex-row gap-6">
            <div className="flex flex-row gap-6 items-center">
              <h2 className="text-4xl">{value}</h2>
              <span>-</span>
              <div className="flex flex-col gap-4 relative">
                {ekli && (
                  <h2 className="absolute -top-8 left-0 text-cyan-500">
                    Zaten Ekli
                  </h2>
                )}
                <input
                  type="text"
                  className={`border-[1px] border-neutral-200/50 outline-none px-3 py-2 text-white bg-transparent ${
                    ekli ? "pointer-events-none opacity-30" : ""
                  }`}
                  value={newClass}
                  onChange={(e) => {
                    setNewClass(e.target.value);
                  }}
                />
              </div>
            </div>
            <div
              className={`inline-block rounded bg-cyan-500 px-12 py-3 text-sm font-medium text-slate-950 transition duration-300 hover:bg-cyan-500/60 hover:text-white focus:outline-none cursor-pointer ${
                ekli ? "pointer-events-none opacity-30" : ""
              }`}
              onClick={handleSubmit}
            >
              Ekle
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NewClass;
