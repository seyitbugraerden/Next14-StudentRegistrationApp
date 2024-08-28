import React from "react";
import AddNewTeacher from "../components/addNewTeacher";
import TeacherArea from "../components/TeacherArea";
import Link from "next/link";
import { fetchTeacherItem } from "@/fetch/fetch";
import DeleteStage from "../components/deleteStage";

const Page: React.FC<any> = async ({ params }) => {
  const data = await fetchTeacherItem(params.slug);
  return (
    <div className="max-w-[50vw] mx-auto h-screen flex flex-col gap-4 justify-center items-center">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-4xl text-white">
          {data.stage}
        </h2>
        {data.teachers !== null && data.teachers.length > 0 ? (
          <TeacherArea id={params.slug} />
        ) : (
          <p className="my-5 text-white">Öğretmen bulunmamaktadır.</p>
        )}

        <Link href={`/teachers/${params.slug}/add`}>
          <AddNewTeacher />
        </Link>
        <DeleteStage slug={params.slug}/>
      </div>
    </div>
  );
};

export default Page;
