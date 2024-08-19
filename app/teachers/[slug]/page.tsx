import React from "react";
import { fetchTeachers } from "@/fetch/fetch";
import TeacherArea from "../components/TeacherArea";
import AddNewTeacher from "../components/addNewTeacher";

const Page: React.FC<any> = async ({ params }) => {
  const data = await fetchTeachers();
  const element = data.find((item: any) => item.id === params.slug);
  return (
    <div className="max-w-[50vw] mx-auto h-screen flex flex-col gap-4 justify-center items-center">
      <TeacherArea data={element} id={params.slug} />
      <AddNewTeacher />
    </div>
  );
};

export default Page;
