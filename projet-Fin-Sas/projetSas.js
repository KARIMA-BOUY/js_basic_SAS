const prompt = require("prompt-sync")();
const candidats = [
    {
        cin: "AB456789",
        nom: "Amrani",
        prenom: "Yassine",
        partiPolitique: "Indépendant",
        age: 35,
        electeurs: []
    },
    {
        cin: "CD234567",
        nom: "El Mansouri",
        prenom: "Sara",
        partiPolitique: "Parti 1",
        age: 29,
        electeurs: []
    },
    {
        cin: "EF345678",
        nom: "Alaoui",
        prenom: "Mehdi",
        partiPolitique: "Parti 2",
        age: 42,
        electeurs: []
    },
    {
        cin: "GH567890",
        nom: "Bennani",
        prenom: "Salma",
        partiPolitique: "Parti 1",
        age: 31,
        electeurs: []
    },
    {
        cin: "IJ678901",
        nom: "Tazi",
        prenom: "Omar",
        partiPolitique: "Parti 3",
        age: 45,
        electeurs: []
    },
    {
        cin: "KL789012",
        nom: "Naciri",
        prenom: "Imane",
        partiPolitique: "Parti 2",
        age: 27,
        electeurs: []
    },
    {
        cin: "MN890123",
        nom: "Fassi",
        prenom: "Adam",
        partiPolitique: "Indépendant",
        age: 38,
        electeurs: []
    },
    {
        cin: "OP901234",
        nom: "Berrada",
        prenom: "Nour",
        partiPolitique: "Parti 3",
        age: 33,
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
    const nombre = Number(prompt("Combien de candidats voulez-vous ajouter ? "));
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
        console.log("Candidat ajouté avec succès !");
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
                if (candidats[j].electeurs.length < candidats[j + 1].electeurs.length) {
                    let temp = candidats[j];
                    candidats[j] = candidats[j + 1];
                    candidats[j + 1] = temp;
                }
            }
        }
        console.log("=== CANDIDATS TRIES PAR NOMBRE DE VOTES ===");
        for (let i = 0; i < candidats.length; i++) {
            afficherUnCandidat(candidats[i]);
        }
    }
    else if (choix === 2) {
        const parti = prompt("Parti politique specifique : ");
        let trouve = false;
        for (let i = 0; i < candidats.length; i++) {
            if (candidats[i].partiPolitique === parti) {
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
                console.log("Vous avez déjà voté et vous n'avez pas le droit de voter à nouveau.");
                return;
            }
        }
    }
    const nomElecteur = prompt("Entrer le nom de l'electeur : ");
    console.log("=== LISTE DES CANDIDATS ===");
    for (let i = 0; i < candidats.length; i++) {
        console.log((i + 1) + ". " +candidats[i].prenom +" " +candidats[i].nom + " - " +candidats[i].partiPolitique);
    }
    const choix = Number(prompt("Choisir le numéro du candidat : ")
    );
    if (choix < 1 || choix > candidats.length) {
        console.log("Choix invalide.");
        return;
    }
    const candidatChoisi = candidats[choix - 1];
    candidatChoisi.electeurs.push({
        cin: cin,
        nom: nomElecteur
    });
    console.log("Votre vote a été enregistré.");
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
            }
            else if (choix === "2") {
                candidats[i].age =Number(prompt("Nouvel age : "));
            }
            else {
                console.log("Choix invalide");
                return;
            }
            console.log("Candidat modifie avec succes.");
            return;
        }
    }
    console.log("Le candidat est introuvable");
}
function Supprimer() {
    const CIN = prompt("Entrer votre CIN : ");
    let trouve = false;
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === CIN) {
            candidats.splice(i, 1);
            trouve = true;
            console.log("Le candidat a été supprimé avec succès.");
            break;
        }
    }
    if (trouve === false) {
        console.log("Candidat introuvable");
    }
}
function Recherche() {
    let trouve = false;
    const nom = prompt("Entrer le nom à rechercher : ");
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].nom === nom) {
            afficherUnCandidat(candidats[i]);
            trouve = true;
        }
    }
    if (trouve === false) {
        console.log("Candidat introuvable");
    }
}
function Statistique() {
    console.log("=== STATISTIQUES ===");
    if (candidats.length === 0) {
        console.log("Aucun candidat.");
        return;
    }
    console.log("Nombre de candidats : " + candidats.length);
    let totalVotes = 0;
    for (let i = 0; i < candidats.length; i++) {
        totalVotes =totalVotes + candidats[i].electeurs.length;
    }
    console.log("Nombre total de votes : " + totalVotes);
    let copie = [];
    for (let i = 0; i < candidats.length; i++) {
        copie.push(candidats[i]);
    }
    for (let i = 0; i < copie.length; i++) {
        for (let j = 0; j < copie.length - i - 1; j++) {
            if (copie[j].electeurs.length <copie[j + 1].electeurs.length) {
                let temp = copie[j];
                copie[j] = copie[j + 1];
                copie[j + 1] = temp;
            }
        }
    }
    console.log("=== TOP 3 DES CANDIDATS ===");
    let limite = 3;
    if (copie.length < 3) {
        limite = copie.length;
    }
    for (let i = 0; i < limite; i++) {
        console.log((i + 1) +". " +copie[i].nom +" " +copie[i].prenom +" : " +copie[i].electeurs.length +" votes");
    }
    console.log("=== CANDIDATS PAR PARTI ===");
    let partis = {};
    for (let i = 0; i < candidats.length; i++) {
        let parti = candidats[i].partiPolitique;
        if (partis[parti] === undefined) {
            partis[parti] = 1;
        }
        else {
            partis[parti] =partis[parti] + 1;
        }
    }
    for (let parti in partis) {
        console.log(parti + " : " + partis[parti] + "candidat");
    }
}
function Menu() {
    let choix;
    do {
        console.log("===========MENU===============");
        console.log("1. Ajouter un nouveau candidat");
        console.log("2. Ajouter plusieurs candidats");
        console.log("3. Afficher la liste des candidats");
        console.log("4. Voter pour un candidat");
        console.log("5. Modifier un candidat");
        console.log("6. Supprimer un candidat");
        console.log("7. Rechercher un candidat");
        console.log("8. Statistiques de l'élection");
        console.log("0. Quitter");
        choix = Number(
            prompt("Entrer votre choix : ")
        );
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
                console.log("Au revoir !");
                break;
            default:
                console.log("Votre choix est invalide !");
        }
    } while (choix !== 0);
}
Menu();