import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      fallback: 'index.html', // Use a fallback if necessary
      strict: false, // Ignore errors if you are sure you don't need the routes
    }),
    prerender: {
      enabled: true,
      entries: ['*'] // Include all routes for prerendering
    }
  }
};
