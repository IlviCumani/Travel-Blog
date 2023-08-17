const introTitle = document.querySelector('.intro-title');
const safety = document.querySelector('#safety');
const paragraph = document.querySelector('#paragraph');
const question = document.querySelector('#question');
const middleA = document.querySelector('.middle-a');
const experience = document.querySelector('#experience');
const paragraph1 = document.querySelector('#paragraph1');
const viewP = document.querySelector('.view-p');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const p3 = document.querySelector('#p3');
const p4 = document.querySelector('#p4');


buttons.forEach(button =>{
  button.addEventListener('click', (event)=>{
    event.preventDefault();
    langMenu.querySelector('.active').classList.remove('active');
    button.classList.add('active');

    const attr = button.getAttribute('language');
  console.log(attr);
  if(attr == "german"){
    document.querySelector(".selected-langg").style.backgroundImage = "url('https://flagsapi.com/BE/flat/32.png')";
  }else if(attr=="italian"){
    document.querySelector(".selected-langg").style.backgroundImage = "url(https://flagsapi.com/IT/flat/32.png)";
  }else if(attr=="french"){
    document.querySelector(".selected-langg").style.backgroundImage = "url(https://flagsapi.com/FR/flat/32.png)";
  }else if(attr=="espanol"){
    document.querySelector(".selected-langg").style.backgroundImage = "url(https://flagsapi.com/ES/flat/32.png)";
  }else{
    document.querySelector(".selected-langg").style.backgroundImage = "url(https://flagsapi.com/US/flat/32.png)";
  }

  introTitle.textContent = ourWorkData[attr].introTitle;
  safety.textContent = ourWorkData[attr].safety;
  paragraph.textContent = ourWorkData[attr].paragraph;
  question.textContent = ourWorkData[attr].querySelector;
  middleA.textContent = ourWorkData[attr].middleA;
  experience.textContent = ourWorkData[attr].experience;
  paragraph1.textContent = ourWorkData[attr].paragraph1;
  viewP.textContent = ourWorkData[attr].viewP;
  p1.textContent = ourWorkData[attr].p1;
  p2.textContent = ourWorkData[attr].p2;
  p3.textContent = ourWorkData[attr].p3;
  p4.textContent = ourWorkData[attr].p4;
  });
})


const ourWorkData = {
  "english" :{
    "introTitle" : "Why choose TravAl?",
    "safety" : "Safety",
    "paragraph" : "Experience a safe trip, thanks to our rigorous maintenance and experienced drivers.",
    "question" : "Interested to find out more?",
    "middleA" : "Contact Us",
    "experience" : "Experience",
    "paragraph1" : "With over 20 years of experience, TravAl remains the most trusted company in the market.  ",
    "viewP" : "View a collection of our memorable trips",
    "p1" : "Memory from Trip to Berat <br> 28/03/2021",
    "p2" : " Memory from Trip to Shkodra <br> 01/06/2022",
    "p3" : "  Memory from Trip to Borshi <br> 28/03/2021",
    "p4" : "Memory from Trip to Kruje <br> 17/05/2020"
  },
  "german" :{
    "introTitle": "Warum TravAl wählen?",
    "safety": "Sicherheit",
    "paragraph": "Erleben Sie eine sichere Reise dank unserer strengen Wartung und erfahrenen Fahrer.",
    "question": "Interessiert, mehr zu erfahren?",
    "middleA": "Kontaktiere uns",
    "experience": "Erfahrung",
    "paragraph1": "Mit über 20 Jahren Erfahrung bleibt TravAl das vertrauenswürdigste Unternehmen auf dem Markt.",
    "viewP": "Sehen Sie sich eine Sammlung unserer unvergesslichen Reisen an",
    "p1": "Erinnerung an die Reise nach Berat <br> 28/03/2021",
    "p2": "Erinnerung an die Reise nach Shkodra <br> 01/06/2022",
    "p3": "Erinnerung an die Reise nach Borshi <br> 28/03/2021",
    "p4": "Erinnerung an die Reise nach Kruje <br> 17/05/2020"
  },
  "italian":{
    "introTitle": "Perché scegliere TravAl?",
    "safety": "Sicurezza",
    "paragraph": "Vivi un viaggio sicuro grazie alla nostra rigorosa manutenzione e agli autisti esperti.",
    "question": "Interessato a saperne di più?",
    "middleA": "Contattaci",
    "experience": "Esperienza",
    "paragraph1": "Con oltre 20 anni di esperienza, TravAl rimane l'azienda più affidabile sul mercato.",
    "viewP": "Guarda una collezione dei nostri viaggi memorabili",
    "p1": "Ricordo del viaggio a Berat <br> 28/03/2021",
    "p2": "Ricordo del viaggio a Shkodra <br> 01/06/2022",
    "p3": "Ricordo del viaggio a Borshi <br> 28/03/2021",
    "p4": "Ricordo del viaggio a Kruje <br> 17/05/2020"
  },
  "french": {
    "introTitle": "Pourquoi choisir TravAl ?",
    "safety": "Sécurité",
    "paragraph": "Vivez un voyage en toute sécurité grâce à notre entretien rigoureux et à nos conducteurs expérimentés.",
    "question": "Intéressé à en savoir plus ?",
    "middleA": "Contactez-nous",
    "experience": "Expérience",
    "paragraph1": "Avec plus de 20 ans d'expérience, TravAl reste la société la plus fiable du marché.",
    "viewP": "Découvrez une collection de nos voyages mémorables",
    "p1": "Souvenir du voyage à Berat <br> 28/03/2021",
    "p2": "Souvenir du voyage à Shkodra <br> 01/06/2022",
    "p3": "Souvenir du voyage à Borshi <br> 28/03/2021",
    "p4": "Souvenir du voyage à Kruje <br> 17/05/2020"
  },
  
  "espanol": {
    "introTitle": "¿Por qué elegir TravAl?",
    "safety": "Seguridad",
    "paragraph": "Experimenta un viaje seguro gracias a nuestro riguroso mantenimiento y a nuestros conductores experimentados.",
    "question": "¿Interesado en saber más?",
    "middleA": "Contáctanos",
    "experience": "Experiencia",
    "paragraph1": "Con más de 20 años de experiencia, TravAl sigue siendo la empresa más confiable en el mercado.",
    "viewP": "Mira una colección de nuestros viajes memorables",
    "p1": "Recuerdo del viaje a Berat <br> 28/03/2021",
    "p2": "Recuerdo del viaje a Shkodra <br> 01/06/2022",
    "p3": "Recuerdo del viaje a Borshi <br> 28/03/2021",
    "p4": "Recuerdo del viaje a Kruje <br> 17/05/2020"
  }
}