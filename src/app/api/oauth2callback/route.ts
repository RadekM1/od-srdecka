import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

// Route for exchanging the authorization code for tokens
export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code"); // Používáme `searchParams` pro získání `code` z URL query

  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  try {
    const oauth2Client = new google.auth.OAuth2(
      process.env.client_id,
      process.env.client_secret,
      "http://localhost:3000/api/oauth2callback", // Redirect URI
    );

    // Výměna autorizačního kódu za access a refresh tokeny
    const { tokens } = await oauth2Client.getToken(code);

    // Logování tokenů pro ladění (můžeš je uložit do databáze nebo poslat na frontend)
    console.log("Access Token:", tokens.access_token);
    console.log("Refresh Token:", tokens.refresh_token);

    // Odeslání tokenů zpět na frontend
    return NextResponse.json(tokens, { status: 200 });
  } catch (error) {
    console.error("Chyba při získávání tokenu:", error);
    return NextResponse.json(
      { error: "Failed to get tokens" },
      { status: 500 },
    );
  }
}
