import { pb } from "@/lib/pb";

export const fetchClasses = async () => {
  return await pb.collection("classes").getFullList();
};

export const fetchTeachers = async () => {
  return await pb.collection("teachers").getFullList();
};
