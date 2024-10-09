

function getUsers() {
  if (!(localStorage.getItem("users"))) {
    localStorage.setItem("users", "[]")
  }

  let listUsers = localStorage.getItem("users");

  let formattedListUsers = JSON.parse(listUsers)
  return formattedListUsers;
}



function insertUsersInLocalStorage(formattedListUsers) {
  let toStr = JSON.stringify(formattedListUsers);
  localStorage.setItem("users", toStr);
}



// Selects all elements
const burgerMenu = document.querySelector("#burger-menu");
const sideBarMenu = document.querySelector("#side-bar");
const mainSection = document.querySelector("#main-section");

// Callback functions
const handleAddStyle = (element, style) => {
  element.classList.add(style);
};

const handleRemoveStyle = (element, style) => {
  element.classList.remove(style);
};

// Add events

burgerMenu.addEventListener("click", (event) => {
  if (sideBarMenu.classList.contains("display-none")) {
    handleRemoveStyle(sideBarMenu, "display-none");
    handleRemoveStyle(mainSection, "w-100");
  } else {
    handleAddStyle(sideBarMenu, "display-none");
    handleAddStyle(mainSection, "w-100");
  }
});


/* Création Tableaux */
let contact = [];

/* Ecoute des événement avec le "créer contact"*/
let btnCreer = document.querySelector('#addContact');   // 
/* On nettoie l'écran*/
btnCreer.addEventListener('click', () => {
  let titleContact = document.getElementById('titleContact');  // 
  let img = document.getElementById('img');  // 
  titleContact.remove();  // 
  img.remove();  // 

  /* Création formulaire*/
  let form = document.createElement('form');  // 
  let btnEnregistrer = document.createElement('button'); // 
  btnEnregistrer.textContent = "Enregistrer";
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    prenom = champPrenom.value;
    nom = champNom.value;
    email = champEmail.value;
    phone = champPhone.value;

    contactInfo = {
      prenom: prenom,
      nom: nom,
      email: email,
      phone: phone,
    }
    if (!(localStorage.getItem("users"))) {
      localStorage.setItem("users", "[]")
    }

    let listUsers = localStorage.getItem("users");

    let formattedListUsers = JSON.parse(listUsers)
    formattedListUsers.push(contactInfo)
    let data = JSON.stringify(formattedListUsers);

    localStorage.setItem("users", data);

    form.reset();
    form.style.display = "none";


  })
  // btnEnregistrer.classList('button');

  /* Création Input*/
  /* Champ Prénom*/
  let champPrenom = document.createElement('input');
  let prenom = champPrenom.value;

  champPrenom.type = "text";
  champPrenom.placeholder = "Prenom";


  /* Champ Nom*/
  let champNom = document.createElement('input');
  champNom.placeholder = "Prenom";
  champNom.type = "text";

  /* Champ Email*/
  let champEmail = document.createElement('input');
  champEmail.type = "text"
  champEmail.placeholder = "Votre Email";

  /* Champ phone*/
  let champPhone = document.createElement('input');
  champPhone.type = "text";
  champPhone.placeholder = "Phone";

  mainSection.appendChild(form);
  form.appendChild(btnEnregistrer);
  form.appendChild(champPrenom);
  form.appendChild(champNom);
  form.appendChild(champEmail);
  form.appendChild(champPhone);
})
