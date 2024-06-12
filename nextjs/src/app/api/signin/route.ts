import { NextResponse, type NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const authorization = req.headers.get('authorization');

  if (!authorization?.startsWith('Basic ') || typeof searchParams.get('signout') === 'string') {
    return new NextResponse(null, {
      headers: { 'WWW-Authenticate': 'Basic realm="User Visible Realm", charset="UTF-8"' },
      status: 401,
    });
  }

  const credentials = atob(authorization.slice(6)).split(':');
  if (credentials.length !== 2) {
    return new NextResponse(null, {
      headers: { 'WWW-Authenticate': 'Basic realm="User Visible Realm", charset="UTF-8"' },
      status: 400,
    });
  }
  const [username, password] = credentials;

  return new NextResponse(new URLSearchParams({ username, password }));
}
