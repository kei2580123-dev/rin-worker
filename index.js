export default {
  async fetch(request, env) {

    const response = await env.AI.run(
      "@cf/meta/llama-3-8b-instruct",
      {
        prompt: "上品系ギャルAIとしてSNS投稿を1つ作って"
      }
    );

    return new Response(response.response || response);
  }
};