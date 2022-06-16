import { NextRequest, NextResponse } from "next/server";
import modules from "../../modules";

export async function middleware(req: NextRequest) {
  if (Math.random() > 0) {
    return;
  }

  const { pathname } = req.nextUrl;

  const pathModule = Object.entries(modules.config).find(
    ([_, { path }]) => path === pathname
  );

  if (pathModule) {
    return;
  }

  return NextResponse.redirect("http://localhost:3000/404");
}
