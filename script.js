// Partie 1: Sélection d'éléments
const titre = document.getElementById('titre-principal');
const descriptions = document.querySelectorAll('.description');
const premierItem = document.querySelector('#liste-produits li:first-child');

// Vérification des sélections
if (titre) {
    // Partie 2: Modification du contenu
    titre.textContent = 'Bienvenue sur Notre Nouveau Site';
    titre.style.color = 'blue';
    titre.style.fontSize = '32px';

    // Gestion des événements sur le titre
    titre.addEventListener('mouseover', function () {
        this.style.color = 'red';
    });

    titre.addEventListener('mouseout', function () {
        this.style.color = 'blue'; // On remet en bleu comme défini précédemment
    });
}

if (descriptions.length > 0) {
    descriptions[0].textContent = 'Découvrez nos nouveaux produits !';
    if (descriptions[1]) {
        descriptions[1].innerHTML = '<strong>Services premium</strong> disponibles';
    }
}

// Partie 3: Modification des attributs et styles
const bouton = document.getElementById('btn-action');
if (bouton) {
    bouton.classList.add('highlight');
    bouton.id = 'nouveau-bouton';

    // Gestion des événements sur le bouton
    bouton.addEventListener('click', function () {
        alert('Bouton cliqué !');
    });
}

// Partie 4: Création et suppression d'éléments
const listeProduits = document.getElementById('liste-produits');
if (listeProduits) {
    // Ajout Produit 4
    const nouveauProduit = document.createElement('li');
    nouveauProduit.textContent = 'Produit 4';
    listeProduits.appendChild(nouveauProduit);

    // Suppression Produit 2 (vérification de l'existence)
    const produit2 = listeProduits.querySelectorAll('li')[1];
    if (produit2) {
        produit2.remove();
    }
}

// Ajout paragraphe Contact
const container = document.querySelector('.container');
if (container) {
    const nouveauParagraphe = document.createElement('p');
    nouveauParagraphe.textContent = 'Contactez-nous';
    container.appendChild(nouveauParagraphe);
}

// Partie 6: Liste de tâches interactive
function ajouterTache() {
    const input = document.getElementById('nouvelle-tache');
    const listeTaches = document.getElementById('liste-taches');

    if (input && listeTaches) {
        const texteTache = input.value.trim();

        if (texteTache) {
            const li = document.createElement('li');
            li.textContent = texteTache;

            const boutonSupprimer = document.createElement('button');
            boutonSupprimer.textContent = 'Supprimer';
            boutonSupprimer.addEventListener('click', function (e) {
                e.stopPropagation(); // Empêche le déclenchement de l'événement sur le li
                li.remove();
            });

            li.appendChild(boutonSupprimer);
            listeTaches.appendChild(li);
            input.value = '';
        }
    }
}

const boutonAjouterTache = document.getElementById('ajouter-tache');
if (boutonAjouterTache) {
    boutonAjouterTache.addEventListener('click', ajouterTache);
}

const listeTaches = document.getElementById('liste-taches');
if (listeTaches) {
    listeTaches.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('terminee');
        }
    });
}

const inputNouvelleTache = document.getElementById('nouvelle-tache');
if (inputNouvelleTache) {
    inputNouvelleTache.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            ajouterTache();
        }
    });
}