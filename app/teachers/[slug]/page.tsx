"use client";
import React, { useEffect, useState } from "react";
import TeacherArea from "../components/TeacherArea";
import AddNewTeacher from "../components/addNewTeacher";
import { ring2 } from "ldrs";

const Page: React.FC<any> = ({ params }) => {
  const [data, setData] = useState<any>();
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="max-w-[50vw] mx-auto h-screen flex flex-col gap-4 justify-center items-center">
      <TeacherArea  selected={params.slug}/>
      <AddNewTeacher />
    </div>
  );
};

export default Page;
