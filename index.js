export default {
  async fetch(request, env) {

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + env.OPENAI_API_KEY
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "user", content: "テストだよ" }
        ]
      })
    });

    const data = await res.json();

    return new Response(JSON.stringify(data, null, 2));
  }
};