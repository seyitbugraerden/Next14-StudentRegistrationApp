import Popup from "@/components/Popup";
import Section from "@/components/Section";
import { fetchClasses } from "@/fetch/fetch";

export const dynamic = "force-dynamic";
export default async function Home() {
  const data = await fetchClasses();
  return (
    <main className="text-white">
      <Section />
      <Popup data={data} />
    </main>
  );
}
