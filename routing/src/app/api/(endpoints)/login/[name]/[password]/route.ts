import { NextResponse } from "next/server";
import { getUserByNamePassword } from "@/app/api/controller/dataController";

export async function GET(request: Request, context: any) {
  const { params } = context;
  return NextResponse.json(getUserByNamePassword(params.name, params.password));
}