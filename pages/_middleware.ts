import { NextRequest, NextResponse } from "next/server";
import modules from "../modules";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  for (const [name, config] of Object.entries(modules.config)) {
    if (config.path === pathname) {
      const url = new URL(`/medlify/${name}`, req.nextUrl.origin);

      return NextResponse.rewrite(url);
    }

    if ("productsPath" in config && pathname.startsWith(config.productsPath)) {
      const slug = req.nextUrl.pathname.replace("/products/", "");
      const url = new URL(
        `/medlify/store/products/${slug}`,
        req.nextUrl.origin
      );

      return NextResponse.rewrite(url);
    }
  }

  return;
}
