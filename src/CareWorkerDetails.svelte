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
      background-color: #1a1a1a;
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
    <img src="/icons/care-worker-icon.svg" alt="Care Worker Icon" class="icon" />
    <h1>Care Worker</h1>
  
    <p><strong>Tomasz Bachula</strong><br>
    Ross-on-Wye, Herefordshire<br>
    Tel: 07463667443 | Email: <a href="mailto:bakomans@gmail.com">bakomans@gmail.com</a></p>
  
    <h2>Professional Summary</h2>
    <p>Compassionate and dedicated Care Worker with extensive experience in providing high-quality support to individuals with diverse needs. Skilled in handling complex care situations, promoting dignity, and ensuring the well-being of clients. Adept at working with individuals with mental health challenges, learning disabilities, and physical impairments. Passionate about delivering person-centered care and maintaining professional boundaries to create a safe and supportive environment.</p>
  
    <h2>Key Skills & Competencies</h2>
    <ul>
      <li>Person-centered care and support</li>
      <li>Mental health and learning disability support</li>
      <li>Medication administration</li>
      <li>Moving and handling</li>
      <li>Safeguarding and duty of candour</li>
      <li>Infection prevention and control</li>
      <li>End-of-life care</li>
      <li>Autism and epilepsy awareness</li>
      <li>Professional boundaries and ethical care</li>
      <li>Effective communication, including Makaton sign language</li>
      <li>Risk assessment and crisis intervention</li>
      <li>Team collaboration and independent decision-making</li>
    </ul>
  
    <h2>Professional Experience</h2>
    <h3>Support Worker</h3>
    <p>Chepstow House, Ross-on-Wye<br>
    April 2021 – Present</p>
    <ul>
      <li>Provided personalized care and support to individuals with learning disabilities, mental health conditions, and physical impairments.</li>
      <li>Assisted with daily living activities, including personal hygiene, meal preparation, and medication administration.</li>
      <li>Implemented behavior management strategies to ensure a safe and supportive environment.</li>
      <li>Utilized Makaton sign language for effective communication with non-verbal clients.</li>
      <li>Promoted independence and dignity while ensuring person-centered care.</li>
      <li>Conducted risk assessments and handled emergency situations efficiently.</li>
      <li>Collaborated with healthcare professionals, families, and multidisciplinary teams to enhance client well-being.</li>
    </ul>
  
    <h2>Certifications & Training</h2>
    <ul>
      <li>Substance Misuse Prevention</li>
      <li>Oral Health Awareness</li>
      <li>Mental Health Support</li>
      <li>Learning Disability Awareness</li>
      <li>Duty of Candour</li>
      <li>Acquired Brain Injury Care</li>
      <li>Dysphagia Management</li>
      <li>Personality Disorder Support</li>
      <li>Professional Boundaries in Care</li>
      <li>Sepsis Awareness</li>
      <li>Sexuality & Relationships in Learning Disabilities</li>
      <li>Allergen Awareness in Care</li>
      <li>Medication Management</li>
      <li>Autism Awareness</li>
      <li>End-of-Life Care</li>
      <li>Epilepsy Awareness & Support</li>
      <li>Infection Prevention & Control</li>
      <li>Legionella Awareness</li>
      <li>MCA & DoLS (Mental Capacity Act & Deprivation of Liberty Safeguards)</li>
      <li>Moving and Handling Training</li>
      <li>Safeguarding Adults & Children</li>
      <li>Care Certificate</li>
      <li>Food Safety Awareness</li>
      <li>NAPPI Training (Non-Abusive Psychological & Physical Intervention)</li>
      <li>Basic Makaton Sign Language</li>
    </ul>
  
    <h2>Education & Additional Training</h2>
    <ul>
      <li>Ongoing professional development through continuous training at Chepstow House, Ross-on-Wye</li>
      <li>Regular attendance at safeguarding and care-related workshops</li>
    </ul>
  
    <h2>Languages</h2>
    <ul>
      <li>English (Fluent)</li>
      <li>Polish (Fluent)</li>
    </ul>
  
    <h2>References</h2>
    <p>Available upon request.</p>
  
    <button class="back-button" on:click={goBack}>Back</button>
  </section>
  