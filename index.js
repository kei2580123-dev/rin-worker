export default {
  async fetch(request, env) {

    const result = await env.AI.run(
      "@cf/meta/llama-3-8b-instruct",
      {
        prompt: "こんにちはってギャル風に言って"
      }
    );

    return new Response(result.response);
  }
};