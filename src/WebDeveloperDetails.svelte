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
      font-size: 2.5rem;
      text-shadow: 0 0 10px #00e5ff;
      margin-bottom: 20px;
    }
  
    h2, h3 {
      font-family: 'Orbitron', sans-serif;
      font-size: 1.8rem;
      color: #00e5ff;
      text-shadow: 0 0 5px #00e5ff;
      margin-top: 20px;
      margin-bottom: 10px;
    }
  
    p, ul {
      font-family: 'Roboto', sans-serif;
      font-size: 1.2rem;
      margin-bottom: 10px;
      text-align: left;
      max-width: 800px;
      line-height: 1.5;
    }
  
    a {
      color: #00e5ff;
      text-decoration: none;
    }
  
    a:hover {
      text-decoration: underline;
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
      font-size: 1.2rem;
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
        font-size: 2rem;
      }
  
      h2, h3 {
        font-size: 1.5rem;
      }
  
      .icon {
        width: 80px;
      }
  
      p, ul {
        font-size: 1rem;
      }
    }
  
    @media (max-width: 480px) {
      h1 {
        font-size: 1.5rem;
      }
  
      h2, h3 {
        font-size: 1.2rem;
      }
  
      .icon {
        width: 60px;
      }
  
      p, ul {
        font-size: 0.9rem;
      }
    }
  </style>
  
  <section>
    <img src="/icons/web-developer-icon.svg" alt="Web Developer Icon" class="icon" />
    <h1>Web Developer</h1>
  
    <p><strong>Tomasz Bachula</strong><br>
    Ross-on-Wye, Herefordshire<br>
    Tel: 07463667443 | Email: <a href="mailto:bakomans@gmail.com">bakomans@gmail.com</a><br>
    LinkedIn: <a href="https://www.linkedin.com/in/tomasz-bachula-2530871a6">Tomasz Bachula</a><br>
    GitHub: <a href="https://github.com/bakomans">bakomans</a><br>
    Portfolio: <a href="https://tomaszportfolio.netlify.app/">Tomasz's Portfolio</a></p>
  
    <h2>Professional Summary</h2>
    <p>Highly motivated and detail-oriented Web Developer with proven experience in designing and implementing innovative and functional web applications. Skilled at collaborating in dynamic teams to enhance user experiences and deliver impactful results. Adept at utilizing cutting-edge technologies to meet business objectives and exceed client expectations.</p>
  
    <h2>Technical Skills</h2>
    <ul>
      <li><strong>Frontend Technologies:</strong> HTML5, CSS3, JavaScript, React, Bootstrap, Tailwind CSS</li>
      <li><strong>Backend Technologies:</strong> Node.js, Python, Django, Express</li>
      <li><strong>Database Management:</strong> MongoDB, MySQL, Firebase</li>
      <li><strong>Development Tools:</strong> WordPress, API integration, responsive design, UX design, Git</li>
      <li><strong>Additional Skills:</strong> AOS, Handlebars.js, Day.js</li>
    </ul>
  
    <h2>Professional Experience</h2>
    <h3>Web Developer</h3>
    <p>Digital Marketing Academy<br>
    June 2024 - Present</p>
    <ul>
      <li>Led the development of responsive and visually appealing websites, increasing user retention by 25%.</li>
      <li>Collaborated in a cross-functional team to deliver high-quality digital marketing solutions.</li>
      <li>Optimized web applications for SEO, performance, and accessibility using best practices.</li>
      <li>Developed expertise in WordPress and custom API integrations.</li>
    </ul>
  
    <h3>ICT Technician (Level 3)</h3>
    <p>Stok.ly<br>
    January 2022 - July 2022</p>
    <ul>
      <li>Resolved complex hardware, software, and network issues, maintaining a 98% resolution rate.</li>
      <li>Enhanced IT infrastructure, improving system performance by 20%.</li>
      <li>Implemented and managed advanced inventory management modules.</li>
      <li>Strengthened data security protocols, ensuring sensitive information protection.</li>
    </ul>
  
    <h2>Key Projects</h2>
    <h3>Foodie-Mate</h3>
    <p><a href="https://github.com/bakomans/restaurant-explorer-By-Group-8">GitHub Repo</a> | <a href="https://bakomans.github.io/restaurant-explorer-By-Group-8/">Live Application</a></p>
    <ul>
      <li>Developed a user-friendly platform for restaurant discovery and sharing.</li>
      <li>Integrated APIs for enhanced map functionalities and seamless user experience.</li>
      <li>Tested, debugged, and optimized the application for scalability.</li>
      <li><strong>Technologies:</strong> HTML, CSS, Bootstrap, jQuery, JavaScript, API</li>
    </ul>
  
    <h3>Work Day Scheduler</h3>
    <p><a href="https://github.com/bakomans/Dynamic-Calendar-is-amazing">GitHub Repo</a> | <a href="https://bakomans.github.io/Dynamic-Calendar-is-amazing/">Live Application</a></p>
    <ul>
      <li>Designed a dynamic calendar application to manage daily schedules and meetings.</li>
      <li>Solely responsible for end-to-end development and deployment.</li>
      <li><strong>Technologies:</strong> HTML, CSS, Bootstrap, JavaScript, Day.js</li>
    </ul>
  
    <h3>CG-iStudio</h3>
    <p><a href="https://github.com/bakomans/cgistudio">GitHub Repo</a> | <a href="https://cg-istudio.netlify.app">Live Application</a></p>
    <ul>
      <li>Created a modern web application for showcasing creative projects.</li>
      <li>Managed both frontend and backend development, including Firebase integration.</li>
      <li><strong>Technologies:</strong> HTML, React, JavaScript, Tailwind CSS, Node.js, Firebase, AOS</li>
    </ul>
  
    <h2>Education</h2>
    <ul>
      <li><strong>Full Stack Web Development Boot Camp Certificate</strong><br>
      University of Manchester<br>
      Comprehensive curriculum covering: HTML5, CSS3, JavaScript, jQuery, Bootstrap, Firebase, Node.js, Express, Handlebars.js, ReactJS</li>
      <li><strong>FreeCodeCamp</strong><br>
      Certificate in Responsive Web Development covering HTML5, CSS3, JavaScript</li>
      <li><strong>IT Career Switch Course</strong><br>
      Microsoft MTA Certification. Key technologies: HTML, CSS3, Python, JavaScript, Bootstrap, ReactJS, Node.js</li>
    </ul>
  
    <h2>Additional Skills and Strengths</h2>
    <ul>
      <li>Exceptional communication, organizational, and problem-solving skills</li>
      <li>Advanced proficiency in English (C1 level)</li>
      <li>Proven ability to thrive in fast-paced, collaborative environments</li>
    </ul>
  
    <h2>References</h2>
    <p>Available upon request.</p>
  
    <button class="back-button" on:click={goBack}>Back</button>
  </section>
  