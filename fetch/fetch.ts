import { pb } from "@/lib/pb";

export const revalidate = 0;
export const fetchClasses = async () => {
  return await pb.collection("classes").getFullList();
};
