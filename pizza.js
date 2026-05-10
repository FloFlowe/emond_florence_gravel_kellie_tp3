// TITRE DE LA PAGE //

const titre = document.createElement("h1");
titre.textContent = "Commande de Pizzas";
document.body.appendChild(titre);

// SÉLECTION DE PIZZA //


//**** PIZZA MARGHERITA ****//

const form = document.createElement("form");
form.setAttribute("id", "form");
document.body.appendChild(form);

const fieldsetMargherita = document.createElement("fieldset");
form.appendChild(fieldsetMargherita);

let margheritaLegend = document.createElement("legend");
margheritaLegend.textContent = "Pizza Margherita : ";
fieldsetMargherita.appendChild(margheritaLegend);

// CHECKBOX MARGHERITA //

let checkboxMargherita = document.createElement("input");
checkboxMargherita.setAttribute("type", "checkbox");
checkboxMargherita.setAttribute("id", "margherita");
checkboxMargherita.setAttribute("name", "margherita");
fieldsetMargherita.appendChild(checkboxMargherita);

// QUANTITÉ //

let margheritaLabel = document.createElement("label");
margheritaLabel.setAttribute("for", "margherita"); 
margheritaLabel.textContent = " Margherita Quantité : ";
fieldsetMargherita.appendChild(margheritaLabel);

let margheritaInput = document.createElement("input");
margheritaInput.setAttribute("type", "number");
margheritaInput.value = 0;
margheritaInput.min = 0;
margheritaInput.max = 50;
margheritaInput.setAttribute("id", "margheritaInput");
margheritaInput.setAttribute("name", "margheritaInput");
fieldsetMargherita.appendChild(margheritaInput);

fieldsetMargherita.appendChild(document.createElement("br"));

// GARNITURES //

let margheritaGarniture = document.createElement("label");
margheritaGarniture.setAttribute("for", "margheritaGarniture");
margheritaGarniture.textContent = " Garnitures : ";
fieldsetMargherita.appendChild(margheritaGarniture);

// OPTION FROMAGE //

let margheritaFromage = document.createElement("input");
margheritaFromage.setAttribute("type", "checkbox");
margheritaFromage.setAttribute("id", "margheritaFromage");
margheritaFromage.setAttribute("name", "margheritaFromage");
fieldsetMargherita.appendChild(margheritaFromage);

let margheritaFromageLabel = document.createElement("label");
margheritaFromageLabel.textContent = " Fromage ";
fieldsetMargherita.appendChild(margheritaFromageLabel);

// OPTION CHAMPIGNONS //

let margheritaChampignons = document.createElement("input");
margheritaChampignons.setAttribute("type", "checkbox");
margheritaChampignons.setAttribute("id", "margheritaChampignons");
margheritaChampignons.setAttribute("name", "margheritaChampignons");
fieldsetMargherita.appendChild(margheritaChampignons);

let margheritaChampignonsLabel = document.createElement("label");
margheritaChampignonsLabel.textContent = " Champignons ";
fieldsetMargherita.appendChild(margheritaChampignonsLabel);

// OPTION OIGNONS //

let margheritaOignons = document.createElement("input");
margheritaOignons.setAttribute("type", "checkbox");
margheritaOignons.setAttribute("id", "margheritaOignons");
margheritaOignons.setAttribute("name", "margheritaOignons");
fieldsetMargherita.appendChild(margheritaOignons);

let margheritaOignonsLabel = document.createElement("label");
margheritaOignonsLabel.textContent = " Oignons ";
fieldsetMargherita.appendChild(margheritaOignonsLabel);



//***** PIZZA PEPPERONI *****//

const fieldsetPepperoni = document.createElement("fieldset");
form.appendChild(fieldsetPepperoni);

let pepperoniLegend = document.createElement("legend");
pepperoniLegend.textContent = "Pizza Pepperoni : ";
fieldsetPepperoni.appendChild(pepperoniLegend);

// CHECKBOX PEPPERONI //

let checkboxPepperoni = document.createElement("input");
checkboxPepperoni.setAttribute("type", "checkbox");
checkboxPepperoni.setAttribute("id", "pepperoni");
checkboxPepperoni.setAttribute("name", "pepperoni");
fieldsetPepperoni.appendChild(checkboxPepperoni);

// QUANTITÉ //

let pepperoniLabel = document.createElement("label");
pepperoniLabel.setAttribute("for", "pepperoni"); 
pepperoniLabel.textContent = " Pepperoni Quantité : ";
fieldsetPepperoni.appendChild(pepperoniLabel);

let pepperoniInput = document.createElement("input");
pepperoniInput.setAttribute("type", "number");
pepperoniInput.value = 0;
pepperoniInput.min = 0;
pepperoniInput.max = 50;
pepperoniInput.setAttribute("id", "pepperoniInput");
pepperoniInput.setAttribute("name", "pepperoniInput");
fieldsetPepperoni.appendChild(pepperoniInput);

fieldsetPepperoni.appendChild(document.createElement("br"));

// GARNITURES //

let pepperoniGarniture = document.createElement("label");
pepperoniGarniture.setAttribute("for", "pepperoniGarniture");
pepperoniGarniture.textContent = " Garnitures : ";
fieldsetPepperoni.appendChild(pepperoniGarniture);

// OPTION FROMAGE //

let pepperoniFromage = document.createElement("input");
pepperoniFromage.setAttribute("type", "checkbox");
pepperoniFromage.setAttribute("id", "pepperoniFromage");
pepperoniFromage.setAttribute("name", "pepperoniFromage");
fieldsetPepperoni.appendChild(pepperoniFromage);

let pepperoniFromageLabel = document.createElement("label");
pepperoniFromageLabel.textContent = " Fromage ";
fieldsetPepperoni.appendChild(pepperoniFromageLabel);

// OPTION CHAMPIGNONS //

let pepperoniChampignons = document.createElement("input");
pepperoniChampignons.setAttribute("type", "checkbox");
pepperoniChampignons.setAttribute("id", "pepperoniChampignons");
pepperoniChampignons.setAttribute("name", "pepperoniChampignons");
fieldsetPepperoni.appendChild(pepperoniChampignons);

let pepperoniChampignonsLabel = document.createElement("label");
pepperoniChampignonsLabel.textContent = " Champignons ";
fieldsetPepperoni.appendChild(pepperoniChampignonsLabel);

// OPTION OIGNONS //

let pepperoniOignons = document.createElement("input");
pepperoniOignons.setAttribute("type", "checkbox");
pepperoniOignons.setAttribute("id", "pepperoniOignons");
pepperoniOignons.setAttribute("name", "pepperoniOignons");
fieldsetPepperoni.appendChild(pepperoniOignons);

let pepperoniOignonsLabel = document.createElement("label");
pepperoniOignonsLabel.textContent = " Oignons ";
fieldsetPepperoni.appendChild(pepperoniOignonsLabel);



//**** PIZZA VÉGÉTARIENNE ****//

const fieldsetVegetarienne = document.createElement("fieldset");
form.appendChild(fieldsetVegetarienne);

let vegetarienneLegend = document.createElement("legend");
vegetarienneLegend.textContent = "Pizza Végétarienne : ";
fieldsetVegetarienne.appendChild(vegetarienneLegend);

// CHECKBOX VÉGÉTARIENNE //

let checkboxVegetarienne = document.createElement("input");
checkboxVegetarienne.setAttribute("type", "checkbox");
checkboxVegetarienne.setAttribute("id", "vegetarienne");
checkboxVegetarienne.setAttribute("name", "vegetarienne");
fieldsetVegetarienne.appendChild(checkboxVegetarienne);

// QUANTITÉ //

let vegetarienneLabel = document.createElement("label");
vegetarienneLabel.setAttribute("for", "vegetarienne"); 
vegetarienneLabel.textContent = " Végétarienne Quantité : ";
fieldsetVegetarienne.appendChild(vegetarienneLabel);

let vegetarienneInput = document.createElement("input");
vegetarienneInput.setAttribute("type", "number");
vegetarienneInput.value = 0;
vegetarienneInput.min = 0;
vegetarienneInput.max = 50;
vegetarienneInput.setAttribute("id", "vegetarienneInput");
vegetarienneInput.setAttribute("name", "vegetarienneInput");
fieldsetVegetarienne.appendChild(vegetarienneInput);

fieldsetVegetarienne.appendChild(document.createElement("br"));

// GARNITURES //

let vegetarienneGarniture = document.createElement("label");
vegetarienneGarniture.setAttribute("for", "vegetarienneGarniture");
vegetarienneGarniture.textContent = " Garnitures : ";
fieldsetVegetarienne.appendChild(vegetarienneGarniture);

// OPTION FROMAGE //

let vegetarienneFromage = document.createElement("input");
vegetarienneFromage.setAttribute("type", "checkbox");
vegetarienneFromage.setAttribute("id", "vegetarienneFromage");
vegetarienneFromage.setAttribute("name", "vegetarienneFromage");
fieldsetVegetarienne.appendChild(vegetarienneFromage);

let vegetarienneFromageLabel = document.createElement("label");
vegetarienneFromageLabel.textContent = " Fromage ";
fieldsetVegetarienne.appendChild(vegetarienneFromageLabel);

// OPTION CHAMPIGNONS //

let vegetarienneChampignons = document.createElement("input");
vegetarienneChampignons.setAttribute("type", "checkbox");
vegetarienneChampignons.setAttribute("id", "vegetarienneChampignons");
vegetarienneChampignons.setAttribute("name", "vegetarienneChampignons");
fieldsetVegetarienne.appendChild(vegetarienneChampignons);

let vegetarienneChampignonsLabel = document.createElement("label");
vegetarienneChampignonsLabel.textContent = " Champignons ";
fieldsetVegetarienne.appendChild(vegetarienneChampignonsLabel);

// OPTION OIGNONS //

let vegetarienneOignons = document.createElement("input");
vegetarienneOignons.setAttribute("type", "checkbox");
vegetarienneOignons.setAttribute("id", "vegetarienneOignons");
vegetarienneOignons.setAttribute("name", "vegetarienneOignons");
fieldsetVegetarienne.appendChild(vegetarienneOignons);

let vegetarienneOignonsLabel = document.createElement("label");
vegetarienneOignonsLabel.textContent = " Oignons ";
fieldsetVegetarienne.appendChild(vegetarienneOignonsLabel);



//**** PIZZA SILICIENNE ****//

const fieldsetSilicienne = document.createElement("fieldset");
form.appendChild(fieldsetSilicienne);

let silicienneLegend = document.createElement("legend");
silicienneLegend.textContent = "Pizza Silicienne : ";
fieldsetSilicienne.appendChild(silicienneLegend);

// CHECKBOX SILICIENNE //

let checkboxSilicienne = document.createElement("input");
checkboxSilicienne.setAttribute("type", "checkbox");
checkboxSilicienne.setAttribute("id", "silicienne");
checkboxSilicienne.setAttribute("name", "silicienne");
fieldsetSilicienne.appendChild(checkboxVegetarienne);

// QUANTITÉ //

let silicienneLabel = document.createElement("label");
silicienneLabel.setAttribute("for", "silicienne"); 
silicienneLabel.textContent = " Silicienne Quantité : ";
fieldsetSilicienne.appendChild(silicienneLabel);

let silicienneInput = document.createElement("input");
silicienneInput.setAttribute("type", "number");
silicienneInput.value = 0;
silicienneInput.min = 0;
silicienneInput.max = 50;
silicienneInput.setAttribute("id", "silicienneInput");
silicienneInput.setAttribute("name", "silicienneInput");
fieldsetSilicienne.appendChild(silicienneInput);

fieldsetSilicienne.appendChild(document.createElement("br"));

// GARNITURES //

let silicienneGarniture = document.createElement("label");
silicienneGarniture.setAttribute("for", "silicienneGarniture");
silicienneGarniture.textContent = " Garnitures : ";
fieldsetSilicienne.appendChild(silicienneGarniture);

// OPTION FROMAGE //

let silicienneFromage = document.createElement("input");
silicienneFromage.setAttribute("type", "checkbox");
silicienneFromage.setAttribute("id", "silicienneFromage");
silicienneFromage.setAttribute("name", "silicienneFromage");
fieldsetSilicienne.appendChild(silicienneFromage);

let silicienneFromageLabel = document.createElement("label");
silicienneFromageLabel.textContent = " Fromage ";
fieldsetSilicienne.appendChild(silicienneFromageLabel);

// OPTION CHAMPIGNONS //

let silicienneChampignons = document.createElement("input");
silicienneChampignons.setAttribute("type", "checkbox");
silicienneChampignons.setAttribute("id", "silicienneChampignons");
silicienneChampignons.setAttribute("name", "silicienneChampignons");
fieldsetSilicienne.appendChild(silicienneChampignons);

let silicienneChampignonsLabel = document.createElement("label");
silicienneChampignonsLabel.textContent = " Champignons ";
fieldsetSilicienne.appendChild(silicienneChampignonsLabel);

// OPTION OIGNONS //

let silicienneOignons = document.createElement("input");
silicienneOignons.setAttribute("type", "checkbox");
silicienneOignons.setAttribute("id", "silicienneOignons");
silicienneOignons.setAttribute("name", "silicienneOignons");
fieldsetSilicienne.appendChild(silicienneOignons);

let silicienneOignonsLabel = document.createElement("label");
silicienneOignonsLabel.textContent = " Oignons ";
fieldsetSilicienne.appendChild(silicienneOignonsLabel);



//****  MODE DE PAIEMENT ****//

const fieldsetPaiement = document.createElement("fieldset");
form.appendChild(fieldsetPaiement);

let paiementLegend = document.createElement("legend");
paiementLegend.textContent = "Mode de paiement : ";
fieldsetPaiement.appendChild(paiementLegend);

// CARTE DE CRÉDIT //

let radioCredit = document.createElement("input");
radioCredit.setAttribute("type", "radio");
radioCredit.setAttribute("id", "credit");
radioCredit.setAttribute("name", "credit");
radioCredit.setAttribute("value", "credit");
fieldsetPaiement.appendChild(radioCredit);
fieldsetPaiement.appendChild(document.createTextNode(" Carte de Crédit (En ligne)"));
fieldsetPaiement.appendChild(document.createElement("br"));

// DÉBIT //

let radioDebitCredit = document.createElement("input");
radioDebitCredit.setAttribute("type", "radio");
radioDebitCredit.setAttribute("id", "debitCredit");
radioDebitCredit.setAttribute("name", "debitCredit");
radioDebitCredit.setAttribute("value", "debitCredit");
fieldsetPaiement.appendChild(radioDebitCredit);
fieldsetPaiement.appendChild(document.createTextNode(" Débit/Crédit (À la porte)"));
fieldsetPaiement.appendChild(document.createElement("br"));

// ESPÈCES //

let radioEspeces = document.createElement("input");
radioEspeces.setAttribute("type", "radio");
radioEspeces.setAttribute("id", "especes");
radioEspeces.setAttribute("name", "especes");
radioEspeces.setAttribute("value", "especes");
fieldsetPaiement.appendChild(radioEspeces);
fieldsetPaiement.appendChild(document.createTextNode(" Espèces (À la porte)"));
fieldsetPaiement.appendChild(document.createElement("br"));



//**** INFORMATIONS SUR LE CLIENT ****//

const fieldsetClient = document.createElement("fieldset");
form.appendChild(fieldsetClient);

let clientLegend = document.createElement("legend");
clientLegend.textContent = "Informations sur le client : ";
fieldsetClient.appendChild(clientLegend);

// NOM //

let nomClient = document.createElement("label");
nomClient.textContent = "Nom : ";
let nomImput = document.createElement("input");
nomImput.setAttribute("type", "text");
nomImput.setAttribute("name", "nom");
nomImput.setAttribute("size", "15");
nomClient.appendChild(nomImput);
fieldsetClient.appendChild(nomClient);
fieldsetClient.appendChild(document.createElement("br"));

// PRÉNOM //

let prenomClient = document.createElement("label");
prenomClient.textContent = "Prénom : ";
let prenomImput = document.createElement("input");
prenomImput.setAttribute("type", "text");
prenomImput.setAttribute("name", "prenom");
prenomImput.setAttribute("size", "15");
prenomClient.appendChild(prenomImput);
fieldsetClient.appendChild(prenomClient);
fieldsetClient.appendChild(document.createElement("br"));

// TÉLÉPHONE //

let telephoneClient = document.createElement("label");
telephoneClient.textContent = "Téléphone : ";
let telephoneImput = document.createElement("input");
telephoneImput.setAttribute("type", "tel");
telephoneImput.setAttribute("name", "telephone");
telephoneImput.setAttribute("size", "15");
telephoneClient.appendChild(telephoneImput);
fieldsetClient.appendChild(telephoneClient);
fieldsetClient.appendChild(document.createElement("br"));

// ADRESSE COMPLÈTE //

let adresseClient = document.createElement("label");
adresseClient.textContent = "Adresse : ";
let adresseImput = document.createElement("input");
adresseImput.setAttribute("type", "text");
adresseImput.setAttribute("name", "adresse");
adresseImput.setAttribute("size", "15");
adresseClient.appendChild(adresseImput);
fieldsetClient.appendChild(adresseClient);
fieldsetClient.appendChild(document.createElement("br"));



//**** INFORMATIONS SUR LA LIVRAISON ****//

const fieldsetLivraison = document.createElement("fieldset");
form.appendChild(fieldsetLivraison);

let livraisonLegend = document.createElement("legend");
livraisonLegend.textContent = "Informations sur la livraison : ";
fieldsetLivraison.appendChild(livraisonLegend);

// NOM ET PRÉNOM //

let nomLivraison = document.createElement("label");
nomLivraison.textContent = "Nom et prénom : ";
let livraisonNomImput = document.createElement("input");
livraisonNomImput.setAttribute("type", "text");
livraisonNomImput.setAttribute("name", "livraisonNom");
livraisonNomImput.setAttribute("size", "15");
nomLivraison.appendChild(livraisonNomImput);
fieldsetLivraison.appendChild(nomLivraison);
fieldsetLivraison.appendChild(document.createElement("br"));

// TÉLÉPHONE //

let telephoneLivraison = document.createElement("label");
telephoneLivraison.textContent = "Téléphone : ";
let livraisonTelephoneImput = document.createElement("input");
livraisonTelephoneImput.setAttribute("type", "tel");
livraisonTelephoneImput.setAttribute("name", "telephoneLivraison");
livraisonTelephoneImput.setAttribute("size", "15");
telephoneLivraison.appendChild(livraisonTelephoneImput);
fieldsetLivraison.appendChild(telephoneLivraison);
fieldsetLivraison.appendChild(document.createElement("br"));

// ADRESSE DE LIVRAISON //

let adresseLivraison = document.createElement("label");
adresseLivraison.textContent = "Adresse : ";
let adresseLivraisonImput = document.createElement("input");
adresseLivraisonImput.setAttribute("type", "text");
adresseLivraisonImput.setAttribute("name", "adresseLivraison");
adresseLivraisonImput.setAttribute("size", "15");
adresseLivraison.appendChild(adresseLivraisonImput);
fieldsetLivraison.appendChild(adresseLivraison);
fieldsetLivraison.appendChild(document.createElement("br"));

//**** BOUTON DE VALIDATION DE LA COMMANDE ****//

let submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.textContent = "Commander";
form.appendChild(submitButton);



//**** CODE JAVASCRIPT ****//

