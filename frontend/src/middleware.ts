import { NextResponse } from "next/server";

const publicRoutes = [
  { path: "/login", whenAuthenticated: "redirect" },
  { path: "/register", whenAuthenticated: "redirect" },
  { path: "/", whenAuthenticated: "next" },
];

const REDIRECT_WHEN_NOT_AUTHENTICADED_ROUTE = "/login";

export function middleware(request: any) {
  const requestPath = request.nextUrl.pathname;
  const PublicRoute = publicRoutes.find(route => route.path === requestPath);
  const authToken = request.cookies.get("glossaryUpToken")?.value;

  if (!authToken && PublicRoute) {
    return NextResponse.next();
  }

  if (!authToken && !PublicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICADED_ROUTE;

    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && PublicRoute && PublicRoute.whenAuthenticated === "redirect") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/dashboard";

    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && !PublicRoute) {
    // Check if JWT token isn't expired
    // If it is, redirect to login page
    return NextResponse.next();
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
