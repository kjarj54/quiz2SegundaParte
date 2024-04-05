import { saveUser, getUsers } from "@/app/api/controller/dataController";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const user = await request.json();
  const userSaved = saveUser(user);
  return NextResponse.json({ userSaved });
}

export async function GET(request: Request ) {
  return NextResponse.json(getUsers());
}