import { NextRequest, NextResponse } from "next/server";
import modules from "../../modules";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const pathModule = Object.entries(modules).find(
    ([_, { path }]) => path === pathname
  );

  if (pathModule) {
    return;
  }

  return NextResponse.redirect("http://localhost:3000/404");
}
