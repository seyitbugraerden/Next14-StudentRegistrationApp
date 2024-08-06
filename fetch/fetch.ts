import { pb } from "@/lib/pb";


export const fetchClasses = async () => {
  return await pb.collection("classes").getFullList();
};
