import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const story = await prismadb.story.findFirst({
    where: {
      userId,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  if (story) {
    redirect(`/${story.id}`);
  }

  return <>{children}</>;
}
