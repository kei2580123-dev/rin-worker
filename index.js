export default {
  async fetch(request, env) {

    const prompt = "上品系ギャルAIとしてSNS投稿を1つ作って";

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + env.OPENAI_API_KEY
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "user", content: prompt }
        ]
      })
    });

    const data = await res.json();

    const text = data.choices?.[0]?.message?.content || "AIエラー";

    return new Response(text);
  }
};