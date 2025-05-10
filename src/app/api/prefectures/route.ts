import { PrefectureResponse } from "@/types/prefecture";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://yumemi-frontend-engineer-codecheck-api.vercel.app/api/v1";
    const apiKey = process.env.NEXT_PUBLIC_API_KEY || "";

    const response = await fetch(`${apiUrl}/prefectures`, {
      headers: {
        "accept": "application/json",
        "X-API-KEY": apiKey
      }
    });
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    const data: PrefectureResponse = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Cannot fetch prefecture data:', error);

    return NextResponse.json(
      { message: "Cannot fetch prefecture data" },
      { status: 500 }
    );
  }
}
