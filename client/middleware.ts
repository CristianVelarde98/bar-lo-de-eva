import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

async function middleware(request: NextRequest) {
  const token = request.cookies.get('Auth');
  if (
    (!token || !token.value) &&
    request.nextUrl.pathname.startsWith('/dashboard')
  ) {
    return NextResponse.rewrite(new URL('/login', request.url));
  }
  if (token && token.value) {
    const verifyUser = await fetch(
      'http://localhost:3100/api/v2/auth/verify-token',
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          token: token.value,
        }),
      }
    );
    const toJson = await verifyUser.json();
    const { authenticated } = toJson;
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
      if (!authenticated)
        return NextResponse.rewrite(new URL('/login', request.url));
    }
    if (request.nextUrl.pathname.startsWith('/login')) {
      if (authenticated) {
        return NextResponse.rewrite(new URL('/dashboard', request.url));
      }
    }
  }
  return NextResponse.next();
}

export default middleware;
