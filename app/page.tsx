import Calendar from "@/components/calendar";


export const dynamic = "force-dynamic";
export default async function Home() {
  return (
    <main className="text-white">
      <Calendar/>
    </main>
  );
}
