"use client";
import { fetchDates } from "@/fetch/fetch";
import React, { useState } from "react";
import PopupModals from "./components/popupModal";

const getStartOfWeek = (date: any) => {
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Pazartesi için -6, diğer günler için 1
  return new Date(date.setDate(diff));
};

// Yardımcı fonksiyon: Haftanın tarihlerini ve günlerini döndürür
const getWeekDates = (startOfWeek: any) => {
  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    weekDates.push(date);
  }
  return weekDates;
};
function UygulamaYap() {
  const [isClicked, setIsClicked] = useState(false);
  const today = new Date();
  const startOfWeek = getStartOfWeek(new Date(today));
  const weekDates = getWeekDates(startOfWeek);
  weekDates.forEach((date) => {
    const dateString = date.toISOString().split("T")[0]; // Convert Date to ISO string and format it
    console.log(dateString);
  });

  return (
    <main className="text-white">
      {isClicked && <PopupModals />}
      <h2 className="text-center my-12 text-2xl">Haftalık Program</h2>
      <div className="relative overflow-x-auto mt-12" id="style-15">
        <table className="w-full text-[10px] text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-[10px]">
                Günler / Saatler
              </th>
              {weekDates.map((date, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 text-[10px] w-[12vw]"
                >
                  {date.toLocaleDateString("tr-TR", {
                    weekday: "long",
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="overflow-auto">
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 !text-[10px]">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                08:30 - 09:10
              </th>
              <td className="px-6 py-4">
                <div className="grid grid-cols-2 gap-x-2 gap-y-4">
                  <span
                    className="bg-blue-100 text-blue-800  font-medium text-center rounded dark:bg-blue-900 dark:text-blue-300"
                    onClick={() => {
                      setIsClicked(true);
                    }}
                  >
                    Default
                  </span>
                  <span className="bg-blue-100 text-blue-800  font-medium text-center rounded dark:bg-blue-900 dark:text-blue-300">
                    Default
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="grid grid-cols-2 gap-x-2 gap-y-4">
                  <span className="bg-blue-100 text-blue-800  font-medium text-center rounded dark:bg-blue-900 dark:text-blue-300">
                    Default
                  </span>
                  <span className="bg-blue-100 text-blue-800  font-medium text-center rounded dark:bg-blue-900 dark:text-blue-300">
                    Default
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="grid grid-cols-2 gap-x-2 gap-y-4">
                  <span className="bg-blue-100 text-blue-800  font-medium text-center rounded dark:bg-blue-900 dark:text-blue-300">
                    Default
                  </span>
                  <span className="bg-blue-100 text-blue-800  font-medium text-center rounded dark:bg-blue-900 dark:text-blue-300">
                    Default
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="grid grid-cols-2 gap-x-2 gap-y-4">
                  <span className="bg-blue-100 text-blue-800  font-medium text-center rounded dark:bg-blue-900 dark:text-blue-300">
                    Default
                  </span>
                  <span className="bg-blue-100 text-blue-800  font-medium text-center rounded dark:bg-blue-900 dark:text-blue-300">
                    Default
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="grid grid-cols-2 gap-x-2 gap-y-4">
                  <span className="bg-blue-100 text-blue-800  font-medium text-center rounded dark:bg-blue-900 dark:text-blue-300">
                    Default
                  </span>
                  <span className="bg-blue-100 text-blue-800  font-medium text-center rounded dark:bg-blue-900 dark:text-blue-300">
                    Default
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="grid grid-cols-2 gap-x-2 gap-y-4">
                  <span className="bg-blue-100 text-blue-800  font-medium text-center rounded dark:bg-blue-900 dark:text-blue-300">
                    Default
                  </span>
                  <span className="bg-blue-100 text-blue-800  font-medium text-center rounded dark:bg-blue-900 dark:text-blue-300">
                    Default
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="grid grid-cols-2 gap-x-2 gap-y-4">
                  <span className="bg-blue-100 text-blue-800  font-medium text-center rounded dark:bg-blue-900 dark:text-blue-300">
                    Default
                  </span>
                  <span className="bg-blue-100 text-blue-800  font-medium text-center rounded dark:bg-blue-900 dark:text-blue-300">
                    Default
                  </span>
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 !text-[10px]">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <span className="bg-purple-100 text-purple-800  font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 cursor-pointer">
                  Saat Ekle
                </span>
              </th>
              <td className="px-6 py-4 ">
                <div>
                  <span className="bg-yellow-100 cursor-pointer text-yellow-800 !text-[10px] font-medium text-center px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 text-nowrap">
                    Öğrenci Ekle
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 ">
                <div>
                  <span className="bg-yellow-100 cursor-pointer text-yellow-800 !text-[10px] font-medium text-center px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 text-nowrap">
                    Öğrenci Ekle
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 ">
                <div>
                  <span className="bg-yellow-100 cursor-pointer text-yellow-800 !text-[10px] font-medium text-center px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 text-nowrap">
                    Öğrenci Ekle
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 ">
                <div>
                  <span className="bg-yellow-100 cursor-pointer text-yellow-800 !text-[10px] font-medium text-center px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 text-nowrap">
                    Öğrenci Ekle
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 ">
                <div>
                  <span className="bg-yellow-100 cursor-pointer text-yellow-800 !text-[10px] font-medium text-center px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 text-nowrap">
                    Öğrenci Ekle
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 ">
                <div>
                  <span className="bg-yellow-100 cursor-pointer text-yellow-800 !text-[10px] font-medium text-center px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 text-nowrap">
                    Öğrenci Ekle
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 ">
                <div>
                  <span className="bg-yellow-100 cursor-pointer text-yellow-800 !text-[10px] font-medium text-center px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 text-nowrap">
                    Öğrenci Ekle
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default UygulamaYap;
