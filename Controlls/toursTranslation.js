const filter = document.querySelector('#filter');
const filterLabel = document.querySelector('#filterLabel');
const numOfDays = document.querySelector('#numOfDays');
const maxPrice = document.querySelector('#maxPrice');
const numDayss = document.querySelector('#numDays');
const slide = document.querySelector('#slide');
const selectt = document.querySelector('#select');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const option5 = document.querySelector('#option5');
const option6 = document.querySelector('#option6');
const dhermi = document.querySelector('#dhermi');
const fiveDays = document.querySelectorAll('.five');
const tapMore = document.querySelectorAll('.tap-more');
const ksamil = document.querySelector('#ksamil');
const borsh = document.querySelector('#borsh');
const threeDays = document.querySelector('.three');
const gjipe = document.querySelector('#gjipe');
const twoDays = document.querySelector('.two');
const rana = document.querySelector('#rana');
const oneDay = document.querySelectorAll('.one');
const Jale = document.querySelector('#Jale');
const Livadhi = document.querySelector('#Livadhi');
const fourDays = document.querySelector('.four');
const zvernec = document.querySelector('#zvernec');
const saranda = document.querySelector('#saranda');
const dhermiTour = document.querySelector('#dhermiTour');
const ksamilTour = document.querySelector('#ksamilTour');
const borshTour = document.querySelector('#borshTour');
const gjipeTour = document.querySelector('#gjipeTour');
const ranaTour = document.querySelector('#ranaTour');
const jaleTour = document.querySelector('#jaleTour');
const livadhiTour = document.querySelector('#livadhiTour');
const zvernecTour = document.querySelector('#zvernecTour');
const sarandaTour = document.querySelector('#sarandaTour');
const main = document.querySelector('#main-p');
const browse = document.querySelector('#browse-p');


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

  filter.textContent = toursData[attr].filter;
  filterLabel.textContent = toursData[attr].filterLabel;
  numOfDays.textContent = toursData[attr].numOfDays;
  maxPrice.textContent = toursData[attr].maxPrice;
  numDayss.textContent = toursData[attr].numDayss;
  slide.textContent = toursData[attr].slide;
  selectt.textContent = toursData[attr].selectt;
  option1.textContent = toursData[attr].option1;
  option2.textContent = toursData[attr].option2;
  option3.textContent = toursData[attr].option3;
  option4.textContent = toursData[attr].option4;
  option5.textContent = toursData[attr].option5;
  option6.textContent = toursData[attr].option6;
  dhermi.textContent = toursData[attr].dhermi;
  fiveDays.textContent = toursData[attr].fiveDays;
  tapMore.forEach(more =>{
    more.textContent = toursData[attr].tapMore;
  });
  ksamil.textContent = toursData[attr].ksamil;
  borsh.textContent = toursData[attr].borsh;
  threeDays.textContent = toursData[attr].threeDays;
  gjipe.textContent = toursData[attr].gjipe;
  twoDays.textContent = toursData[attr].twoDays;
  rana.textContent = toursData[attr].rana;
  oneDay.textContent = toursData[attr].oneDay;
  Jale.textContent = toursData[attr].Jale;
  Livadhi.textContent = toursData[attr].Livadhi;
  fourDays.textContent = toursData[attr].fourDays;
  zvernec.textContent = toursData[attr].zvernec;
  saranda.textContent = toursData[attr].saranda;
  dhermiTour.textContent = toursData[attr].dhermiTour;
  ksamilTour.textContent = toursData[attr].ksamilTour;
  borshTour.textContent = toursData[attr].borshTour;
  gjipeTour.textContent = toursData[attr].gjipeTour;
  ranaTour.textContent = toursData[attr].ranaTour;
  jaleTour.textContent = toursData[attr].jaleTour;
  livadhiTour.textContent = toursData[attr].livadhiTour;
  zvernecTour.textContent = toursData[attr].zvernecTour;
  sarandaTour.textContent = toursData[attr].sarandaTour;
  main.textContent = toursData[attr].main;
  browse.textContent = toursData[attr].browse;
  });
})


const toursData = {
  "english" :{
    "filter" : "Filter by :",
    "filterLabel" : "Price",
    "numOfDays" : "Number of days",
    "maxPrice" : "Max price: -- ",
    "numDayss" : "Num of days: --",
    "slide" : "Slide or input the maximum price:",
    "selectt" : "Select the number of days: ",
    "option1" : "1 day",
    "option2" : "2 days",
    "option3" : "3 days",
    "option4" : "4 days",
    "option5" : "5 days",
    "option6" : "6 days",
    "dhermi" : "Dhermi Paradise",
    "fiveDays" : "5 day tours",
    "tapMore" : "Tap for more",
    "ksamil" : "Postcard from Ksamil",
    "borsh" : "Borsh Paradise",
    "threeDays" : "3 day tours",
    "gjipe" : "Gjipe Paradise",
    "twoDays" : "2 day tours",
    "rana" : "Visit Rana e Hedhur",
    "oneDay" : "1 day tours",
    "Jale" : "Postcard from Jale",
    "Livadhi" : "Visit Livadhi Beach",
    "fourDays" : "4 day tours",
    "zvernec" : "Take a tour in Zvernec",
    "saranda" : "Get lost in Saranda",
    "dhermiTour" : "Dhermi Tour",
    "ksamilTour" : "Ksamil Tour",
    "borshTour" : "Borsh Tour",
    "gjipeTour" : "Gjipe Tour",
    "ranaTour" : "Rana e Hedhur Tour",
    "jaleTour" : "Jale Tour",
    "livadhiTour" : "Livadhi Tour",
    "zvernecTour" : "Zvernec Tour",
    "sarandaTour" : "Saranda Tour",
    "main" : "Spend an unforgettable summer with TravAl!",
    "browse" : "Browse the collection of tours that we offer"
  },
  "german": {
    "filter": "Filtern nach:",
    "filterLabel": "Preis",
    "numOfDays": "Anzahl der Tage",
    "maxPrice": "Maximaler Preis: --",
    "numDayss": "Anzahl der Tage: --",
    "slide": "Schieben oder geben Sie den maximalen Preis ein:",
    "selectt": "Wählen Sie die Anzahl der Tage:",
    "option1": "1 Tag",
    "option2": "2 Tage",
    "option3": "3 Tage",
    "option4": "4 Tage",
    "option5": "5 Tage",
    "option6": "6 Tage",
    "dhermi": "Dhermi Paradies",
    "fiveDays": "5-Tage-Touren",
    "tapMore": "Tippen Sie für mehr",
    "ksamil": "Postkarte aus Ksamil",
    "borsh": "Borsh Paradies",
    "threeDays": "3-Tage-Touren",
    "gjipe": "Gjipe Paradies",
    "twoDays": "2-Tage-Touren",
    "rana": "Besuchen Sie Rana e Hedhur",
    "oneDay": "1-Tage-Touren",
    "Jale": "Postkarte aus Jale",
    "Livadhi": "Besuchen Sie den Livadhi-Strand",
    "fourDays": "4-Tage-Touren",
    "zvernec": "Unternehmen Sie eine Tour in Zvernec",
    "saranda": "Verlieren Sie sich in Saranda",
    "dhermiTour": "Dhermi Tour",
    "ksamilTour": "Ksamil Tour",
    "borshTour": "Borsh Tour",
    "gjipeTour": "Gjipe Tour",
    "ranaTour": "Rana e Hedhur Tour",
    "jaleTour": "Jale Tour",
    "livadhiTour": "Livadhi Tour",
    "zvernecTour": "Zvernec Tour",
    "sarandaTour": "Saranda Tour",
    "main": "Verbringen Sie einen unvergesslichen Sommer mit TravAl!",
    "browse": "Durchstöbern Sie die Sammlung von Touren, die wir anbieten"
  },
  "italian":{
    "filter": "Filtra per:",
    "filterLabel": "Prezzo",
    "numOfDays": "Numero di giorni",
    "maxPrice": "Prezzo massimo: --",
    "numDayss": "Numero di giorni: --",
    "slide": "Scorri o inserisci il prezzo massimo:",
    "selectt": "Seleziona il numero di giorni:",
    "option1": "1 giorno",
    "option2": "2 giorni",
    "option3": "3 giorni",
    "option4": "4 giorni",
    "option5": "5 giorni",
    "option6": "6 giorni",
    "dhermi": "Paradiso di Dhermi",
    "fiveDays": "Tour di 5 giorni",
    "tapMore": "Tocca per ulteriori dettagli",
    "ksamil": "Cartolina da Ksamil",
    "borsh": "Paradiso di Borsh",
    "threeDays": "Tour di 3 giorni",
    "gjipe": "Paradiso di Gjipe",
    "twoDays": "Tour di 2 giorni",
    "rana": "Visita Rana e Hedhur",
    "oneDay": "Tour di 1 giorno",
    "Jale": "Cartolina da Jale",
    "Livadhi": "Visita la spiaggia di Livadhi",
    "fourDays": "Tour di 4 giorni",
    "zvernec": "Fai un tour a Zvernec",
    "saranda": "Perditi a Saranda",
    "dhermiTour": "Tour di Dhermi",
    "ksamilTour": "Tour di Ksamil",
    "borshTour": "Tour di Borsh",
    "gjipeTour": "Tour di Gjipe",
    "ranaTour": "Tour di Rana e Hedhur",
    "jaleTour": "Tour di Jale",
    "livadhiTour": "Tour di Livadhi",
    "zvernecTour": "Tour di Zvernec",
    "sarandaTour": "Tour di Saranda",
    "main": "Trascorri un'estate indimenticabile con TravAl!",
    "browse": "Sfoglia la collezione di tour che offriamo"
  },
  "french": {
    "filter": "Filtrer par :",
    "filterLabel": "Prix",
    "numOfDays": "Nombre de jours",
    "maxPrice": "Prix maximum : --",
    "numDayss": "Nombre de jours : --",
    "slide": "Faites glisser ou saisissez le prix maximum :",
    "selectt": "Sélectionnez le nombre de jours :",
    "option1": "1 jour",
    "option2": "2 jours",
    "option3": "3 jours",
    "option4": "4 jours",
    "option5": "5 jours",
    "option6": "6 jours",
    "dhermi": "Paradis de Dhermi",
    "fiveDays": "Tours de 5 jours",
    "tapMore": "Appuyez pour en savoir plus",
    "ksamil": "Carte postale de Ksamil",
    "borsh": "Paradis de Borsh",
    "threeDays": "Tours de 3 jours",
    "gjipe": "Paradis de Gjipe",
    "twoDays": "Tours de 2 jours",
    "rana": "Visite de Rana e Hedhur",
    "oneDay": "Tours de 1 jour",
    "Jale": "Carte postale de Jale",
    "Livadhi": "Visitez la plage de Livadhi",
    "fourDays": "Tours de 4 jours",
    "zvernec": "Faites un tour à Zvernec",
    "saranda": "Perdez-vous à Saranda",
    "dhermiTour": "Tour de Dhermi",
    "ksamilTour": "Tour de Ksamil",
    "borshTour": "Tour de Borsh",
    "gjipeTour": "Tour de Gjipe",
    "ranaTour": "Tour de Rana e Hedhur",
    "jaleTour": "Tour de Jale",
    "livadhiTour": "Tour de Livadhi",
    "zvernecTour": "Tour de Zvernec",
    "sarandaTour": "Tour de Saranda",
    "main": "Passez un été inoubliable avec TravAl !",
    "browse": "Parcourez la collection de tours que nous proposons"
  },
  "espanol": {
    "filter": "Filtrar por:",
    "filterLabel": "Precio",
    "numOfDays": "Número de días",
    "maxPrice": "Precio máximo: --",
    "numDayss": "Número de días: --",
    "slide": "Desliza o ingresa el precio máximo:",
    "selectt": "Selecciona el número de días:",
    "option1": "1 día",
    "option2": "2 días",
    "option3": "3 días",
    "option4": "4 días",
    "option5": "5 días",
    "option6": "6 días",
    "dhermi": "Paraíso de Dhermi",
    "fiveDays": "Tours de 5 días",
    "tapMore": "Toca para más información",
    "ksamil": "Postal desde Ksamil",
    "borsh": "Paraíso de Borsh",
    "threeDays": "Tours de 3 días",
    "gjipe": "Paraíso de Gjipe",
    "twoDays": "Tours de 2 días",
    "rana": "Visita Rana e Hedhur",
    "oneDay": "Tours de 1 día",
    "Jale": "Postal desde Jale",
    "Livadhi": "Visita la playa de Livadhi",
    "fourDays": "Tours de 4 días",
    "zvernec": "Realiza un tour en Zvernec",
    "saranda": "Pierde en Saranda",
    "dhermiTour": "Tour de Dhermi",
    "ksamilTour": "Tour de Ksamil",
    "borshTour": "Tour de Borsh",
    "gjipeTour": "Tour de Gjipe",
    "ranaTour": "Tour de Rana e Hedhur",
    "jaleTour": "Tour de Jale",
    "livadhiTour": "Tour de Livadhi",
    "zvernecTour": "Tour de Zvernec",
    "sarandaTour": "Tour de Saranda",
    "main": "¡Pasa un verano inolvidable con TravAl!",
    "browse": "Explora la colección de tours que ofrecemos"
  }
}


