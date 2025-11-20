export default {
  async fetch(request, env) {
    const data = {
      message: 'This is a web service API.',
      timestamp: new Date().toISOString()
    };
    return new Response(JSON.stringify(data, null, 2), {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    });
  },
} satisfies ExportedHandler<Env>;
