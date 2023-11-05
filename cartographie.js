document.addEventListener('DOMContentLoaded', function() {
    // Création de la carte
    var mymap = L.map('map').setView([-12.792237454331076, 45.132515471669976], 11);

    // Ajout de la couche de tuiles OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(mymap);

	const lieuxtIcon = L.icon({
    iconUrl: './data/Lieux.png',
    iconSize: [25, 25]
	});

    // Création d'un groupe de clusters de marqueurs
    var markers = L.markerClusterGroup();

    // Votre liste d'espaces numériques
    var espacesNumeriques = [
        {
            "Espace numérique": "Cité des métiers",
            "Commune": "MAMOUDZOU",
            "Longitude": 45.22734404660733,
            "Latitude": -12.78261039191461,
            "Nom animateur": "SAID ABDOU NDZAKOU",
            "Prénom animateur": "Fatima",
            "Téléphone": "0639 71 94 56",
            "Courriel": "fabdou@gipco976.fr",
            "Adresse": "Rue du Lycée Younoussa BAMANA",
            "Code postal": "97600"
        },
        {
            "Espace numérique": "Espace numérique",
            "Commune": "M'GOMBANI",
            "Longitude": 45.2329626,
            "Latitude": -12.7828363,
            "Nom animateur": "DARMI",
            "Prénom animateur": "Oubi",
            "Téléphone": "06 66 13 17 11",
            "Courriel": "oubidarm24@gmail.com",
            "Adresse": "MJC Mgombani",
            "Code postal": "97600"
        },
        {
            "Espace numérique": "Espace numérique",
            "Commune": "PASSAMAINTY",
            "Longitude": 45.20916,
            "Latitude": -12.8011275,
            "Nom animateur": "SAIDINA",
            "Prénom animateur": "Halima",
            "Téléphone": "0269 66 50 10",
            "Courriel": "s.halima@mamoudzou.yt",
            "Adresse": "Médiathèque Municipale Rama Msa, 4 allée vers stade de Football Passamainty",
            "Code postal": "97600"
        },
        {
            "Espace numérique": "Espace numérique",
            "Commune": "MANGAJOU",
            "Longitude": 45.1165192,
            "Latitude": -12.8446053,
            "Nom animateur": "ATTOUMANI",
            "Prénom animateur": "Mohamadi",
            "Téléphone": "0639 29 85 24",
            "Courriel": "pij@mairiedesada.fr",
            "Adresse": "MJC, Rue Mairie Annexe de Mangajou",
            "Code postal": "97640"
        },
        {
            "Espace numérique": "Espace numérique",
            "Commune": "COMBANI",
            "Longitude": 45.132515471669976,
            "Latitude": -12.792237454331076,
            "Nom animateur": "RAZENA CHANFI MARI",
            "Prénom animateur": " ",
            "Téléphone": "0639 07 83 25",
            "Courriel": "cdm.espacenum@gmail.com",
            "Adresse": "14 route coconi",
            "Code postal": "97680"
        },
        {
            "Espace numérique": "Espace numérique",
            "Commune": "POROANI",
            "Longitude": 45.1419095,
            "Latitude": -12.892076,
            "Nom animateur": "YOUCHAOUN",
            "Prénom animateur": "SAID",
            "Téléphone": "0639054259",
            "Courriel": "youchaoun.said@conseiller-numerique.fr",
            "Adresse": "4 rue Daraja Koupka Poroani",
            "Code postal": "97620"
        },
        {
            "Espace numérique": "Espace numérique",
            "Commune": "ACOUA",
            "Longitude": 45.0589372,
            "Latitude": -12.7243245,
            "Nom animateur": "MAOULIDA",
            "Prénom animateur": "Boura",
            "Téléphone": "06 39 06 88 13",
            "Courriel": "maoulida.raihana976@gmail.com",
            "Adresse": "Foyer des jeunes Acoua",
            "Code postal": "97630"
        },
        {
            "Espace numérique": "Espace numérique",
            "Commune": "HAMJAGO",
            "Longitude": 45.0743117,
            "Latitude": -12.6888807,
            "Nom animateur": "ABDOU",
            "Prénom animateur": "Moustoifa",
            "Téléphone": "0639 69 57 84",
            "Courriel": "moustoifa.abdou@mairie-mtsamboro.fr",
            "Adresse": "12 avenue du stade – Hamjago",
            "Code postal": "97630"
        },
        {
            "Espace numérique": "Espace numérique",
            "Commune": "CHEMBENYOUMBA",
            "Longitude": 45.0761774,
            "Latitude": -12.764092,
            "Nom animateur": "ANLI HELI",
            "Prénom animateur": "Fatima",
            "Téléphone": "0639 29 19 70",
            "Courriel": "anlihelikassim2102@gmail.com",
            "Adresse": "bibliothèque municipale de Mtsangamouji",
            "Code postal": "97650"
        },
        {
            "Espace numérique": "Espace numérique",
            "Commune": "BANDRABOUA",
            "Longitude": 45.1221926,
            "Latitude": -12.7045482,
            "Nom animateur": "MADI KOPA",
            "Prénom animateur": "Faira",
            "Téléphone": "0639 07 17 33",
            "Courriel": "fmadi@gipco976.fr",
            "Adresse": "238 rue de l’hôtel de ville Mairie de Bandraboua",
            "Code postal": "97650"
        },
        {
            "Espace numérique": "Espace numérique",
            "Commune": "KOUNGOU",
            "Longitude": 45.2067459,
            "Latitude": -12.735753,
            "Nom animateur": "ABOUBACAR",
            "Prénom animateur": "Abdou Miradji",
            "Téléphone": "0639 06 60 03",
            "Courriel": "aabdou@gipco976.fr",
            "Adresse": "Village de Koungou",
            "Code postal": "97600"
        },
        {
            "Espace numérique": "Espace numérique",
            "Commune": "PAMANDZI",
            "Longitude": 45.2746515,
            "Latitude": -12.7983446,
            "Nom animateur": "MAC LUKY",
            "Prénom animateur": "Arnaud",
            "Téléphone": "0639 21 78 89",
            "Courriel": "pij@mairie-pamandzi.fr",
            "Adresse": "Rue de l’AJP",
            "Code postal": "97610"
        },
        {
            "Espace numérique": "Espace numérique",
            "Commune": "KANI-BE",
            "Longitude": 45.1119005,
            "Latitude": -12.9649896,
            "Nom animateur": "HANAFI",
            "Prénom animateur": "Noudjoumi",
            "Téléphone": "06 93 85 13 08",
            "Courriel": "mediateur.numerique@mairiedekanikeli.fr",
            "Adresse": "6 rue ancien terrain kani-bé",
            "Code postal": "97625"
        },
        {
            "Espace numérique": "Espace numérique",
            "Commune": "M'ZOUAZIA",
            "Longitude": 45.1017045,
            "Latitude": -12.9259338,
            "Nom animateur": "SALIM",
            "Prénom animateur": "Saalati",
            "Téléphone": "06 39 21 69 50",
            "Courriel": "espace-numerique@boueni.fr",
            "Adresse": "Foyer des jeunes de Mzouasia",
            "Code postal": "97620"
        }
    ];
	
	var horaires = {
  "Lundi": {
    "MAMOUDZOU": "08h00 - 16h00",
    "M'GOMBANI": "08h00 - 16h00",
    "PASSAMAINTY": "",
    "MANGAJOU": "07h30 - 16h00",
    "COMBANI": "08h00 - 16h00",
    "POROANI": "07h30 - 16h30",
    "ACOUA": "7h00 - 15h30",
    "HAMJAGO": "7h00 - 15h30",
    "CHEMBENYOUMBA": "08h30 - 17h15",
    "BANDRABOUA": "07h30 - 12h00",
    "KOUNGOU": "7h00 - 16h00",
    "PAMANDZI": "08h00 - 12h00",
    "KANI-BE": "07h30 - 16h00",
    "M'ZOUAZIA": "07h15 - 16h00"
  },
  "Mardi": {
    "MAMOUDZOU": "08h00 - 16h00",
    "M'GOMBANI": "08h00 - 16h00",
    "PASSAMAINTY": "09h00 - 17h00",
    "MANGAJOU": "07h30 - 16h00",
    "COMBANI": "08h00 - 16h00",
    "POROANI": "07h30 - 16h30",
    "ACOUA": "7h00 - 15h30",
    "HAMJAGO": "7h00 - 15h30",
    "CHEMBENYOUMBA": "08h30 - 17h15",
    "BANDRABOUA": "07h30 - 12h00",
    "KOUNGOU": "7h00 - 16h00",
    "PAMANDZI": "08h00 - 12h00",
    "KANI-BE": "07h30 - 16h00",
    "M'ZOUAZIA": "07h15 - 16h00"
  },
  "Mercredi": {
    "MAMOUDZOU": "08h00 - 16h00",
    "M'GOMBANI": "08h00 - 16h00",
    "PASSAMAINTY": "09h00 - 17h00",
    "MANGAJOU": "07h30 - 16h00",
    "COMBANI": "08h00 - 16h00",
    "POROANI": "07h30 - 16h30",
    "ACOUA": "7h00 - 15h30",
    "HAMJAGO": "7h00 - 15h30",
    "CHEMBENYOUMBA": "08h30 - 17h15",
    "BANDRABOUA": "07h30 - 12h00",
    "KOUNGOU": "7h00 - 16h00",
    "PAMANDZI": "08h00 - 12h00",
    "KANI-BE": "07h30 - 16h00",
    "M'ZOUAZIA": "07h15 - 16h00"
  },
  "Jeudi": {
    "MAMOUDZOU": "08h00 - 16h00",
    "M'GOMBANI": "08h00 - 16h00",
    "PASSAMAINTY": "",
    "MANGAJOU": "07h30 - 16h00",
    "COMBANI": "08h00 - 16h00",
    "POROANI": "07h30 - 16h30",
    "ACOUA": "7h00 - 15h30",
    "HAMJAGO": "7h00 - 15h30",
    "CHEMBENYOUMBA": "08h30 - 17h15",
    "BANDRABOUA": "07h30 - 12h00",
    "KOUNGOU": "7h00 - 16h00",
    "PAMANDZI": "08h00 - 12h00",
    "KANI-BE": "07h30 - 16h00",
    "M'ZOUAZIA": "07h15 - 16h00"
  },
  "Vendredi": {
    "MAMOUDZOU": "08h00 - 15h00",
    "M'GOMBANI": "08h00 - 16h00",
    "PASSAMAINTY": "09h00 - 17h00",
    "MANGAJOU": "07h30 - 16h00",
    "COMBANI": "08h00 - 16h00",
    "POROANI": "07h30 - 16h30",
    "ACOUA": "7h00 - 15h30",
    "HAMJAGO": "7h00 - 15h30",
    "CHEMBENYOUMBA": "08h30 - 17h15",
    "BANDRABOUA": "07h30 - 12h00",
    "KOUNGOU": "7h00 - 12h00",
    "PAMANDZI": "08h00 - 12h00",
    "KANI-BE": "07h30 - 16h00",
    "M'ZOUAZIA": "07h15 - 11h15"
  }
};



    espacesNumeriques.forEach(function(esp) {
        // Création d'un marqueur pour chaque espace numérique
        var marqueur = L.marker([esp.Latitude, esp.Longitude], { icon: lieuxtIcon })
            .bindPopup(
                `Animateur : ${esp["Prénom animateur"]} ${esp["Nom animateur"]}<br>` +
                `Téléphone : ${esp.Téléphone}<br>` +
                `Courriel : ${esp.Courriel}<br>` +
                `Adresse : ${esp.Adresse}, ${esp["Code postal"]}`
	
            );

        marqueur.on('click', function() {
            var boiteInfo = document.getElementById('boiteinfo');
            boiteInfo.innerHTML = 
                `Nom animateur : ${esp["Nom animateur"]}<br>` +
                `Prénom animateur : ${esp["Prénom animateur"]}<br>` +
                `Téléphone : ${esp.Téléphone}<br>` +
                `Courriel : ${esp.Courriel}<br>` +
                `Adresse : ${esp.Adresse}<br>` +
                `Code postal : ${esp["Code postal"]}`;
				
				var commune = esp["Commune"];
            var jourLundi = "Lundi"; 
			var jourMardi = "Mardi";
			var jourMercredi = "Mercredi";
			var jourJeudi = "Jeudi";
			var jourVendredi = "Vendredi";
			
            var horaireElement = document.getElementById('horaires');
            horaireElement.innerHTML = "<strong>" + commune  + " </strong> <br> <br> " + jourLundi + " : " + horaires[jourLundi][commune]+ " <br> " + 
			jourMardi+ " : " + horaires[jourMardi][commune]+ " <br> "+
			jourMercredi+ " : " + horaires[jourMercredi][commune]+ " <br> "+
			jourJeudi+ " : " + horaires[jourJeudi][commune]+ " <br> "+
			jourVendredi+ " : " + horaires[jourVendredi][commune];
        });

        // Ajout du marqueur au groupe de clusters
        markers.addLayer(marqueur);
    });

    // Ajout du groupe de clusters à la carte
    mymap.addLayer(markers);
});
