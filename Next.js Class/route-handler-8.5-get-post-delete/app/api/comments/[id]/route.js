import comments from "@/app/data/comments";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const commentId = params.id;

  if (parseInt(commentId) > comments.length) {
    return NextResponse.redirect(new URL('/api/comments', request.url));
  }

  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId),
  );

  return NextResponse.json(comment);
};

export const PATCH = async (request, { params }) => {
  const comment = await request.json();
  const id = params.id;
  console.log("comment", comment);
  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(id),
  );

  console.log("comment index ", commentIndex);

  comments[commentIndex].text = comment.text;

  return NextResponse.json(comments[commentIndex]);
};

export const DELETE = async (request, { params }) => {
  const id = params.id;

  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(id),
  );

  const commentToDelete = comments[commentIndex];

  comments.splice(commentIndex, 1);

  return NextResponse.json(commentToDelete);
};