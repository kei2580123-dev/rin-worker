export default {
  async fetch(request, env) {

    try {
      const result = await env.AI.run(
        "@cf/meta/llama-3-8b-instruct",
        {
          prompt: "テスト"
        }
      );

      return new Response(JSON.stringify(result));

    } catch (e) {
      return new Response("ERROR: " + e.message);
    }
  }
};