import { start } from 'svelte';

import App from '../src/routes/+layout.svelte';

const app = new App({
  target: document.getElementById('app'),
});

export default app;
