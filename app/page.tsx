import Image from "next/image";
import LessonsSection from "./lessons/components/LessonsSection";
import EmailDisplay from "./components/EmailDisplay";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <EmailDisplay email={process.env.NEXT_PUBLIC_EMAIL_ADDRESS || ""} />
      <LessonsSection />
    </main>
  );
}
