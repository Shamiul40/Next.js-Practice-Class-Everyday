import comments from "@/app/data/comments"
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  if (query) {
    const filteredComments = comments.filter((comment) =>
      comment.text.includes(query),
    );

    return NextResponse.json(filteredComments);
  }

  return NextResponse.json(comments);
};

export const POST = async (request) => {
  const id = comments.length + 1;

  const comment = await request.json();

  const newComments = {
    id,
    text: comment.text,
  };

  comments.push(newComments);
  console.log("comments and newcomments here", comment, newComments);

  return NextResponse.json(newComments, { status: 201 });
};