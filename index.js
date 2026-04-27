export default {
  async fetch(request, env) {

    return new Response("KEY: " + env.GEMINI_API_KEY);

  }
};