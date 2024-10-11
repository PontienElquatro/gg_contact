


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

// Affiche tous les contacts du local storage

function displayContacts() {
  const formattedListUsers = getUsers();
  const contactsContainer = document.querySelector(".contacts-container");
  contactsContainer.innerHTML = ""; // On nettoie l'écran

  formattedListUsers.forEach((contact, index) => {
    const div = document.createElement("div");
    div.classList.add("contact");
    div.innerHTML = `
      <h3>${contact.prenom} ${contact.nom}</h3>
      <p>Email: ${contact.email}</p>
      <p>Téléphone: ${contact.phone}</p>
      <button class="delete-btn" data-index="${index}">Supprimer</button>;` 
    contactsContainer.appendChild(div);
  } );
}
// Ajout d'un gestionnaire d'événements pour suppression
const deleteButtons = document.querySelectorAll(".delete-btn");
deleteButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const index = event.target.dataset.index;
    deleteContact(index);
  });
});

// Recherche un contact par nom ou prénom
function searchContact(keyword) {
  const formattedListUsers = getUsers();
  const result = formattedListUsers.filter(
    (contact) =>
      contact.prenom.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.nom.toLowerCase().includes(keyword.toLowerCase())
  );
  return result;
}

// function validateContactData(prenom, nom, email, phone) {
//   const errors = [];

//   // Vérification du prénom et du nom
//   if (!prenom || !nom) {
//     errors.push("Le prénom et le nom sont obligatoires.");
//   }

//   // Vérification de l'email
//   if (!email || !email.includes("@")) {
//     errors.push("L'email est invalide.");
//   }

//   // Vérification du numéro de téléphone
//   if (!phone || isNaN(phone) || phone.length !== 10) {
//     errors.push("Le numéro de téléphone est invalide.");
//   }

//   // Retourne un objet avec les erreurs et les données de contact
//   return {
//     errors,
//     contactData: { prenom, nom, email, phone },
//   };
// }

function displayFrequentContacts() {
  const formattedListUsers = getUsers();

  // Liste de tous les contacts
  console.log("Tous les contacts :");
  formattedListUsers.forEach((contact) => {
    console.log(contact.nom, contact.prenom);
  });

  // Filtrage des contacts en fonction de leur fréquence d'utilisation
  const frequentContacts = formattedListUsers.filter(
    (contact) => contact.usageCount && contact.usageCount >= 5
  );

  // Affichage des contacts filtrés
  console.log("Contacts fréquents :");
  frequentContacts.forEach((contact) => {
    console.log(contact.nom, contact.prenom);
  });
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

// /* Ecoute des événement avec le "créer contact"*/
// let btnCreer = document.querySelector('#addContact');   // 
// /* On nettoie l'écran*/
// btnCreer.addEventListener('click', () => {
   
    
  /* Création formulaire*/
  let formContact = document.getElementById('formContact');  // 

  formContact.addEventListener('submit', (event) => {
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
    const validation = validateContactData(prenom, nom, email, phone);

    // Si des erreurs ont été détectées, on les affiche et on arrête l'exécution de la fonction
    if (validation.errors.length > 0) {
      const errorList = validation.errors
        .map((error) => `<li>${error}</li>`)
        .join("");
      alert(`Les erreurs suivantes ont été détectées : ${errorList}`);
      return;
    }
    contactInfo = validation.contactData;
  
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
     
    displayContacts()

  })


  // btnEnregistrer.classList('button');

  /* Création Input*/
  /* Champ Prénom*/
  let champPrenom = document.getElementById('prenom');
  let prenom = champPrenom.value;

  champPrenom.type = "text";
  champPrenom.placeholder = "Prenom";


  /* Champ Nom*/
  let champNom = document.createElement('nom');
  champNom.placeholder = "Nom";
  

  /* Champ Email*/
  let champEmail = document.createElement('email');
  champEmail.placeholder = "Votre Email";

  /* Champ phone*/
  let champPhone = document.createElement('phone');
  champPhone.placeholder = "Phone";


console.log(contact);