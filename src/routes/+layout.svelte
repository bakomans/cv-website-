<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	let particlesJS: any;
	import LanguageSwitcher from '../LanguageSwitcher.svelte';
	import CareWorker from '../CareWorker.svelte';
	import WebDeveloper from '../WebDeveloper.svelte';
	import CareWorkerDetails from '../CareWorkerDetails.svelte';
	import WebDeveloperDetails from '../WebDeveloperDetails.svelte';
  
	let selectedSection = 'none';
	let language = 'en';
	let detailView = false;
  
	function switchSection(section) {
	  selectedSection = section;
	  detailView = true;
	}
  
	function switchLanguage() {
	  language = language === 'en' ? 'pl' : 'en';
	}
  
	function goBack() {
	  detailView = false;
	}
  
	onMount(async () => {
	  gsap.from(".split-screen", { opacity: 0, duration: 2, delay: 0.5 });
	  gsap.from(".welcome", { opacity: 0, y: -50, duration: 1, delay: 1 });
  
	  if (typeof window !== 'undefined') {
		particlesJS = await import('particles.js');
		particlesJS.particlesJS.load('particles-js', '/particles.json', () => {
		  console.log('particles.js loaded');
		});
	  }
	});
  </script>
  
  <style>
	@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&family=Roboto:wght@400&display=swap');
  
	body {
	  font-family: 'Roboto', sans-serif;
	  background: radial-gradient(circle, #020202, #000000);
	  color: #00e5ff;
	  overflow: hidden;
	  margin: 0;
	  padding: 0;
	}
  
	.particles-js {
	  position: absolute;
	  width: 100%;
	  height: 100%;
	  z-index: -1;
	}
  
	.language-switcher {
	  position: absolute;
	  top: 20px;
	  left: 20px;
	  z-index: 1;
	}
  
	.split-screen {
	  display: flex;
	  width: 100%;
	  height: 100vh;
	  position: relative;
	  justify-content: space-between;
	}
  
	.left, .right {
	  flex: 1;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  cursor: pointer;
	  transition: flex 0.5s ease;
	  text-align: center;
	  position: relative;
	  border: none; /* Ensure they are non-interactive */
	}
  
	.left {
	  background-color: #1a1a1a;
	  color: white;
	  clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
	}
  
	.right {
	  background-color: #4caf50;
	  color: white;
	  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
	}
  
	.left:hover, .right:hover {
	  flex: 2;
	}
  
	.welcome {
	  position: absolute;
	  top: 20%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	  text-align: center;
	  z-index: 1;
	  width: 90%;
	}
  
	h1 {
	  font-family: 'Orbitron', sans-serif;
	  font-size: 3rem;
	  text-shadow: 0 0 10px #00e5ff;
	}
  
	p {
	  font-family: 'Roboto', sans-serif;
	  font-size: 1.5rem;
	  color: #00e5ff;
	  margin: 10px 0;
	}
  
	.hidden {
	  display: none;
	}
  
	/* Media queries for responsiveness */
	@media (max-width: 1200px) {
	  h1 {
		font-size: 2.5rem;
	  }
  
	  p {
		font-size: 1.3rem;
	  }
	}
  
	@media (max-width: 768px) {
	  .split-screen {
		flex-direction: column;
		height: auto;
	  }
  
	  .left, .right {
		clip-path: none;
		flex: none;
		height: 50vh;
		width: 100%;
	  }
  
	  .left:hover, .right:hover {
		flex: none;
	  }
  
	  h1 {
		font-size: 2rem;
	  }
  
	  p {
		font-size: 1.2rem;
	  }
	}
  
	@media (max-width: 480px) {
	  .welcome {
		top: 10%;
		width: 90%;
	  }
  
	  h1 {
		font-size: 1.8rem;
	  }
  
	  p {
		font-size: 1rem;
	  }
	}
  </style>
  
  <main>
	<div id="particles-js" class="particles-js"></div>
	<div class="language-switcher">
	  <button on:click={switchLanguage}>
		{language === 'en' ? 'PL' : 'EN'}
	  </button>
	</div>
	{#if !detailView}
	  <div class="welcome">
		<h1>Tomasz Bachula</h1>
		{#if language === 'en'}
		  <p>Welcome to My CV page. Choose which skills interest you and explore my abilities by clicking on your choice.</p>
		{:else}
		  <p>Witaj na stronie Tomasza Bachuli. Wybierz, które umiejętności Cię interesują i zajrzyj do moich umiejętności klikając swój wybór.</p>
		{/if}
	  </div>
	  <div class="split-screen">
		<button class="left" on:click={() => switchSection('careWorker')} aria-label="Care Worker">
		  <h1>Care Worker</h1>
		</button>
		<button class="right" on:click={() => switchSection('webDeveloper')} aria-label="Web Developer">
		  <h1>Web Developer</h1>
		</button>
	  </div>
	{:else if selectedSection === 'careWorker'}
	  <CareWorkerDetails on:back={goBack} />
	{:else if selectedSection === 'webDeveloper'}
	  <WebDeveloperDetails on:back={goBack} />
	{/if}
  </main>
  