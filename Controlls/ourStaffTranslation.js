const StaffTitleP = document.querySelector('#StaffTitleP');
const meetAndGreet = document.querySelector('#meetAndGreet');
const travelConsultant = document.querySelectorAll('.tc');
const travelCoordinator = document.querySelector('#coordinator');
const travelGuide = document.querySelector('#guide');
const travelBooker = document.querySelector('#booker');
const travelManager = document.querySelector('#manager');
const info = document.querySelectorAll('.info');


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
  StaffTitleP.textContent = ourStaffData[attr].StaffTitleP;
  meetAndGreet.textContent = ourStaffData[attr].meetAndGreet;
  travelConsultant.forEach(tv=>{
    tv.textContent = ourStaffData[attr].travelConsultant;
  })
  travelCoordinator.textContent = ourStaffData[attr].travelCoordinator;
  travelGuide.textContent = ourStaffData[attr].travelGuide;
  travelBooker.textContent = ourStaffData[attr].travelBooker;
  travelManager.textContent = ourStaffData[attr].travelManager;
  info.forEach(i=>{
    i.textContent = ourStaffData[attr].info;
  })
  });

});
const ourStaffData = {
  "english" :{
    "StaffTitleP": "Our Staff",
    "meetAndGreet": "Meet The Team",
    "travelConsultant": "Travel Consultant",
    "travelCoordinator" : "Travel Coordinator",
    "travelGuide" : "Tour Guide",
    "travelBooker" : "Booker",
    "travelManager" : "Tour manager",
    "info" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    
  },
  "german" :{
    "StaffTitleP": "Unser Personal",
    "meetAndGreet": "Team Treffen",
    "travelConsultant": "Reiseberater",
    "travelCoordinator": "Reisekoordinator",
    "travelGuide": "Reiseleiter",
    "travelBooker": "Buchungsbeauftragter",
    "travelManager": "Tourmanager",
    "info": "Lorem Ipsum ist einfach nur Blindtext der Druck- und Satzindustrie.",
  },
  "italian":{
    "StaffTitleP": "Il Nostro Staff",
    "meetAndGreet": "Incontra il Team",
    "travelConsultant": "Consulente di Viaggio",
    "travelCoordinator": "Coordinatore di Viaggio",
    "travelGuide": "Guida Turistica",
    "travelBooker": "Prenotatore",
    "travelManager": "Responsabile del Tour",
    "info": "Lorem Ipsum è un testo segnaposto utilizzato nel settore della stampa e della tipografia."
  },
  "french": {
    "StaffTitleP": "Notre Équipe",
    "meetAndGreet": "Rencontrez l'Équipe",
    "travelConsultant": "Conseiller en Voyage",
    "travelCoordinator": "Coordinateur de Voyage",
    "travelGuide": "Guide Touristique",
    "travelBooker": "Agent de Réservation",
    "travelManager": "Responsable de Circuit",
    "info": "Lorem Ipsum est simplement un texte factice de l'industrie de l'imprimerie et de la composition."
  },
  
  "espanol": {
    "StaffTitleP": "Nuestro Equipo",
    "meetAndGreet": "Conoce al Equipo",
    "travelConsultant": "Consultor de Viajes",
    "travelCoordinator": "Coordinador de Viajes",
    "travelGuide": "Guía Turístico",
    "travelBooker": "Reservador",
    "travelManager": "Gerente de Tours",
    "info": "Lorem Ipsum es simplemente el texto de relleno de la industria de la impresión y composición tipográfica."
  }
}