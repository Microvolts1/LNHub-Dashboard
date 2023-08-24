import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const story = await prismadb.story.create({
      data: {
        name,
        userId,
      },
    });

    return NextResponse.json(story);
  } catch (error) {
    console.log("[STORIES_POST]: ", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
