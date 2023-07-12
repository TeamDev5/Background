                            // CHANGER LA COULEUR DU BACKGROUND POUR LE BODY AU CLIQUE //

function color(z){
    // La fonction "color" est définie avec un paramètre "z" qui représente l'élément span cliqué.

    var a = getComputedStyle(z);
    // La variable "a" est déclarée et elle contient le style calculé de l'élément span cliqué. 
    // getComputedStyle() renvoie un objet qui représente les styles calculés pour l'élément spécifié.

    var b = a.backgroundColor;
    // La variable "b" est déclarée et elle contient la valeur de la propriété de fond (backgroundColor) de l'élément span cliqué.

    document.body.style.backgroundColor = b;
    // La propriété "style" de l'élément "body" est utilisée pour changer la couleur de fond de la page.
    // En assignant la valeur de la variable "b" à la propriété "backgroundColor", la couleur de fond de la page est modifiée en fonction de la couleur du span cliqué.
}



                            // FONCTION POUR LE BOUTON ACTIVER/DESACTIVER QUI CHANGE LE BACKGROUND TOUTES LES 1 SECONDES //

// Déclaration d'une variable pour stocker l'ID de l'intervalle
let intervalId = null;

// Fonction pour activer ou désactiver le changement de couleur
function toggleColorChange() {
    // Récupération de l'élément du titre à partir de son ID
    const title = document.getElementById('title');
    // Récupération du bouton à partir de sa classe CSS
    const button = document.querySelector('.titre button');

    // Vérification si un intervalle est déjà en cours
    if (intervalId) {
        // Si un intervalle est en cours, on l'arrête
        clearInterval(intervalId);
        // Réinitialisation de l'ID de l'intervalle à null
        intervalId = null;
        // Modification du texte du bouton pour indiquer qu'il faut l'activer
        button.textContent = 'Activer';
        // Réinitialisation de la couleur de fond du titre
        title.style.backgroundColor = '';
    } else {
        // Si aucun intervalle n'est en cours, on démarre le changement de couleur toutes les 1 secondes (1000ms = 1 seconde)
        intervalId = setInterval(changeBackgroundColor, 1000);
        // Modification du texte du bouton pour indiquer qu'il faut le désactiver
        button.textContent = 'Désactiver';
    }
}
                
function changeBackgroundColor() {
    // Définition des différentes couleurs possibles
    const colors = [
        '#9b0fdb',   // Violet
        '#ffea00',   // Jaune
        '#04db53',   // Vert
        '#0f68d8',   // Bleu
        'red',       // Rouge
        'orange',    // Orange
        '#000'       // Noir
    ];
    
    // Récupération de l'élément du titre à partir de son ID
    const title = document.getElementById('title');

    // Sélection aléatoire d'une couleur parmi celles disponibles
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Modification de la couleur de fond du titre avec la couleur aléatoire choisie
    title.style.backgroundColor = randomColor;
}



                            // EFFET PLUIE ET FLAQUES D'EAU //

// Fonction pour créer une goutte de pluie
function createRaindrop() {
    // Récupération du conteneur des gouttes de pluie à partir de sa classe CSS
    const raindropContainer = document.querySelector('.raindrop-container');

    // Création d'un élément div pour représenter la goutte de pluie
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');

    // Détermination d'une position horizontale aléatoire pour la goutte de pluie à l'intérieur du conteneur
    const position = Math.random() * raindropContainer.offsetWidth;

    // Détermination d'une taille aléatoire pour la goutte de pluie (entre 3px et 8px)
    const size = Math.random() * 5 + 3;

    // Attribution de la position et de la taille à l'élément de la goutte de pluie
    raindrop.style.left = `${position}px`;
    raindrop.style.width = `${size}px`;
    raindrop.style.height = `${size * 5}px`;

    // Ajout de la goutte de pluie au conteneur
    raindropContainer.appendChild(raindrop);

    // Après 2 secondes, suppression de la goutte de pluie et création d'une flaque d'eau
    setTimeout(() => {
        raindropContainer.removeChild(raindrop);

        // Création d'un élément div pour représenter la flaque d'eau
        const puddle = document.createElement('div');
        puddle.classList.add('puddle');

        // Attribution de la position de la flaque d'eau (même position que la goutte de pluie)
        puddle.style.left = `${position}px`;

        // Attribution de la hauteur de la flaque d'eau par rapport au bas du conteneur
        puddle.style.bottom = `0px`;

        // Attribution de la largeur de la flaque d'eau (10 fois la taille de la goutte de pluie)
        puddle.style.width = `${size * 10}px`;

        // Attribution de la hauteur de la flaque d'eau (2 fois la taille de la goutte de pluie)
        puddle.style.height = `${size * 2}px`;

        // Ajout de la flaque d'eau à l'élément parent du conteneur
        raindropContainer.parentElement.appendChild(puddle);
    }, 2000);
}

// Appel de la fonction createRaindrop() toutes les 100 millisecondes pour créer continuellement des gouttes de pluie
setInterval(createRaindrop, 100);
