// Partie 1: Sélection d'éléments
const titre = document.getElementById('titre-principal');
const descriptions = document.querySelectorAll('.description');
const premierItem = document.querySelector('#liste-produits li:first-child');

// Partie 2: Modification du contenu
titre.textContent = 'Bienvenue sur Notre Nouveau Site';
descriptions[0].textContent = 'Découvrez nos nouveaux produits !';
descriptions[1].innerHTML = '<strong>Services premium</strong> disponibles';

// Partie 3: Modification des attributs et styles
titre.style.color = 'blue';
titre.style.fontSize = '32px';

const bouton = document.getElementById('btn-action');
bouton.classList.add('highlight');
bouton.id = 'nouveau-bouton';

// Partie 4: Création et suppression d'éléments
// Ajout Produit 4
const nouveauProduit = document.createElement('li');
nouveauProduit.textContent = 'Produit 4';
document.getElementById('liste-produits').appendChild(nouveauProduit);

// Ajout paragraphe Contact
const nouveauParagraphe = document.createElement('p');
nouveauParagraphe.textContent = 'Contactez-nous';
document.querySelector('.container').appendChild(nouveauParagraphe);

// Suppression Produit 2
document.querySelectorAll('#liste-produits li')[1].remove();

// Partie 5: Gestion des événements
bouton.addEventListener('click', function() {
    alert('Bouton cliqué !');
});

titre.addEventListener('mouseover', function() {
    this.style.color = 'red';
});

titre.addEventListener('mouseout', function() {
    this.style.color = 'blue'; // On remet en bleu comme défini précédemment
});

// Partie 6: Liste de tâches interactive
function ajouterTache() {
    const input = document.getElementById('nouvelle-tache');
    const texteTache = input.value.trim();
    
    if (texteTache) {
        const li = document.createElement('li');
        li.textContent = texteTache;
        
        const boutonSupprimer = document.createElement('button');
        boutonSupprimer.textContent = 'Supprimer';
        boutonSupprimer.addEventListener('click', function(e) {
            e.stopPropagation(); // Empêche le déclenchement de l'événement sur le li
            li.remove();
        });
        
        li.appendChild(boutonSupprimer);
        document.getElementById('liste-taches').appendChild(li);
        input.value = '';
    }
}

document.getElementById('ajouter-tache').addEventListener('click', ajouterTache);

document.getElementById('liste-taches').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('terminee');
    }
});

document.getElementById('nouvelle-tache').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        ajouterTache();
    }
});