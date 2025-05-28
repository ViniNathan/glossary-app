import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

import { authService } from "./services/auth";

const publicRoutes = [
  { path: "/login", whenAuthenticated: "redirect" },
  { path: "/register", whenAuthenticated: "redirect" },
  { path: "/", whenAuthenticated: "next" },
];

const REDIRECT_WHEN_NOT_AUTHENTICADED_ROUTE = "/login";

export async function middleware(request: NextRequest) {
  const requestPath = request.nextUrl.pathname;
  const PublicRoute = publicRoutes.find(route => route.path === requestPath);
  const authToken = request.cookies.get("glossaryUpToken")?.value;

  // Se não tem token e é uma rota pública, permite acesso
  if (!authToken && PublicRoute) {
    return NextResponse.next();
  }

  // Se não tem token e não é uma rota pública, redireciona para login
  if (!authToken && !PublicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICADED_ROUTE;
    return NextResponse.redirect(redirectUrl);
  }

  // Se tem token, valida o token com o backend
  if (authToken) {
    try {
      const tokenValidation = await authService.validateToken(authToken);
      // Se o token é inválido
      if (!tokenValidation.valid) {
        // Remove o cookie inválido
        const response = NextResponse.redirect(new URL(REDIRECT_WHEN_NOT_AUTHENTICADED_ROUTE, request.url));
        response.cookies.delete("glossaryUpToken");
        return response;
      }
      // Se tem token válido e está em rota pública que deve redirecionar quando autenticado
      if (PublicRoute && PublicRoute.whenAuthenticated === "redirect") {
        const redirectUrl = request.nextUrl.clone();
        redirectUrl.pathname = "/dashboard";
        return NextResponse.redirect(redirectUrl);
      }
      // Token válido, permite acesso
      return NextResponse.next();
    }
    catch (error) {
      // Em caso de erro na validação, trata como token inválido
      const response = NextResponse.redirect(new URL(REDIRECT_WHEN_NOT_AUTHENTICADED_ROUTE, request.url));
      response.cookies.delete("glossaryUpToken");
      return response;
    }
  }

  // Fallback - não deveria chegar aqui, mas redireciona para login por segurança
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICADED_ROUTE;
  return NextResponse.redirect(redirectUrl);
}

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
