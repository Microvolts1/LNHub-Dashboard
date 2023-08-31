import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { storyId: string } }
) {
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

    if (!params.storyId) {
      return new NextResponse("Story Id is required", { status: 400 });
    }

    const story = await prismadb.story.updateMany({
      where: {
        id: params.storyId,
        userId,
      },
      data: {
        name,
      },
    });

    return NextResponse.json(story);
  } catch (error) {
    console.log("[STORY_PATCH]: ", error);
    return new NextResponse("Internal Error!", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { storyId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!params.storyId) {
      return new NextResponse("Story Id is required", { status: 400 });
    }

    const story = await prismadb.story.deleteMany({
      where: {
        id: params.storyId,
        userId,
      },
    });

    return NextResponse.json(story);
  } catch (error) {
    console.log("[STORY_DELETE]: ", error);
    return new NextResponse("Internal Error!", { status: 500 });
  }
}