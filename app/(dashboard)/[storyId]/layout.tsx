import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import Navbar from "@/components/navbar";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storyId: string };
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const story = await prismadb.story.findFirst({
    where: {
      id: params.storyId,
      userId,
    },
  });

  if (!story) {
    redirect("/");
  }

  return (
    <>
      <div>
        <Navbar/>
        {children}
      </div>
    </>
  );
}
