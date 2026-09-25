const prompt = require("prompt-sync")();
const candidats = [
    {
        cin: "AB123456",
        nom: "othmane",
        prenom: "bouy",
        partiPolitique: "Indépendant",
        age: 40,
        electeurs: []
    },
    {
        cin: "HH89175",
        nom: "karima",
        prenom: "bouy",
        partiPolitique: "partie 1",
        age: 22,
        electeurs: []
    }
];
function AjoutCandidat() {
    const cin = prompt("Entrer votre CIN : ");
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cin) {
            console.log("Cette CIN existe deja !");
            return;
        }
    }
    let nom = prompt("Nom : ");
    let prenom = prompt("Prenom : ");
    let partiPolitique = prompt("Parti politique : ");
    let age = Number(prompt("Age : "));

    let candidat = {
        cin: cin,
        nom: nom,
        prenom: prenom,
        partiPolitique: partiPolitique,
        age: age,
        electeurs: []
    };
    candidats.push(candidat);
    console.log("Candidat ajouté avec succès !");
}
function AjoutPlusieursCandidat() {
    const nombre = Number( prompt("Combien de candidats voulez-vous ajouter ? "));
    for (let i = 0; i < nombre; i++) {
        console.log("=== Candidat " + (i + 1) + " ===");
        let cin = prompt("Entrer le CIN : ");
        let trouve = false;
        for (let j = 0; j < candidats.length; j++) {
            if (candidats[j].cin === cin) {
                trouve = true;
                break;
            }
        }
        if (trouve === true) {
            console.log("Cette CIN existe déjà !");
            i--;
            continue;
        }
        let nom = prompt("Nom : ");
        let prenom = prompt("Prenom : ");
        let partiPolitique = prompt("Parti politique : ");
        let age = Number(prompt("Age : "));
        let candidat = {
            cin: cin,
            nom: nom,
            prenom: prenom,
            partiPolitique: partiPolitique,
            age: age,
            electeurs: []
        };
        candidats.push(candidat);
        console.log("Candidat ajoutr avec succès !");
    }
}
function afficherUnCandidat(candidat) {
    console.log("----------------------------");
    console.log("CIN : " + candidat.cin);
    console.log("Nom : " + candidat.nom);
    console.log("Prénom : " + candidat.prenom);
    console.log("Parti : " + candidat.partiPolitique);
    console.log("Age : " + candidat.age);
    console.log("Nombre de votes : " + candidat.electeurs.length);
    console.log("----------------------------");
}
function AfficherListeCandidats() {
    console.log("=== LISTE DES CANDIDATS ===");
    if (candidats.length === 0) {
        console.log("Aucun candidat.");
        return;
    }
    for (let i = 0; i < candidats.length; i++) {
        afficherUnCandidat(candidats[i]);
    }
    console.log("1 - Trier par nombre de votes");
    console.log("2 - Filtrer par parti politique");
    const choix = Number(prompt("Entrer votre choix : "));
    if (choix === 1) {
        for (let i = 0; i < candidats.length; i++) {
            for (let j = 0; j < candidats.length - i - 1; j++) {
                if (
                    candidats[j].electeurs.length <candidats[j + 1].electeurs.length) {
                    let temp = candidats[j];
                    candidats[j] = candidats[j + 1];
                    candidats[j + 1] = temp;
                }
            }
        }
        console.log("=== CANDIDA TRIER PAR NOMBRE DE VOTES===");
        for (let i = 0; i < candidats.length; i++) {
            afficherUnCandidat(candidats[i]);
        }
    }
    else if (choix === 2) {
        const parti = prompt("Parti politique specifique : ");
        let trouve = false;
        for (let i = 0; i < candidats.length; i++) {
            if (candidats[i].partiPolitique===parti) {
                afficherUnCandidat(candidats[i]);
                trouve = true;
            }
        }
        if (trouve === false) {
            console.log("Aucun candidat trouvé.");
        }
    }
}
function Voter() {
    const cin = prompt("Entrer votre CIN : ");
    for (let i = 0; i < candidats.length; i++) {
        for (let j = 0; j < candidats[i].electeurs.length; j++) {
            if (candidats[i].electeurs[j].cin === cin) {
                console.log("Vous avez déjà vote.");
                return;
            }
        }
    }
    const nomElecteur = prompt("Entrer le nom de l'electeur : ");
    console.log("LISTE DES CANDIDATS");
    for (let i = 0; i < candidats.length; i++) {
        console.log((i + 1) + ". "+candidats[i].prenom + " " +candidats[i].nom +" - " +candidats[i].partiPolitique);}
    const choix = Number(prompt("Choisir le numéro du candidat : "));
    if (choix < 1 || choix > candidats.length) {
        console.log("Choix invalide.");
        return;
    }
    const candidatChoisi = candidats[choix - 1];
    candidatChoisi.electeurs.push({cin: cin,nom: nomElecteur});
    console.log("Votre vote a ete enregistre ");
}
function Modifier() {
    const cin = prompt("Entrer votre CIN : ");
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cin) {
            console.log("1. Modifier le parti politique");
            console.log("2. Modifier l age");
            let choix = prompt("Choisissez votre choix : ");
            if (choix === "1") {
                candidats[i].partiPolitique =prompt("Nouveau parti politique : ");
            } else if (choix === "2") {
                candidats[i].age =Number(prompt("Nouvel age : "));
            } else {
                console.log("Choix invalide");
                return;
            }
            console.log("Candidat modifie avec succe.");
            return;
        }
    }
    console.log("Le candidat est introuvable ");
}
function  Supprimer(){
     const CIN=prompt("entrer votre CIN:");
     let trouve=false;
     for(let i=0;i<candidats.length;i++){
        if(candidats[i].cin===CIN){
            candidats.splice(i,1);
            trouve=true;
            console.log("le candidat supprimer a success");
            break;
        }
     }if(trouve===false){
        console.log("condidat introuvable")
     }
}

function  Recherche(){
    let trouve=false;
     const nom=prompt("entrer le nom de la recherche:");
     for(let i=0;i<candidats.length;i++){
        if(candidats[i].nom===nom){
             afficherUnCandidat(candidats[i]);
             trouve=trouve;
        }
     }if(trouve===false){
        console.log("condidat introuvable")
     }
}
function Statistique(){
    if(candidats.length===0){
        console.log("aucune candidat trouver");
    }
    let nbrTotal=0;
    for(let i=0;i<candidats.length;i++){

    }

}
function Menu() {
    let choix;
    do {
        console.log("MENU");
        console.log("1. Ajouter un nouveau candidat");
        console.log("2. Ajouter plusieurs candidats");
        console.log("3. Afficher la liste des candidats");
        console.log("4. Voter pour un candidat");
        console.log("5. Modifier un candidat");
        console.log("6. Supprimer un candidat");
        console.log("7. Rechercher un candidat");
        console.log("8. Statistiques de l'élection");
        console.log("0. Quitter");
        choix = Number(prompt("Entrer votre choix : "));
        switch (choix) {
            case 1:
                AjoutCandidat();
                break;
            case 2:
                AjoutPlusieursCandidat();
                break;
            case 3:
                AfficherListeCandidats();
                break;
            case 4:
                Voter();
                break;
            case 5:
                Modifier();
                break;
            case 6:
                Supprimer();
                break;
            case 7:
                Recherche();
                break;
            case 8:
                Statistique();
                break;
            case 0:
                console.log("Au revoir!");
                break;
            default:
                console.log("Votre choix est invalide !");
        }
    } while (choix !== 0);
}
Menu();

