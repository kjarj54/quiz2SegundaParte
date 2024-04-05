
import { NextResponse } from "next/server";
import { deleteUser, getUser } from "@/app/api/controller/dataController";

export async function GET(request: Request, context: any) {
  const { params } = context;
  return NextResponse.json(getUser(parseInt(params.id)));
}

export async function DELETE(request: Request, context: any) {
  const { params } = context;
  return NextResponse.json(deleteUser(parseInt(params.id)));
}
