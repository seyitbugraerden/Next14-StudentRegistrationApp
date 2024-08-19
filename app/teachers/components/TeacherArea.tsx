"use client";
import React from "react";

const TeacherArea: React.FC<any> = ({ data }) => {
  console.log(data);
  return <div>{data.stage}</div>;
};

export default TeacherArea;
