import { NextResponse } from 'next/server';
import { ai, SYSTEM_PROMPT } from '@/utils/gemini';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { goal } = body;

    if (!goal || typeof goal !== 'string') {
      return NextResponse.json(
        { error: 'Goal is required and must be a string.' },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Server misconfiguration: API key is missing.' },
        { status: 500 }
      );
    }

    // Call the Gemini API using the recommended text generation method
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            {
                role: 'user',
                parts: [{ text: `${SYSTEM_PROMPT}\n\nUser Goal: ${goal}` }]
            }
        ],
        config: {
            temperature: 0.7,
            maxOutputTokens: 2000,
        }
    });

    const outputText = response.text;
    
    if (!outputText) {
      throw new Error("No response generated from AI.");
    }

    return NextResponse.json({ result: outputText });

  } catch (error: any) {
    console.error("AI Generation Error:", error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate roadmap. Please try again.' },
      { status: 500 }
    );
  }
}
