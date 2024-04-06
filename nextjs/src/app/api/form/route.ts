import { NextResponse, type NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = Object.fromEntries(await req.formData());
    console.log(data);
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ errors: error }, { status: 400 });
  }
}
