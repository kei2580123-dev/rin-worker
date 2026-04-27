export default {
  async fetch(request, env) {

    const prompt = "上品系ギャルAIとしてSNS投稿を1つ作って";

    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + env.GEMINI_API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }]
            }
          ]
        })
      }
    );

    const data = await res.json();

    if (!res.ok) {
      return new Response(JSON.stringify(data, null, 2), {
        headers: { "Content-Type": "application/json" }
      });
    }

    const text =
      data.candidates?.[0]?.content?.parts?.[0]?.text || "AIエラー";

    return new Response(text);
  }
};