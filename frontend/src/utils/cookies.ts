export const TOKEN_COOKIE_NAME = "glossaryUpToken";

export const cookieUtils = {
  setAuthToken(token: string): void {
    document.cookie = `${TOKEN_COOKIE_NAME}=${token}; path=/; secure; samesite=strict`;
  },

  getAuthToken(): string | null {
    if (typeof document === "undefined")
      return null;

    const cookies = document.cookie.split(";");
    const tokenCookie = cookies.find(cookie =>
      cookie.trim().startsWith(`${TOKEN_COOKIE_NAME}=`),
    );

    return tokenCookie ? tokenCookie.split("=")[1] : null;
  },

  removeAuthToken(): void {
    document.cookie = `${TOKEN_COOKIE_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  },
};
