"use client";
import React, { useState } from "react";

const TeacherArea: React.FC<any> = ({ data, id }) => {
  const [teacherList, setTeacherList] = useState(data?.teachers || []);

  const handleRemoveTeacher = async (idx: number) => {
    const updatedList = teacherList.filter(
      (_: any, index: any) => index !== idx
    );
    setTeacherList(updatedList);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_TECH_URL}/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            stage: data.stage,
            queue: data.queue,
            teachers: updatedList,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="text-white">
      <h2 className="text-3xl font-bold sm:text-4xl text-center">
        {data.stage}
      </h2>
      <div className="flex flex-row gap-4 mt-4">
        {teacherList.map((item: any, idx: number) => (
          <div
            key={idx}
            className="rounded-xl border border-gray-800 py-4 px-2 shadow-xl transition hover:border-cyan-500/50 hover:shadow-cyan-500/50 cursor-pointer relative flex flex-row items-center gap-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-cyan-500"
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
            <svg
              onClick={() => handleRemoveTeacher(idx)}
              width="8"
              height="8"
              viewBox="0 0 387 387"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-2 top-2 z-[99]"
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
            <h2 className="text-sm font-bold text-white">
              {item.name} {item.lastname}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherArea;
