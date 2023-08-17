const h1 = document.querySelector('#h1');
const span = document.querySelector('#span');
const text1 = document.querySelector('.text1');
const locationn = document.querySelector('.location')
const text2 = document.querySelector('.text2');
const call = document.querySelector('.call');
const text3 = document.querySelector('.text3');
const mail = document.querySelector('.mail');
const text4 = document.querySelector('.text4');
const question = document.querySelector('#question');
const write = document.querySelector('#write');
const submitButtonn = document.querySelector('#submit-button');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const phoneNum = document.querySelector('#phoneNum');
const message = document.querySelector('#message');


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

  h1.textContent = contactsData[attr].h1;
  span.textContent = contactsData[attr].span;
  text1.textContent = contactsData[attr].text1;
  locationn.textContent = contactsData[attr].locationn;
  text2.textContent = contactsData[attr].text2;
  call.textContent = contactsData[attr].call;
  text3.textContent = contactsData[attr].text3;
  mail.textContent = contactsData[attr].mail;
  text4.textContent = contactsData[attr].text4;
  question.textContent = contactsData[attr].question;
  write.textContent = contactsData[attr].write;
  submitButtonn.textContent = contactsData[attr].submitButtonn; 
  firstName.placeholder = `${contactsData[attr].firstName}`;
  lastName.placeholder = `${contactsData[attr].lastName}`;
  email.placeholder = `${contactsData[attr].email}`;
  phoneNum.placeholder = `${contactsData[attr].phoneNum}`;
  message.placeholder = `${contactsData[attr].message}`;
  });
})


const contactsData = {
  "english" :{
    "h1": "Get in touch",
    "span": "Want to get in touch? We would love to hear from you. Here is how you can reach us...",
    "text1": "Visit us at our office",
    "locationn" : "locationn_on",
    "text2" : "Rr: “Reshit Çollaku”, Tiranë",
    "call" : "call",
    "text3" : "0673454234",
    "mail" : "mail",
    "text4" : "info@example.com",
    "question" : "Have a question?",
    "write" : "Write to us!",
    "submitButtonn" : "Submit",
    "firstName" : "First Name",
    "lastName" : "Last Name",
    "email" : "Email",
    "phoneNum" : "Phone Number",
    "message" : "Message"
  },
  "german" :{
    "h1": "Kontakt aufnehmen",
    "span": "Möchten Sie Kontakt aufnehmen? Wir würden gerne von Ihnen hören. Hier erfahren Sie, wie Sie uns erreichen können...",
    "text1": "Besuchen Sie uns im Büro",
    "locationn": "locationn_on",
    "text2": "Rr: “Reshit Çollaku”, Tirana",
    "call": "call",
    "text3": "0673454234",
    "mail": "mail",
    "text4": "info@example.com",
    "question": "Haben Sie eine Frage?",
    "write": "Schreiben Sie uns!",
    "submitButtonn": "Absenden",
    "firstName": "Vorname",
    "lastName": "Nachname",
    "email": "E-Mail",
    "phoneNum": "Telefonnummer",
    "message": "Nachricht"
  },
  "italian":{
    "h1": "Contattaci",
    "span": "Vuoi metterti in contatto? Ci piacerebbe sentirti. Ecco come puoi raggiungerci...",
    "text1": "Vieni a trovarci in ufficio",
    "locationn": "locationn_on",
    "text2": "Rr: “Reshit Çollaku”, Tirana",
    "call": "call",
    "text3": "0673454234",
    "mail": "mail",
    "text4": "info@example.com",
    "question": "Hai una domanda?",
    "write": "Scrivici!",
    "submitButtonn": "Invia",
    "firstName": "Nome",
    "lastName": "Cognome",
    "email": "Email",
    "phoneNum": "Numero di Telefono",
    "message": "Messaggio"
  },
  "french": {
    "h1": "Nous contacter",
    "span": "Envie de nous contacter ? Nous aimerions avoir de vos nouvelles. Voici comment vous pouvez nous joindre...",
    "text1": "Rendez-nous visite à notre bureau",
    "locationn": "locationn_on",
    "text2": "Rr: “Reshit Çollaku”, Tirana",
    "call": "call",
    "text3": "0673454234",
    "mail": "mail",
    "text4": "info@example.com",
    "question": "Vous avez une question ?",
    "write": "Écrivez-nous !",
    "submitButtonn": "Envoyer",
    "firstName": "Prénom",
    "lastName": "Nom",
    "email": "Email",
    "phoneNum": "Numéro de téléphone",
    "message": "Message"
  },
  
  "espanol": {
    "h1": "Ponte en contacto",
    "span": "¿Quieres ponerte en contacto? Nos encantaría saber de ti. Así es cómo puedes contactarnos...",
    "text1": "Visítanos en nuestra oficina",
    "locationn": "locationn_on",
    "text2": "Rr: “Reshit Çollaku”, Tirana",
    "call": "call",
    "text3": "0673454234",
    "mail": "mail",
    "text4": "info@example.com",
    "question": "¿Tienes una pregunta?",
    "write": "¡Escríbenos!",
    "submitButtonn": "Enviar",
    "firstName": "Nombre",
    "lastName": "Apellido",
    "email": "Correo electrónico",
    "phoneNum": "Número de teléfono",
    "message": "Mensaje"
  }
}