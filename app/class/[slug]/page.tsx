"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ring2 } from "ldrs";
function Class() {
  const [data, setData] = useState<any>();
  const [isValue, setIsValue] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [newStudentName, setNewStudentName] = useState<any>();
  const [newStudentLastName, setNewStudentLastName] = useState<any>();
  const [selectedClasses, setSelectedClasses] = useState<any>();
  const [id, setId] = useState();
  const router = usePathname();
  const className = router.split("/").pop()?.split("_")[0];
  const value = router.split("/").pop()?.split("_")[1];

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}`);
        const data = await response.json();
        setData(
          data.items
            .find((item: any) => item.class === className)
            .classes.find((item: any) => item.class === value).students
        );
        setId(data.items.find((item: any) => item.class === className).id);
        setSelectedClasses(
          data.items.find((item: any) => item.class === className).classes
        );
        setIsValue(false);
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };

    fetchRecords();
    ring2.register();
  }, [data]);
  const handleRemoveStudent = (idx: number) => {
    // Make a copy of the students array
    const updatedStudents = [
      ...selectedClasses.find((item: any) => item.class === value).students,
    ];

    // Remove the student at the specified index
    updatedStudents.splice(idx, 1);

    // Update the selectedClasses with the modified students list
    const updatedClasses = selectedClasses.map((item: any) =>
      item.class === value ? { ...item, students: updatedStudents } : item
    );

    // Update the state with the new class data
    setData(updatedStudents);
    setSelectedClasses(updatedClasses);

    // Optionally, update the server with the new data
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ classes: updatedClasses }),
    }).catch((error) => console.error("Error updating classes:", error));
  };

  return (
    <div className="max-w-[50vw] h-screen flex justify-center items-center">
      <div className="flex flex-col gap-6 items-center text-white">
        <h2 className="text-2xl font-bold">
          {className} / {value?.toUpperCase()}
        </h2>
        <div className="flex flex-row justify-start gap-x-4 gap-y-8 max-w-[70vw] flex-wrap">
          {isValue ? (
            <l-ring-2
              size="40"
              stroke="5"
              stroke-length="0.25"
              bg-opacity="0.1"
              speed="0.8"
              color="white"
            ></l-ring-2>
          ) : (
            <>
              {data !== null && data.length > 0 ? (
                data.map((item: any, idx: any) => (
                  <div
                    key={idx}
                    className="flex flex-row flex-wrap items-center gap-3 rounded-xl border border-gray-800 p-4 cursor-pointer shadow-xl transition hover:border-cyan-500/50 hover:shadow-cyan-500/50 relative"
                  >
                    <div
                      className="scale-[.02] origin-top-right absolute top-2 right-2 z-[99]"
                      onClick={() => handleRemoveStudent(idx)}
                    >
                      <svg
                        width="387"
                        height="387"
                        viewBox="0 0 387 387"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M377.471 28.4475C386.003 36.9797 386.003 50.8132 377.471 59.3455L247.012 189.805L196.426 139.219L326.885 8.75947C335.417 0.227236 349.25 0.227228 357.783 8.75946L377.471 28.4475ZM193.115 142.529L243.701 193.115L193.115 243.701L142.529 193.115L193.115 142.529ZM196.426 247.012L247.012 196.426L377.47 326.884C386.003 335.417 386.003 349.25 377.471 357.782L357.782 377.47C349.25 386.003 335.417 386.003 326.884 377.47L196.426 247.012ZM139.219 196.426L189.805 247.012L59.3456 377.47C50.8133 386.003 36.9798 386.003 28.4476 377.471L8.75956 357.782C0.227327 349.25 0.227338 335.417 8.75958 326.884L139.219 196.426ZM139.219 189.805L8.75947 59.3455C0.227238 50.8132 0.227229 36.9798 8.75946 28.4475L28.4475 8.75948C36.9797 0.227245 50.8132 0.227255 59.3455 8.75949L189.805 139.219L139.219 189.805Z"
                          fill="white"
                          stroke="#00BCD4"
                          strokeWidth="4.68175"
                        />
                        <rect
                          x="149.386"
                          y="102.23"
                          width="160.39"
                          height="66.7489"
                          transform="rotate(45 149.386 102.23)"
                          fill="white"
                        />
                        <rect
                          x="273.595"
                          y="159.793"
                          width="160.39"
                          height="66.7489"
                          transform="rotate(135 273.595 159.793)"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <svg
                      onClick={() => {}}
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 text-cyan-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                    <h2 className="text-sm font-bold text-white">
                      {item.name} {item.lastname}
                    </h2>
                  </div>
                ))
              ) : (
                <p>Öğrenci bulunmamaktadır</p>
              )}
            </>
          )}
        </div>
        <div
          onClick={() => {
            setIsOpen(true);
          }}
          className={`inline-block rounded bg-cyan-500 px-12 py-3 text-sm font-medium text-slate-950 transition duration-300 hover:bg-cyan-500/60 hover:text-white focus:outline-none cursor-pointer`}
        >
          Öğrenci Ekle
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center bg-slate-950 z-[100]">
          <div className="flex flex-row gap-4">
            <div className="flex flex-col items-start text-white">
              <span>Ad</span>
              <input
                type="text"
                className={`border-[1px] border-neutral-200/50 outline-none px-3 py-2 text-white bg-transparent`}
                placeholder="İsim"
                value={newStudentName}
                onChange={(e: any) => {
                  setNewStudentName(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col items-start text-white">
              <span>Soy Ad</span>
              <input
                type="text"
                className={`border-[1px] border-neutral-200/50 outline-none px-3 py-2 text-white bg-transparent`}
                placeholder="Soyisim"
                value={newStudentLastName}
                onChange={(e: any) => {
                  setNewStudentLastName(e.target.value);
                }}
              />
            </div>
          </div>
          <div
            className="absolute right-12 top-12 cursor-pointer"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 387 387"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M377.471 28.4475C386.003 36.9797 386.003 50.8132 377.471 59.3455L247.012 189.805L196.426 139.219L326.885 8.75947C335.417 0.227236 349.25 0.227228 357.783 8.75946L377.471 28.4475ZM193.115 142.529L243.701 193.115L193.115 243.701L142.529 193.115L193.115 142.529ZM196.426 247.012L247.012 196.426L377.47 326.884C386.003 335.417 386.003 349.25 377.471 357.782L357.782 377.47C349.25 386.003 335.417 386.003 326.884 377.47L196.426 247.012ZM139.219 196.426L189.805 247.012L59.3456 377.47C50.8133 386.003 36.9798 386.003 28.4476 377.471L8.75956 357.782C0.227327 349.25 0.227338 335.417 8.75958 326.884L139.219 196.426ZM139.219 189.805L8.75947 59.3455C0.227238 50.8132 0.227229 36.9798 8.75946 28.4475L28.4475 8.75948C36.9797 0.227245 50.8132 0.227255 59.3455 8.75949L189.805 139.219L139.219 189.805Z"
                fill="white"
                stroke="##00BCD4"
                strokeWidth="4.68175"
              />
              <rect
                x="149.386"
                y="102.23"
                width="160.39"
                height="66.7489"
                transform="rotate(45 149.386 102.23)"
                fill="white"
              />
              <rect
                x="273.595"
                y="159.793"
                width="160.39"
                height="66.7489"
                transform="rotate(135 273.595 159.793)"
                fill="white"
              />
            </svg>
          </div>

          <div
            onClick={async () => {
              if (newStudentName === "" || newStudentLastName === "") {
                alert("İsim ya da Soy Ad Eksik");
              } else {
                if (newStudentName && newStudentLastName) {
                  const newStudent = {
                    name: newStudentName,
                    lastname: newStudentLastName,
                  };

                  const updatedClasses = selectedClasses.map((item: any) =>
                    item.class === value
                      ? { ...item, students: [...item.students, newStudent] }
                      : item
                  );

                  setData([...data, newStudent]);
                  setSelectedClasses(updatedClasses);

                  try {
                    await fetch(
                      `${process.env.NEXT_PUBLIC_API_BASE_URL}/${id}`,
                      {
                        method: "PATCH",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ classes: updatedClasses }),
                      }
                    );
                  } catch (error) {
                    console.error("Error updating classes:", error);
                  }
                  setIsOpen(false);
                  setNewStudentName("");
                  setNewStudentLastName("");
                }
              }
            }}
            className={`mt-12 rounded bg-cyan-500 px-12 py-3 text-sm font-medium text-slate-950 transition duration-300 hover:bg-cyan-500/60 hover:text-white focus:outline-none cursor-pointer`}
          >
            Ekle
          </div>
        </div>
      )}
    </div>
  );
}

export default Class;
