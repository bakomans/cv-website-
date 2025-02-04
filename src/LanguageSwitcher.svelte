<script>
    let language = 'en';
  
    function switchLanguage() {
      language = language === 'en' ? 'pl' : 'en';
      // Add logic to switch the language of the entire site
    }
  </script>
  
  <style>
    button {
      padding: 0.5rem 1rem;
      background: transparent;
      border: 2px solid #00e5ff;
      color: #00e5ff;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease, transform 0.3s ease;
    }
  
    button:hover {
      background: #00e5ff;
      color: #000;
      transform: scale(1.1);
    }
  </style>
  
  <button on:click={switchLanguage}>
    {language === 'en' ? 'PL' : 'EN'}
  </button>
  