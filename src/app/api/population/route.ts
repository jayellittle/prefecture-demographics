import { PopulationResponse } from "@/types/population";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const prefCode = searchParams.get("prefCode");
  if (!prefCode) {
    return NextResponse.json(
      { message: "Prefecture code required" },
      { status: 400 }
    );
  }

  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://yumemi-frontend-engineer-codecheck-api.vercel.app/api/v1";
    const apiKey = process.env.NEXT_PUBLIC_API_KEY || ""

    const response = await fetch(
      `${apiUrl}/population/composition/perYear?prefCode=${prefCode}`,
      {
        headers: {
          "accept": "application/json",
          "X-API-KEY": apiKey
        }
      }
    );
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    const data: PopulationResponse = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Cannot fetch population data:', error);
    return NextResponse.json(
      { message: "Cannot fetch population data" },
      { status: 500 }
    );
  }
}
