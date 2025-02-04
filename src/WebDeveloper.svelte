<script>
    import { createEventDispatcher } from 'svelte';
  
    const dispatch = createEventDispatcher();
  
    function goBack() {
      dispatch('back');
    }
  </script>
  
  <style>
    section {
      padding: 20px;
      background-color: #4caf50;
      color: white;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  
    h1 {
      font-family: 'Orbitron', sans-serif;
      font-size: 2rem;
      text-shadow: 0 0 10px #00e5ff;
      margin-bottom: 20px;
    }
  
    p {
      font-family: 'Roboto', sans-serif;
      font-size: 1.2rem;
      margin-bottom: 10px;
    }
  
    .icon {
      width: 100px;
      height: auto;
      margin-bottom: 20px;
    }
  
    .back-button {
      margin-top: 20px;
      padding: 10px 20px;
      font-family: 'Orbitron', sans-serif;
      font-size: 1rem;
      background-color: #00e5ff;
      color: #000;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }
  
    .back-button:hover {
      background-color: #007bb5;
      transform: scale(1.05);
    }
  
    /* Responsive styling */
    @media (max-width: 768px) {
      h1 {
        font-size: 1.5rem;
      }
  
      .icon {
        width: 80px;
      }
    }
  
    @media (max-width: 480px) {
      h1 {
        font-size: 1.2rem;
      }
  
      .icon {
        width: 60px;
      }
    }
  </style>
  
  <section>
    <img src="./icons/full-stack-developer-icon.png" alt="Web Developer Icon" class="icon" />
    <h1>Web Developer</h1>
    <p>Doświadczenie w tworzeniu nowoczesnych stron internetowych.</p>
    <p>Umiejętności: HTML, CSS, JavaScript, Svelte, GSAP</p>
    <p>Certyfikaty: Certyfikat full-stack dewelopera, kurs UX/UI designu</p>
    <p>Pracuję w tej roli od: 3 lat</p>
    <button class="back-button" on:click={goBack}>Wróć</button>
  </section>
  