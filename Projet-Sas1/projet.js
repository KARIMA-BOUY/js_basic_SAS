
const prompt = require("prompt-sync")();
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
let tickets = [];
function AfficheTrajet() {
    for (let i = 0; i < trips.length; i++) {
        console.log("---les trajets Disponible---");
        console.log("id:" + trips[i].id);
        console.log("departure" + trips[i].departure);
        console.log("Depart:" + trips[i].departureTime);
        console.log("arrive:" + trips[i].arrivalTime);
        console.log("Prix:" + trips[i].price);
        console.log("Places Disponibles:" + trips[i].availableSeats);
        console.log("--------------------");
    }
}
function AcheterTicket() {
    let trajet;
    const nom = prompt("entrer votre nom:");
    const Id = Number(prompt("entrer le Id de trajet:"));
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id === Id) {
            trajet = trips[i];
        }
    }
    if (!trajet) {
        console.log("trajet introuvable!");
        return;
    }
    if (trajet.availableSeats === 0) {
        console.log("train complet");
        return;
    }
    let place = 51 - trajet.availableSeats;
    const ticket = {
        id: tickets.length + 1,
        nom: nom,
        tripId: Id,
        place: place,
        Prix: trajet.price,
    };
    tickets.push(ticket);
    trajet.availableSeats--;
    console.log("ticket ajout a succes");
    console.log("Ticket #" + ticket.id);
    console.log("Passager:" + ticket.nom);
    console.log("trajet:" + trajet.departureTime + "->" + trajet.arrivalTime);
    console.log("place:" + ticket.place);
    console.log("Prix:" + trajet.price + "DH");
}
function AfficherTicket() {
    if (tickets.length === 0) {
        console.log("Aucun ticket enregistre");
    }
    for (let i = 0; i < tickets.length; i++) {
        for (let j = 0; j < trips.length; j++) {
            if (trips[j].id === tickets[i].tripId) {
                console.log("Ticket #" + tickets[i].id);
                console.log("Passager : " + tickets[i].nom);
                console.log("Trajet : " + trips[j].departure + " -> " + trips[j].destination);
                console.log("Départ : " + trips[j].departureTime);
                console.log("Arrivée : " + trips[j].arrivalTime);
                console.log("Place : " + tickets[i].place);
                console.log("Prix : " + tickets[i].Prix + " DH");
                console.log("--------------------");
                break;
            }
        }
    }
}
function AnnulerTicket() {
    const idTicket = Number(prompt("entrer le ID:"));
    let index;
    let ticket;
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].id ===idTicket)
            {
            ticket = tickets[i];
            index = i;
            break;
    }
    } if (!ticket) {
        console.log("Ticket introuvable");
    }
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id === ticket.tripId) {
            trips[i].availableSeats++;
            tickets.splice(index,1);
            console.log("ticket annuler!");
        }
    }
}
function RechercheTicket() {
    let nom = prompt("Nom du passager : ");
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].nom=== nom) {
            console.log("Ticket #" + tickets[i].id);
            console.log("Passager : " + tickets[i]. nom);
            console.log("Place : " + tickets[i].place);
            console.log("Prix : " + tickets[i].Prix+" DH");
            return;
        }
    }
    console.log("Aucun ticket trouve");
}
function FiltrerTrajets(){
     const ville=prompt("ville de depart:");
     let trouve=false;
     for(let i=0;i<trips.length;i++){
        if(trips[i].departure===ville){
           console.log(trips[i].departure+"->"+trips[i].destination+ ":"+ trips[i].price+"DH");
        }
        trouve=true;
     }
     if(trouve=false){
       console.log("aucune trajet");
     }
}
function trierTrajets(){
    let tem=0;
   for(let i=0;i<trips.length;i++){
    for(let j=0;j<trips[i].length-i-1;j++){ 
        if(trips[j].price>trips[j+1].price){
            tem=trips[j].price;
            trips[j].price=trips[j+1];
            trips[j+1]=tem;
        } 
    }
   }
}
function Statistiques(){
    console.log("les nombre du tickets:"+tickets.length);
}
function menu() {
    let choix;
    do {
        console.log(" RAILWAY MANAGER ");
        console.log("1. Afficher les trajets");
        console.log("2. Acheter un ticket");
        console.log("3. Afficher les tickets");
        console.log("4. Annuler un ticket");
        console.log("5. Rechercher un ticket");
        console.log("6. Filtrer les trajets");
        console.log("7. Trier les trajets");
        console.log("8. Statistiques");
        console.log("0. Quitter");
        choix = Number(prompt("entrer votre choix:"));
        switch (choix) {
            case 1:
                AfficheTrajet();
                break;
            case 2:
                AcheterTicket();
                break;
            case 3:
                AfficherTicket();
                break;
            case 4:
                AnnulerTicket();
                break;
            case 5:
                RechercheTicket();
                break;
            case 6:
                FiltrerTrajets();
                break;
            case 7:
                trierTrajets();
                break;
            case 8:
                statistique();
                break;
            case 0:
                console.log("Quiter!");
                break;
            default:
                console.log("votre choix invalide");
        }
    }
    while (choix !== 0);
} menu();


