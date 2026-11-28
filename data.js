/* ============================================================
   DATI WEB CUP – CALCIO 2026
   Fonte: grafiche e Gazzettino delle landing Mailup.
   Marcatori: "Cognome N." + eventuale numero gol ("Serio 3").
   "Autorete" non entra nella classifica marcatori.
   ============================================================ */
const DATA = {

"over50/webcup": {
  edizione: "2026 · IV edizione", stato: "Conclusa",
  podio: ["Red Devils","Zebras","Net Ambiente"],
  qualificate: 4,
  squadre: ["Fuori Porta","Net Ambiente","Red Devils","Fire Pro","Caroli Elettronica","Zebras"],
  partite: [
    {fase:"Girone", g:1, data:"14/03", casa:"Net Ambiente", ospite:"Fuori Porta", gc:4, go:3, m:["Braccioforte 2, Lucarella, Rocchetti","Colucci M. 2, Carovigno"]},
    {fase:"Girone", g:1, data:"15/03", casa:"Fire Pro", ospite:"Red Devils", gc:10, go:7, m:["Semeraro F. 3, Fumarola 2, Semeraro G. 2, Santoro 3","Ruggieri, Chieppa 2, Occhinegro, Venere 2, Marinuzzi"]},
    {fase:"Girone", g:1, data:"15/03", casa:"Caroli Elettronica", ospite:"Zebras", gc:8, go:8, m:["Lacatena 3, Palese M. 2, Lacirignola, Albanese, Di Bari I.","Caramia P. 5, Olivieri D. 2, Tagliente G."]},
    {fase:"Girone", g:2, data:"21/03", casa:"Fuori Porta", ospite:"Fire Pro", gc:5, go:1, m:["Minardi 2, Colucci S., Colucci D., Fragnelli","Taldone"]},
    {fase:"Girone", g:2, data:"22/03", casa:"Red Devils", ospite:"Caroli Elettronica", gc:7, go:6, m:["Chieppa 3, Marinuzzi, Basile 2, Scialpi","Lacatena 2, Albanese 3, Di Bari I."]},
    {fase:"Girone", g:2, data:"22/03", casa:"Net Ambiente", ospite:"Zebras", gc:8, go:4, m:["Serio 3, Montanaro 3, Bello, Braccioforte","Caramia P. 2, Tagliente G. 2"]},
    {fase:"Girone", g:3, data:"11/04", casa:"Fire Pro", ospite:"Caroli Elettronica", gc:8, go:4, m:["Santoro 5, Filomena A. 2, Gidiuli","Albanese 2, Lacatena, Pagnelli"]},
    {fase:"Girone", g:3, data:"12/04", casa:"Zebras", ospite:"Fuori Porta", gc:1, go:0, m:["Tagliente G.",""]},
    {fase:"Girone", g:3, data:"12/04", casa:"Net Ambiente", ospite:"Red Devils", gc:5, go:5, m:["Serio 2, Montanaro, Braccioforte, Rocchetti","Chieppa 3, Scialpi, Venere"]},
    {fase:"Girone", g:4, data:"18/04", casa:"Fuori Porta", ospite:"Red Devils", gc:2, go:2, m:["Colucci M., Carovigno","Chieppa, Scialpi"]},
    {fase:"Girone", g:4, data:"19/04", casa:"Fire Pro", ospite:"Zebras", gc:2, go:3, m:["Gidiuli, Semeraro","Olivieri D., Tagliente G., Caramia P."]},
    {fase:"Girone", g:4, data:"19/04", casa:"Net Ambiente", ospite:"Caroli Elettronica", gc:5, go:7, m:["Serio 4, Autorete","Palese M. 4, Albanese 3"]},
    {fase:"Girone", g:5, data:"02/05", casa:"Fire Pro", ospite:"Net Ambiente", gc:3, go:7, m:["Taldone 2, Fumarola","Montanaro 2, Rocchetti, Serio 3, Lucarella"]},
    {fase:"Girone", g:5, data:"03/05", casa:"Red Devils", ospite:"Zebras", gc:8, go:1, m:["Scialpi, Carbotti 2, Chieppa 3, Venere, Muscato","Caramia P."]},
    {fase:"Girone", g:5, data:"03/05", casa:"Caroli Elettronica", ospite:"Fuori Porta", gc:10, go:3, m:["Lacirignola, Palese M. 5, Albanese 3, Pricci","Colucci D. 3"]},
    {fase:"Semifinale", data:"24/05", casa:"Red Devils", ospite:"Caroli Elettronica", gc:5, go:3, m:["Chieppa 4, Scialpi","Albanese 2, Palese M."]},
    {fase:"Semifinale", data:"24/05", casa:"Net Ambiente", ospite:"Zebras", gc:2, go:3, m:["Serio 2","Santoro 2, Carovigno"]},
    {fase:"Finale 3° posto", data:"30/05", casa:"Net Ambiente", ospite:"Caroli Elettronica", gc:7, go:5, m:["Serio 6, Montanaro","Lacirignola 3, Albanese, Ruggieri"]},
    {fase:"Finale", data:"31/05", casa:"Red Devils", ospite:"Zebras", gc:0, go:0, rig:"2-1", m:["",""]}
  ],
  marcatoriUfficiali: [["Serio Andrea","Net Ambiente",20],["Chieppa Stefano","Red Devils",16],["Albanese Angelo","Caroli Elettronica",15],["Palese Mimmo","Caroli Elettronica",12],["Santoro Angelo","Fire Pro / Zebras",10],["Caramia Pino","Zebras",9],["Montanaro Alessandro","Net Ambiente",7],["Lacatena Ottaviano","Caroli Elettronica",6],["Tagliente Graziano","Zebras",5]],
  ballon: [["Scialpi Giuseppe",15],["Palese Mimmo",9],["Montanaro Alessandro",7],["Carbotti Giuseppe",6],["Fragnelli Cesare",5]],
  guanto: [["Gnisci Francesco",22],["Carrieri Francesco",20],["Sergio Tony",8],["Vinci Leo",7],["Pastore Vincenzo",4],["Zito Gianfranco",4],["Buonfrate Franco",3]],
  giudice: [
    {g:1, amm:[["Lacatena Ottaviano","Caroli Elettronica"],["Chieppa Stefano","Red Devils"],["Carbotti Giuseppe","Red Devils"],["Serio Andrea","Net Ambiente"],["Bello Piero","Net Ambiente"],["Palese Ciccio","Zebras"]]},
    {g:2},
    {g:3, amm:[["Braccioforte Piero","Net Ambiente"],["Di Bari Ignazio","Caroli Elettronica"]]},
    {g:4, esp:[["Fragnelli Cesare","Fuori Porta","doppia ammonizione"]]}
  ],
  media: {gallery:607},
  albo: [["2023","Tecsam"],["2024","Pizze e Delizie"],["2025","Red Devils"],["2026","Red Devils"]]
},

"under/webcup": {
  edizione: "2026 · IV edizione", stato: "Conclusa",
  podio: ["Real Madrink","Team Gialloblu","FC Catenaccio"],
  qualificate: 2,
  gironi: { A:["FC Catenaccio","Paris St. Gennar","FC Mai in Forma","DCF Ziwoondello"], B:["Team Gialloblu","Real Madrink","Como","Titanium Team"] },
  partite: [
    {fase:"Girone", g:1, girone:"B", data:"19/03", casa:"Team Gialloblu", ospite:"Titanium Team", gc:6, go:3, m:["Gentile 4, Conte, Di Giuseppe","Salamina A., Colucci 2"]},
    {fase:"Girone", g:1, girone:"A", data:"19/03", casa:"FC Catenaccio", ospite:"FC Mai in Forma", gc:5, go:4, m:["Castellana V. 3, Campanella, Carbotti","Desiati, Nigri, Lisi, Pulito"]},
    {fase:"Girone", g:1, girone:"A", data:"21/03", casa:"Paris St. Gennar", ospite:"DCF Ziwoondello", gc:6, go:1, m:["D'Amico, Calella, Santorsola, Scialpi, Pastore 2","Bello"]},
    {fase:"Girone", g:1, girone:"B", data:"21/03", casa:"Como", ospite:"Real Madrink", gc:7, go:4, m:["Basile 3, Carrieri D. 2, D'Onghia A., Granaldi","Massafra 3, Mastrovito"]},
    {fase:"Girone", g:2, girone:"A", data:"27/03", casa:"FC Catenaccio", ospite:"DCF Ziwoondello", gc:8, go:1, m:["Castellana F. 2, Castellana V. 2, Campanella 2, Conserva 2","Caroli R."]},
    {fase:"Girone", g:2, girone:"A", data:"27/03", casa:"FC Mai in Forma", ospite:"Paris St. Gennar", gc:5, go:2, m:["Camassa 2, Nigri, Taldone, Pulito","Calella 2"]},
    {fase:"Girone", g:2, girone:"B", data:"28/03", casa:"Como", ospite:"Team Gialloblu", gc:5, go:7, m:["D'Onghia A. 2, Iudici, Carrieri D., Granaldi","Conte 2, Gentile 2, Palazzo, Santoro, Carovigno"]},
    {fase:"Girone", g:2, girone:"B", data:"28/03", casa:"Titanium Team", ospite:"Real Madrink", gc:3, go:9, m:["Lecini, Colucci, Caroli","Massafra 6, Marangi A. 2, Mastrovito"]},
    {fase:"Girone", g:3, girone:"A", data:"09/04", casa:"DCF Ziwoondello", ospite:"FC Mai in Forma", gc:1, go:11, m:["Caroli P.","Taldone 3, Muscato 2, Camassa 3, Pulito, Sufka, Lisi"]},
    {fase:"Girone", g:3, girone:"A", data:"09/04", casa:"FC Catenaccio", ospite:"Paris St. Gennar", gc:2, go:5, m:["Castellana V., Castellana F.","Santorsola 3, Scialpi, Carriero"]},
    {fase:"Girone", g:3, girone:"B", data:"11/04", casa:"Titanium Team", ospite:"Como", gc:3, go:3, m:["Lenoci 2, Lecini","D'Onghia O., Cassano, D'Onghia A."]},
    {fase:"Girone", g:3, girone:"B", data:"11/04", casa:"Real Madrink", ospite:"Team Gialloblu", gc:3, go:4, m:["Marangi A. 2, Massafra","Santoro, Gentile, Conte, Ancona"]},
    {fase:"Girone", g:4, girone:"A", data:"16/04", casa:"Paris St. Gennar", ospite:"DCF Ziwoondello", gc:6, go:4, m:["Santorsola 3, Pastore, Carriero 2","Bello, Devito, Caroli P., Schiavone"]},
    {fase:"Girone", g:4, girone:"A", data:"16/04", casa:"FC Catenaccio", ospite:"FC Mai in Forma", gc:3, go:2, m:["Semeraro 3","Santoro G., Taldone"]},
    {fase:"Girone", g:4, girone:"B", data:"18/04", casa:"Real Madrink", ospite:"Como", gc:7, go:5, m:["Pascullo 3, Mastrovito 2, Massafra 2","Iudici, D'Onghia A. 2, Carrieri D., D'Onghia O."]},
    {fase:"Girone", g:4, girone:"B", data:"18/04", casa:"Team Gialloblu", ospite:"Titanium Team", gc:8, go:1, m:["Fortunato 4, Gentile 2, Conte, Carrieri N.","Lenoci"]},
    {fase:"Girone", g:5, girone:"A", data:"30/04", casa:"DCF Ziwoondello", ospite:"FC Catenaccio", gc:4, go:5, m:["Rossi 2, Caroli P., Devito","Semeraro 2, Cardone, Campanella, Castellana V."]},
    {fase:"Girone", g:5, girone:"A", data:"30/04", casa:"Paris St. Gennar", ospite:"FC Mai in Forma", gc:6, go:2, m:["Carriero 3, Napolitano, Calella, Palese","Sufka, Pozzovivo"]},
    {fase:"Girone", g:5, girone:"B", data:"02/05", casa:"Team Gialloblu", ospite:"Como", gc:4, go:6, m:["Carovigno, Carrieri N., Conte, Santoro","Cassano 2, D'Onghia O. 2, Basile, Carrieri D."]},
    {fase:"Girone", g:5, girone:"B", data:"02/05", casa:"Real Madrink", ospite:"Titanium Team", gc:10, go:1, m:["Cazzato 2, Massafra 6, Mastrovito 2","Lenoci"]},
    {fase:"Girone", g:6, girone:"A", data:"08/05", casa:"FC Mai in Forma", ospite:"DCF Ziwoondello", gc:4, go:7, m:["Camassa 2, Paladini, Sufka","Rossi 2, Devito 3, Bello 2"]},
    {fase:"Girone", g:6, girone:"A", data:"08/05", casa:"Paris St. Gennar", ospite:"FC Catenaccio", gc:0, go:1, m:["","Cardone"]},
    {fase:"Girone", g:6, girone:"B", data:"09/05", casa:"Como", ospite:"Titanium Team", gc:8, go:4, m:["D'Onghia O., D'Onghia A. 2, Cassano 3, Carrieri D., Granaldi","Lenoci 3, Colucci"]},
    {fase:"Girone", g:6, girone:"B", data:"09/05", casa:"Team Gialloblu", ospite:"Real Madrink", gc:2, go:6, m:["Conte, Fortunato","Massafra 3, Mastrovito, Marangi A. 2"]},
    {fase:"Semifinale", data:"23/05", casa:"FC Catenaccio", ospite:"Team Gialloblu", gc:3, go:5, m:["Castellana V., Semeraro, Campanella","Gentile 3, Fortunato, Di Giuseppe"]},
    {fase:"Semifinale", data:"23/05", casa:"Paris St. Gennar", ospite:"Real Madrink", gc:3, go:6, m:["Santorsola, Lenoci 2","Marangi A. 3, Massafra 3"]},
    {fase:"Finale 3° posto", data:"30/05", casa:"FC Catenaccio", ospite:"Paris St. Gennar", gc:4, go:4, rig:"1-0", m:["Castellana V., Campanella, Semeraro 2","Lenoci 3, Santorsola"]},
    {fase:"Finale", data:"31/05", casa:"Real Madrink", ospite:"Team Gialloblu", gc:6, go:3, m:["Massafra 3, Marangi A. 3","Gentile, Fortunato, Di Giuseppe"]}
  ],
  marcatoriUfficiali: [["Massafra Tiziano","Real Madrink",23],["Gentile Danilo","Team Gialloblu",12],["Lenoci Federico","Titanium Team",9],["Marangi Andrea","Real Madrink",9],["D'Onghia Antonio","Como",8],["Santorsola Gianluca","Paris St. Gennar",8],["Castellana Vanni","FC Catenaccio",8]],
  ballon: [["Massafra Tiziano",13],["Rossi Alessandro",9],["Castellana Vanni",9],["Santorsola Gianluca",8],["Fortunato Ezio",7],["Carriero Manuel",6],["Lenoci Federico",6]],
  guanto: [["Ludovico Alessandro",19],["Narcisi Gianni",11],["Colucci F. Cosimo",10],["Natola Cosimo",8],["Conserva Antonio",7],["Colonna Domenico",6],["Luprano Nicola",5]],
  giudice: [
    {g:1, amm:[["Nigri Fabrizio","FC Mai in Forma"],["Mastrovito Angelo","Real Madrink"]]},
    {g:2, amm:[["Iudici Francesco","Como"],["Basile William","Como"],["Carrieri Davide","Como"]]},
    {g:3, amm:[["Gentile Danilo","Team Gialloblu"],["Pascullo Graziano","Real Madrink"],["Marangi Piero","Real Madrink"],["Corsi Giuseppe","Team Gialloblu"],["Iudici Francesco","Como"],["Nigri Fabrizio","FC Mai in Forma"],["Vinci Marco","FC Mai in Forma"]],
          esp:[["Marangi Piero","Real Madrink","rosso diretto"]]},
    {g:4}
  ],
  media: {gallery:772},
  albo: [["2025","HG Five"],["2026","Real Madrink"]]
},

"over50/mundialito": {
  edizione: "2026", stato: "Conclusa", rose: "ROSE_MUNDIALITO_O50", fotoPre: "M:",
  podio: ["Net Ambiente","Fuori Porta","Zebras"],
  squadre: ["Net Ambiente","Fuori Porta","Zebras","Red Devils"],
  partite: [
    {fase:"Semifinale", data:"27/09", casa:"Fuori Porta", ospite:"Zebras", gc:5, go:4, m:["Colucci M., Carovigno 2, Fragnelli, Zaurino","Autorete, Raguso, Rocchetti, Caramia P."]},
    {fase:"Semifinale", data:"27/09", casa:"Net Ambiente", ospite:"Red Devils", gc:7, go:2, m:["Semeraro, Serio 3, Montanaro, Marangi, Albanese","Scialpi, Chieppa"]},
    {fase:"Finale 3° posto", data:"04/10", casa:"Zebras", ospite:"Red Devils", gc:7, go:4, m:["Caramia P. 3, Olivieri D. 3, Santoro","Braccioforte, Angelini, Montinaro, Scialpi"]},
    {fase:"Finale", data:"04/10", casa:"Net Ambiente", ospite:"Fuori Porta", gc:7, go:5, m:["Semeraro 3, Serio 4","Carovigno 2, Autorete, Zaurino 2"]}
  ],
  albo: [["2022","Thermobasil"],["2023","Big Ben"],["2024","Pizze e Delizie"],["2025","Stallion's"],["2026","Net Ambiente"]]
},

"under/mundialito": {
  edizione: "2026", stato: "In corso", rose: "ROSE_MUNDIALITO_U", fotoPre: "MU:", noFotoFallback: true,
  squadre: ["San Francesco","Over The Top All Star","SDC Scappati di Casa","FC Gial"],
  partite: [
    {fase:"Semifinale", data:"21/11", casa:"San Francesco", ospite:"Over The Top All Star", gc:1, go:4, m:["Carrieri N.","Santoro V. 3, Chieppa"]},
    {fase:"Semifinale", data:"21/11", casa:"SDC Scappati di Casa", ospite:"FC Gial", gc:3, go:2, m:["Marinuzzi 2, Di Giuseppe","Trani 2"]},
    {fase:"Finale 3° posto", data:"Sabato 28/11 · ore 17:00", casa:"San Francesco", ospite:"FC Gial", gc:null, go:null},
    {fase:"Finale", data:"Sabato 28/11 · ore 18:00", casa:"Over The Top All Star", ospite:"SDC Scappati di Casa", gc:null, go:null}
  ]
},

"under/supercoppa": {
  edizione: "2026", stato: "In programma",
  squadre: ["Real Madrink"],
  partite: [
    {fase:"Finale", data:"Domenica 13/12 · orario da definire", casa:"Real Madrink", ospite:"Vincente Mundialito Under", gc:null, go:null, nota:"Vincitrice WEB CUP vs vincitrice Mundialito"}
  ]
},

"over50/supercoppa": {
  edizione: "2026", stato: "In programma", rose: "ROSE_SUPERCOPPA_O50",
  squadre: ["Red Devils","Net Ambiente"],
  partite: [
    {fase:"Finale", data:"Domenica 13/12 · ore 15:00", casa:"Red Devils", ospite:"Net Ambiente", gc:null, go:null, nota:"Vincitrice WEB CUP vs vincitrice Mundialito"}
  ]
}
};

/* ROSE (sezione TEAM ISCRITTI) — C = capitano, U = Under fuori quota, M = calciomercato */
const ROSE = {
  "Red Devils": ["Devito Daniele|C|I|n:infortunato, non ha giocato","Montinaro Giuseppe","Carbotti Giuseppe|VC","Venere Michele","Scialpi Giuseppe","Colucci Domenico|M|n:in prestito da Fuori Porta","Occhinegro Ivano","Simone Tony","Muscato Michele","Marinuzzi Gianni","Zaurino Nicola|M|n:in prestito da Fuori Porta","Chieppa Stefano|U","Basile Francesco","Ruggieri Ernesto"],
  "Zebras": ["Giuliani Renzo","Olivieri Donato","Carrieri Francesco","Carbotti Gianni","Martucci Mauro","Castellana Michelangelo","Leone Francesco","Palese Ciccio","Santoro Angelo|M|n:ex Fire Pro","Tagliente Graziano","Caramia Pino|C|U","Carovigno Graziano|M|n:in prestito da Fuori Porta"],
  "Fuori Porta": ["Pastore Vincenzo","Papapietro Francesco","Chiarelli Domenico","Colucci Stefano","Minardi Michele","Zaurino Nicola|n:in prestito ai Red Devils","Capitaneo Antonio","Marangi Piero","Fragnelli Cesare","Colucci Domenico|C|n:in prestito ai Red Devils","Colucci Maurizio|U","Carovigno Graziano|n:in prestito agli Zebras"],
  "Net Ambiente": ["Gnisci Francesco","Filomena Antonio|M|n:ex Fire Pro","Montanaro Alessandro","Braccioforte Piero","Amorino Antonio","Ruggieri Gino","Rocchetti Giuseppe","Castellana Arcangelo","Serio Andrea","Bello Piero|C","Lucarella Vincenzo","Lisi Ivan|U"],
  "Caroli Elettronica": ["Zito Gianfranco","Vinci Leo","Ruggieri Michele","Marangi Antonio","Lacirignola Sandro","Pricci Giuseppe","Pagnelli Francesco","Lacatena Ottaviano","Marangi Piero","Di Bari Ignazio|C","Albanese Angelo|U","Palese Cosimo"],
  "Fire Pro": ["Sergio Tony","Filomena Antonio|n:passato a Net Ambiente","Fortunato Lorenzo","Gidiuli Giuseppe","Gaudio Giancarlo","Santoro Angelo|n:passato agli Zebras","Semeraro Giuseppe","Fumarola Giuseppe","Prete Domenico","Demarinis Vincenzo|C","Taldone Fabio|U","Semeraro Fabrizio"],
  "DCF Ziwoondello": ["Melambo Armando","Cervellera Roberto","Serio Salvatore","Rossi Alessandro","Devito Francesco","Schiavone Martino","Aquaro Giuseppe","Caroli Piero","Bello Danilo","Caroli Roberto|C"],
  "FC Catenaccio": ["Narcisi Gianni","Castellana Fabrizio|C","Pastore Francesco","Ceppato Fabio","Caramia Donato","Carbotti Raffaele","Cardone Giorgio","Castellana Vanni","Semeraro Paolo","Palmisano Vanni","Campanella Lorenzo","Conserva Francesco"],
  "Titanium Team": ["Luprano Nicola|C","Fumarulo Vito","Basile Vito","Colucci Stefano","Lenoci Federico|n:passato al Paris St. Gennar","Salamina Francesco","Salamina Alessandro","Camassa Giuseppe","Indelicato Francesco","Lecini Eduart","Caroli Donato","Corsi Giuseppe"],
  "Como": ["Fortunato Cosimo","D'Onghia Orazio","Caramia Giovanni","Granaldi Andrea|n:passato al Real Madrink","D'Onghia Antonio","Carrieri Davide","Cassano Marco","Basile William|C","Iudici Francesco"],
  "Team Gialloblu": ["Natola Cosimo","Carrieri Nicolò","Aquaro Gianni","Zaurino Nicola|n:iscritto anche all'Under","Palazzo Cosimo","Ancona Francesco","Di Giuseppe Ciccio","Gentile Danilo","Carovigno Graziano|n:iscritto anche all'Under","Fortunato Ezio","Conte Ezio|C","Santoro Vanni"],
  "Real Madrink": ["Conserva Antonio","Ancona Martino","Cazzato Mimmo|C","Marangi Piero","Lisi Antonio","Pascullo Graziano","Marangi Andrea","Mastrovito Angelo","Tramacere Valerio","Vizzaro Ivan","Massafra Tiziano","Colonna Domenico","Granaldi Andrea|M|n:ex Como"],
  "FC Mai in Forma": ["Vinci Marco","Desiati Andrea","Pozzovivo Davide","Lisi Lorenzo","Paladini Mario","Santoro Gabriele","Muscato Marco","Taldone Giuseppe","Sufka Jenny","Nigri Fabrizio","Pulito Andrea|C","Camassa Pierpaolo"],
  "Paris St. Gennar": ["Ludovico Alessandro","Palese Alessandro","Damico Nicolas","Scialpi Fabio","Griffi Giovanni","Calella Nicolò","Baccaro Tommaso","Pastore Andrea","Napolitano Angelo","Santorsola Gianluca|C","Carriero Manuel","Lenoci Federico|M|n:ex Titanium Team"]
};

/* ROSE MUNDIALITO (sezione ROSE del Mundialito) */
const ROSE_MUNDIALITO_O50 = {"Red Devils": ["Montinaro Giuseppe", "Carbotti Giuseppe", "Venere Michele", "Scialpi Giuseppe", "Braccioforte Piero", "Occhinegro Ivano", "Simone Tony", "Angelini Martino", "Marinuzzi Gianni", "Colucci Tonio", "Chieppa Stefano|U", "Basile Francesco"], "Zebras": ["Giuliani Renzo", "Carrieri Francesco", "Olivieri Donato", "Martucci Mauro", "Carbotti Gianni", "Castellana Michelangelo", "Santoro Angelo", "Caramia Pino|C|U", "Raguso Antonio", "Ruggieri Michele"], "Fuori Porta": ["Pastore Vincenzo", "Papapietro Francesco", "Chiarelli Domenico", "Colucci Stefano", "Colucci Maurizio|U", "Minardi Michele", "Zaurino Nicola", "Capitaneo Antonio", "Amorino Antonio", "Fragnelli Cesare", "Colucci Domenico|C", "Carovigno Graziano"], "Net Ambiente": ["Gnisci Francesco", "Filomena Antonio", "Montanaro Alessandro", "Marangi Piero", "Ruggieri Gino", "Semeraro Fabrizio", "Serio Andrea", "Bello Piero|C", "Albanese Angelo|U"]};

/* ROSE SUPER COPPA: tutti i convocabili = rosa WEB CUP + rosa Mundialito (senza doppioni) */
function unisciRose(...liste){ const out=[], seen=new Set();
  liste.flat().forEach(x=>{const n=x.split("|")[0].split("|")[0]; const base=n; if(seen.has(base)) return; seen.add(base);
    out.push(x.split("|").filter(f=>f==="C"||f==="VC"||f==="U"||f===base).join("|")); });
  return out; }
const ROSE_SUPERCOPPA_O50 = {
  "Red Devils": unisciRose(ROSE["Red Devils"], ROSE_MUNDIALITO_O50["Red Devils"]),
  "Net Ambiente": unisciRose(ROSE["Net Ambiente"], ROSE_MUNDIALITO_O50["Net Ambiente"]).filter(x=>!x.startsWith("Braccioforte Piero")) /* gioca per i Red Devils */
};

const YT = { highlights:"https://www.youtube.com/playlist?list=PLBaI46Bdemn4", interviste:"https://www.youtube.com/playlist?list=PLIQ_6jqNIIYs", canale:"https://www.youtube.com/@WEBMasculineStoreCUP" };

/* REGOLAMENTO – testo migrato dalle pagine Mailup 674 (Over50) e 675 (Under) */
const REGOLAMENTI = {
 over50: [
  ["Requisiti", ["Tutti i partecipanti devono aver compiuto 50 anni di età.","1 fuori quota con minimo Over 45.","Rosa composta da massimo 12 elementi (tutti e 12 convocabili per il match).","Inviare la propria SQUAD LIST con i componenti della squadra iscritta (massimo 12) che prenderanno parte al torneo (lista non modificabile durante il torneo).","Eventuali componenti non in lista vanno comunicati anzitempo all'organizzatore: la mancata comunicazione può comportare la squalifica della squadra con sconfitta 0-3 a tavolino."]],
  ["Format torneo", "FORMAT"],
  ["Calendario", "CAL"],
  ["Final Four · WEB CUP", ["Semifinali: domenica pomeriggio.","Finali: 1°/2° posto e 3°/4° posto.","Girone unico a 6 squadre: 1ª vs 4ª · 2ª vs 3ª.","2 gironi da 4 squadre: 1ª A vs 2ª B · 1ª B vs 2ª A."]],
  ["Slot di gioco", [
    {sub:"webcup", list:["Sabato: ore 16:00 / 17:00.","Domenica: ore 8:30 / 9:30 e ore 9:30 / 10:30.","1-2 match la domenica mattina, 1-2 match il sabato pomeriggio."]},
    {sub:"mundialito", list:["Domenica pomeriggio: ore 16:00 / 17:00."]},
    {sub:"supercoppa", list:["Domenica pomeriggio: ore 15:00."]}]],
  ["Quote", "QUOTE"],
  ["Iscrizioni", ["Prelazione: le squadre partecipanti all'edizione precedente hanno diritto di prelazione.","Iscrizioni libere: qualsiasi squadra può iscriversi fino al raggiungimento del numero massimo."]],
  ["Info e iscrizioni", ["Daniele Devito · tel/WhatsApp +39 328 318 9045","Vito Basile · tel/WhatsApp +39 389 831 5744","Stefano Marinuzzi · tel/WhatsApp +39 388 307 5509"]]
 ],
 under: [
  ["Requisiti", ["Rosa composta da massimo 12 elementi (tutti e 12 convocabili per il match).","La squadra che scende in campo deve comprendere gli atleti comunicati nella lista d'iscrizione.","Eventuali componenti non in lista vanno comunicati anzitempo all'organizzatore: la mancata comunicazione può comportare la squalifica della squadra con sconfitta 0-3 a tavolino."]],
  ["Format torneo", "FORMAT"],
  ["Calendario", "CAL"],
  ["Final Four · WEB CUP", ["Semifinali e finali a fine maggio.","Finali: 1°/2° posto e 3°/4° posto.","Girone unico: 1ª vs 4ª · 2ª vs 3ª.","2 gironi da 4 squadre: 1ª A vs 2ª B · 1ª B vs 2ª A."]],
  ["Slot di gioco", [
    {sub:"webcup", list:["Giovedì: ore 20:00 e 21:00.","Sabato: ore 16:00 / 17:00.","1-2 match il giovedì, 1-2 match il sabato pomeriggio."]},
    {sub:"mundialito", list:["Sabato pomeriggio: ore 16:00 / 17:00."]},
    {sub:"supercoppa", list:["Domenica mattina: ore 11:00."]}]],
  ["Quote", "QUOTE"],
  ["Iscrizioni", ["Prelazione: le squadre partecipanti all'edizione precedente hanno diritto di prelazione.","Iscrizioni libere: qualsiasi squadra può iscriversi fino al raggiungimento del numero massimo."]],
  ["Info e iscrizioni", ["Vito Basile · tel/WhatsApp +39 389 831 5744","Stefano Marinuzzi · tel/WhatsApp +39 388 307 5509"]]
 ]
};
const REG_FORMAT = {
 webcup: { over50:["Con 6 squadre iscritte: girone unico, le prime 4 classificate passano alle FINAL FOUR di fine maggio.","Con 8 squadre iscritte: due gironi da 4 squadre, passano le prime 2 di ogni girone alle FINAL FOUR di fine maggio.","Durata match: 60 minuti, 2 tempi da 30.","1 match per squadra a settimana (sabato o domenica)."],
           under:["Con 6 squadre iscritte: girone unico, le prime 4 classificate passano alle FINAL FOUR di fine maggio.","Con 8 squadre iscritte: due gironi da 4 squadre, passano le prime 2 di ogni girone alle FINAL FOUR di fine maggio.","Durata match: 50 minuti, 2 tempi da 25.","1 match per squadra a settimana (giovedì o sabato)."] },
 mundialito: ["Si affrontano 4 squadre: hanno la prelazione le prime 4 classificate della WEB CUP dell'anno corrente.","Le SEMIFINALI vengono sorteggiate, poi FINALE 3°/4° posto e FINALISSIMA."],
 supercoppa: ["Si affrontano la vincente della WEB CUP e la vincente del MUNDIALITO.","Se la stessa squadra ha vinto entrambe le competizioni, la vincente della WEB CUP affronta la 2ª classificata della WEB CUP."]
};
const REG_QUOTE = [["webcup","€ 50,00 per squadra a partita"],["mundialito","€ 70,00 per squadra a partita"],["supercoppa","€ 60,00 per squadra · match unico"]];
const REG_IMG = { over50:"ConsoleDocuments/REGOLAMENTO%20OVER50.jpg", under:"1/UNDER%20REGOLAMENTO.jpg" };

/* PREMI – regolamento Pallone d'Oro e Guanto d'Oro (dalle grafiche Mailup 677/678 e 849) */
const REG_PREMI = {
 ballon: {
  titolo:"Pallone d'Oro", sub:"Criterio di votazione",
  intro:"Chi accumulerà il punteggio più alto a fine torneo vincerà il trofeo. Ogni match assegna i seguenti punteggi:",
  punti:[["MVP del match","3 pt","eletto dal direttore di gara per ogni match"],["Voto del Capitano","1 pt","il capitano di ogni team a fine partita, senza poter votare un calciatore della propria squadra"],["Referente Staff WEB CUP","2 pt","i referenti dello staff hanno diritto a un voto per ogni match"]],
  extra:{ over50:"Il Pallone d'Oro è un premio riservato esclusivamente alla categoria OVER50: gli UNDER (fuori quota) non possono concorrere per la vittoria.", under:"Al termine del torneo gli arbitri avranno diritto a un voto extra dal valore di 2 pt." },
  nota:"La classifica Pallone d'Oro viene pubblicata solo durante il girone e resta segreta nella fase finale. I referti delle partite sono comunque consultabili su richiesta."
 },
 guanto: {
  titolo:"Guanto d'Oro", sub:"Miglior portiere",
  intro:"L'arbitro, per ogni match, decreterà il miglior portiere, che guadagnerà punti nella classifica finale. Al termine del torneo, chi accumulerà il punteggio più alto si aggiudicherà il trofeo.",
  punti:[["Miglior portiere del match","3 pt","scelto dall'arbitro"]],
  nota:"In caso di parità di punteggio si terrà conto dei minor gol subiti."
 }
};

/* REGOLAMENTO DI GIOCO – dalle schede "Regolamento WEB CUP Calcio" (Over50: img 14-15 · Under: img 12-13) */
const REG_GIOCO = {
 over50: [
  ["Regolamento di gioco", ["Due tempi regolamentari da 30 minuti.","Nessun intervallo tra i due tempi.","Pallone n. 4 a rimbalzo normale."]],
  ["Regole sul portiere", ["Il portiere può toccare la palla quante volte vuole.","Il portiere non ha la regola dei 4 secondi."]],
  ["Norme di gioco", ["Rimessa laterale: distanza minima di 2 metri obbligatoria. In caso di irregolarità è prevista una sanzione.","Punizioni (dirette o indirette): obbligo di 2 metri di distanza.","Tiro libero al 5° fallo cumulativo. Il 4° fallo verrà segnalato dall'arbitro.","L'unico fallo non cumulativo è la gamba tesa."]],
  ["Rigore \"One Shoot\"", ["In caso di calcio di rigore durante il match si applica la regola del \"One Shoot\": l'azione termina con l'esito del tiro, senza respinta.","In caso di gol si riprende con il calcio d'inizio.","In caso di parata o tiro fuori, la ripresa avviene con una rimessa dal fondo da parte del portiere.","La ripresa del gioco avviene solo dopo il fischio dell'arbitro (non sono consentiti tocchi successivi dopo la conclusione del tiro)."]],
  ["Fasi finali", ["Nelle semifinali e finali non sono previsti tempi supplementari.","In caso di parità si procede con una serie di 3 rigori a oltranza.","Tutti gli atleti disponibili (esclusi quelli con infortuni gravi durante il match) dovranno calciare almeno un rigore."]],
  ["DISCIPLINA", [
    {t:"Sanzioni disciplinari", list:["Diffida dopo 2 ammonizioni, squalifica alla terza ammonizione.","Espulsioni (di ogni tipo): il giocatore non può rientrare nel match ed è squalificato per la partita successiva.","L'espulsione prevede l'inferiorità numerica per 2 minuti; se la squadra in inferiorità subisce un gol può rientrare subito il 5° giocatore.","Le espulsioni non vengono conteggiate nelle diffide."]},
    {t:"Reset delle sanzioni", list:["Al termine del girone di qualificazione il conteggio delle ammonizioni viene azzerato per le semifinali.","Eventuali squalifiche maturate alla 5ª giornata dovranno essere scontate in semifinale."]},
    {t:"Provvedimenti disciplinari straordinari", list:["L'organizzazione si riserva il diritto di valutare espulsioni o intemperanze degli atleti, applicando sanzioni fino a 2 o più giornate di squalifica o l'esclusione dal torneo stesso."]}]],
  ["Sostituzioni e calciomercato dopo la fase a gironi", ["Ogni squadra può effettuare fino a 2 cambi facoltativi nella propria rosa al termine della fase a gironi.","I cambi devono essere comunicati obbligatoriamente prima dell'inizio della fase finale.","È consentito sostituire giocatori in rosa solo con giocatori appartenenti a squadre eliminate durante la fase a gironi.","L'under designato della propria squadra non può essere sostituito."]],
  ["Classifica avulsa", ["In caso di parità in classifica si procede con la classifica avulsa, con questi criteri: punti · scontri diretti · differenza reti · goal fatti · goal subiti · fair play (squadra con meno cartellini)."]],
  ["Norma generale", ["Tutto ciò che non è sopra menzionato è disciplinato dal regolamento vigente del Futsal italiano."]]
 ],
 under: [
  ["Regolamento di gioco", ["Due tempi regolamentari da 25 minuti.","Intervallo di 5 minuti tra i due tempi.","Pallone n. 4 a rimbalzo normale."]],
  ["Regole sul portiere", ["Il portiere può toccare la palla per la seconda volta solo se un avversario l'ha toccata o se, nella costruzione di gioco, la palla ha superato il centrocampo.","Il portiere ha 4 secondi per giocare la palla. L'infrazione comporta un fallo cumulativo e una punizione indiretta."]],
  ["Norme di gioco", ["Rimessa laterale: distanza minima di 2 metri obbligatoria. In caso di irregolarità è prevista una sanzione.","Punizioni (dirette o indirette): obbligo di 2 metri di distanza.","Tiro libero al 6° fallo cumulativo. Il 5° fallo verrà segnalato dall'arbitro.","L'unico fallo non cumulativo è la gamba tesa."]],
  ["Rigore \"One Shoot\"", ["In caso di calcio di rigore durante il match si applica la regola del \"One Shoot\": l'azione termina con l'esito del tiro.","In caso di gol si riprende con il calcio d'inizio.","In caso di parata o tiro fuori, la ripresa avviene con una rimessa dal fondo da parte del portiere.","La ripresa del gioco avviene solo dopo il fischio dell'arbitro (non sono consentiti tocchi successivi dopo la conclusione del tiro)."]],
  ["Fasi finali", ["Nelle semifinali e finali non sono previsti tempi supplementari.","In caso di parità si procede con una serie di 3 rigori a oltranza.","Tutti gli atleti disponibili (esclusi quelli con infortuni gravi durante il match) dovranno calciare almeno un rigore."]],
  ["DISCIPLINA", [
    {t:"Sanzioni disciplinari", list:["Diffida dopo 2 ammonizioni, squalifica alla terza ammonizione.","Espulsioni (di ogni tipo): il giocatore non può rientrare nel match ed è squalificato per la partita successiva.","Le espulsioni non vengono conteggiate nelle diffide."]},
    {t:"Reset delle sanzioni", list:["Al termine del girone di qualificazione il conteggio delle ammonizioni viene azzerato per le semifinali.","Eventuali squalifiche maturate alla 5ª giornata dovranno essere scontate in semifinale."]},
    {t:"Provvedimenti disciplinari straordinari", list:["L'organizzazione si riserva il diritto di valutare espulsioni o intemperanze degli atleti, applicando sanzioni fino a 2 o più giornate di squalifica o l'esclusione dal torneo stesso."]}]],
  ["Classifica avulsa", ["In caso di parità in classifica si procede con la classifica avulsa, con questi criteri: punti · scontri diretti · differenza reti · goal fatti · goal subiti · fair play (squadra con meno cartellini)."]],
  ["Norma generale", ["Tutto ciò che non è sopra menzionato è disciplinato dal regolamento vigente del Futsal italiano."]]
 ]
};


/* ROSE MUNDIALITO UNDER 2026 – dalle grafiche "Convocati" (foto non ancora disponibili: sagoma) */
const ROSE_MUNDIALITO_U = {
 "SDC Scappati di Casa": ["Pavone Daniele","Olivieri Donato","Bello Giovanni","Marangi Cesare","Chinnici Antonio","Di Giuseppe Claudio","Marinuzzi Stefano","Carucci Giuseppe","Cosanti Antonio|n:Portiere","Devito Francesco","Carbotti Francesco|C"],
 "Over The Top All Star": ["Scialpi Giuseppe","Caramia Pino","Colucci Maurizio","Ancona Francesco","Santoro Vanni","Serio Andrea","Carbotti Giuseppe","Zaurino Nicola","Chieppa Stefano","Carovigno Graziano","Carrieri Francesco|n:Portiere"],
 "FC Gial": ["Trani Ciro","Sforza Antonio","Gravina Gianluca","Scialpi Carlo","Granaldi Andrea","Devito Walter","Cristofaro Giuseppe","Luprano Nicola|n:Portiere","Ruggieri Giovanni"],
 "San Francesco": ["Manisi Pietro","Carrieri Nicolò","Carbotti Raffaele","Amati Andrea","Semeraro Emmanuele","Schiavone Paolo","Semeraro Fabrizio","Indelicato Francesco","Copertino Emanuele","Basile Vito","Colucci Cosimo Fortunato|n:Portiere"]
};

/* ARCHIVIO STORICO – rose vincitrici e premi delle edizioni passate (per i trofei personali dei giocatori)
   Nota: Pallone d'Oro e Guanto d'Oro esistono dal 2025 (nel 2024 non erano previsti). */
const STORICO = [
 {anno:"2024", cat:"over50", comp:"webcup", team:"Pizze e Delizie", pos:1,
  rosa:["Minardi Michele","Colucci Domenico","Colucci Stefano","Capitaneo Antonio","Zaurino Nicola","Cassano Antonio","Serio Andrea","Carrieri Francesco","Braccioforte Piero"]},
 {anno:"2025", cat:"over50", comp:"webcup", team:"Red Devils", pos:1,
  rosa:["Devito Daniele|C","Marinuzzi Gianni","Colucci Tonio","Venere Michele","Ruggieri Ernesto","Chieppa Stefano","Montinaro Giuseppe","Occhinegro Ivano","Santoro Angelo","Olivieri Donato|n:in prestito dagli Zebras","Carbotti Giuseppe","Angelini Martino"]}
];
const PREMI_STORICI = [
 {anno:"2025", cat:"over50", comp:"webcup", premio:"capocannoniere", nome:"Chieppa Stefano", team:"Red Devils"},
 {anno:"2025", cat:"over50", comp:"webcup", premio:"ballon", nome:"Vinci Leo", team:"Caroli Elettronica"}
];

/* ============ ARCHIVIO EDIZIONI PASSATE ============
   Edizione 2025 ricostruita dalle grafiche "Full Time" e dal Gazzettino.
   Marcatori partita per partita non disponibili per il 2025. */
const ROSE_VUOTE = {};
/* ROSE WEB CUP 2025 – dalle figurine ufficiali (Canva "FIGURINA") */
const ROSE_2025_O50 = {
 "Caroli Elettronica": ["Vinci Leo", "Lacatena Ottaviano", "Albanese Angelo", "Palese Mimmo", "Buonfrate Fabrizio", "Di Bari Ignazio", "Ruggieri Michele", "Marangi Antonio"],
 "Zebras": ["Giuliani Renzo", "Maggi Marcello", "Carnevale Antonio", "Lella Ambrogio", "Caramia Pino", "Carrieri Francesco", "Olivieri Donato|n:in prestito ai Red Devils", "Bello Piero"],
 "Il Palmento": ["Amorino Antonio", "Capitaneo Antonio", "Colucci Maurizio", "Papapietro Franco", "Marangi Piero", "Braccioforte Piero", "Serio Andrea", "Cassano Antonio", "Minardi Michele", "Colucci Domenico"],
 "Red Devils": ["Carbotti Giuseppe", "Venere Michele", "Scialpi Giuseppe", "Ruggieri Ernesto", "Chieppa Stefano", "Devito Daniele", "Montinaro Giuseppe", "Santoro Angelo", "Marinuzzi Gianni", "Occhinegro Ivano", "Angelini Martino", "Colucci Tonio", "Olivieri Donato|M|n:in prestito dagli Zebras"],
 "Tecsam": ["Zito Gianfranco", "Palazzo Pino", "Ferri Gianni", "Fragnelli Cesare", "Barratta Francesco", "Pasculli Vito", "Lucarella Giovanni", "Carovigno Graziano"],
 "Levaphone": ["Semeraro Donato", "Ruggieri Scipione", "Nardelli Gianfranco", "Tagliente Graziano", "Colucci Leo", "Colucci Martino", "Gidiuli Giuseppe", "Meuli Antonio", "Basta Peppino"]
};
const ROSE_2025_U = {
 "SS Annunziata": ["Messia Francesco", "Semeraro Emmanuele", "D'Onghia Antonio", "Carrieri Davide", "Colucci Antonio", "Blasi Luca", "Cristofaro Alessandro", "Marangi Daniele", "Montanaro Giovanni", "Gianfrate Lorenzo", "Ruggieri Alessandro"],
 "DCF Ziwoondello": ["Melambo Armando", "Cervellera Roberto", "Biallo Christian", "Serio Salvatore", "Serra Walter", "Caroli Piero", "Caroli Roberto", "Bello Danilo"],
 "Cibandoreventi": ["Conserva Antonio", "Lombardo Riccardo", "Castellana Francesco", "Campanella Lorenzo", "Carbotti Raffaele", "Carriero Marco", "Basile William", "Grottini Francesco", "Santoro Giambattista", "Montuori Francesco"],
 "Il Piccolo Principe": ["Sannelli Michele", "Marangi Domenico", "Gioranna Alessandro", "Salamina Francesco", "Salamina Alessandro", "Cappellari Andrea", "Marangi Paolo", "Salamina Donatello", "Chiarelli Francesco", "Diwouta Max"],
 "Team Gialloblu": ["Aquaro Giovanni", "Semeraro Nico", "Labbro Domenico", "Ancona Francesco", "Caramia Francesco", "Carovigno Graziano", "Conte Ezio", "Fragnelli Cesare", "Palazzo Cosimo"],
 "HG Five": ["Lovino Angelo", "Gianfrate Francesco", "Cervellera Marco", "Cervellera Michele", "Micoli Oronzo", "Castellana Fabrizio", "Palmisano Angelo", "D'Onghia Orazio", "Marangi Cesare", "Martucci Giuseppe"]
};

DATA["over50/webcup@2025"] = {
  edizione: "2025 · III edizione", stato: "Conclusa", rose:"ROSE_2025_O50", fotoPre:"25:", marcatoriRicostruiti:true, marcatoriUfficiali:[["Chieppa Stefano", "Red Devils", 22], ["Serio Andrea", "Il Palmento", 16], ["Caramia Pino", "Zebras", 16], ["Conte Ezio", "Tecsam", 11], ["Lacatena Ottaviano", "Caroli Elettronica", 10], ["Palese Mimmo", "Caroli Elettronica", 8], ["Tagliente Graziano", "Levaphone", 8], ["Braccioforte Piero", "Il Palmento", 5], ["Santoro Angelo", "Red Devils", 4], ["Devito Daniele", "Red Devils", 4], ["Bello Piero", "Zebras", 4], ["Buonfrate Fabrizio", "Caroli Elettronica", 4], ["Albanese Angelo", "Caroli Elettronica", 4], ["Carovigno Graziano", "Tecsam", 4], ["Colucci Maurizio", "Il Palmento", 3], ["Fragnelli Cesare", "Tecsam", 3], ["Marangi Antonio", "Caroli Elettronica", 3], ["Chiarelli Domenico", "Il Palmento", 3]], archivio:true, qualificate:4,
  squadre: ["Il Palmento","Caroli Elettronica","Tecsam","Red Devils","Zebras","Levaphone"],
  podio: ["Red Devils","Caroli Elettronica","Tecsam"],
  premiArchivio: [{premio:"ballon", nome:"Vinci Leo", team:"Caroli Elettronica"},{premio:"capocannoniere", nome:"Chieppa Stefano", team:"Red Devils"}],
  partite: [
    {fase:"Girone", g:1, data:"22/03", casa:"Tecsam", ospite:"Levaphone", gc:7, go:4},
    {fase:"Girone", g:1, data:"23/03", casa:"Red Devils", ospite:"Il Palmento", gc:2, go:2},
    {fase:"Girone", g:1, data:"23/03", casa:"Zebras", ospite:"Caroli Elettronica", gc:4, go:9},
    {fase:"Girone", g:2, data:"29/03", casa:"Red Devils", ospite:"Zebras", gc:4, go:2},
    {fase:"Girone", g:2, data:"30/03", casa:"Tecsam", ospite:"Il Palmento", gc:4, go:8},
    {fase:"Girone", g:2, data:"30/03", casa:"Caroli Elettronica", ospite:"Levaphone", gc:13, go:5},
    {fase:"Girone", g:3, data:"05/04", casa:"Tecsam", ospite:"Zebras", gc:6, go:4},
    {fase:"Girone", g:3, data:"06/04", casa:"Il Palmento", ospite:"Levaphone", gc:12, go:1},
    {fase:"Girone", g:3, data:"", casa:"Red Devils", ospite:"Caroli Elettronica", gc:3, go:3},
    {fase:"Girone", g:4, data:"26/04", casa:"Zebras", ospite:"Il Palmento", gc:4, go:10},
    {fase:"Girone", g:4, data:"26/04", casa:"Red Devils", ospite:"Levaphone", gc:10, go:1},
    {fase:"Girone", g:4, data:"26/04", casa:"Caroli Elettronica", ospite:"Tecsam", gc:6, go:4},
    {fase:"Girone", g:5, data:"03/05", casa:"Red Devils", ospite:"Tecsam", gc:3, go:4},
    {fase:"Girone", g:5, data:"04/05", casa:"Zebras", ospite:"Levaphone", gc:12, go:1},
    {fase:"Girone", g:5, data:"04/05", casa:"Il Palmento", ospite:"Caroli Elettronica", gc:6, go:6},
    {fase:"Semifinale", data:"18/05", casa:"Il Palmento", ospite:"Red Devils", gc:1, go:3},
    {fase:"Semifinale", data:"19/05", casa:"Caroli Elettronica", ospite:"Tecsam", gc:7, go:6},
    {fase:"Finale 3° posto", data:"24/05", casa:"Tecsam", ospite:"Il Palmento", gc:6, go:3},
    {fase:"Finale", data:"25/05", casa:"Red Devils", ospite:"Caroli Elettronica", gc:5, go:1}
  ]
};
DATA["under/webcup@2025"] = {
  edizione: "2025 · I edizione", stato: "Conclusa", rose:"ROSE_2025_U", fotoPre:"25:", marcatoriRicostruiti:true, marcatoriUfficiali:[["Salamina Francesco", "Il Piccolo Principe", 10], ["Marangi Domenico", "Il Piccolo Principe", 7], ["Palmisano Angelo", "HG Five", 7], ["D'Onghia Orazio", "HG Five", 7], ["Cervellera Michele", "HG Five", 7], ["Martucci Giuseppe", "HG Five", 6], ["Salamina Donatello", "Il Piccolo Principe", 6], ["Colucci Antonio", "SS Annunziata", 5], ["D'Onghia Antonio", "SS Annunziata", 5], ["Basile William", "Cibandoreventi", 4], ["Caroli Piero", "DCF Ziwoondello", 4], ["Grottini Francesco", "Cibandoreventi", 4], ["Serra Walter", "DCF Ziwoondello", 4], ["Cristofaro Alessandro", "SS Annunziata", 4], ["Carovigno Graziano", "Team Gialloblu", 4], ["Colucci Maurizio", "Team Gialloblu", 3], ["Ancona Francesco", "Team Gialloblu", 3], ["Carrieri Davide", "SS Annunziata", 3]], archivio:true, qualificate:4,
  squadre: ["HG Five","Il Piccolo Principe","SS Annunziata","DCF Ziwoondello","Cibandoreventi","Team Gialloblu"],
  podio: ["HG Five","Il Piccolo Principe","SS Annunziata"],
  premiArchivio: [{premio:"ballon", nome:"Marangi Domenico", team:"Il Piccolo Principe"},{premio:"capocannoniere", nome:"Salamina Francesco", team:"Il Piccolo Principe"}],
  partite: [
    {fase:"Girone", g:1, data:"29/03", casa:"Cibandoreventi", ospite:"Il Piccolo Principe", gc:3, go:7},
    {fase:"Girone", g:1, data:"29/03", casa:"DCF Ziwoondello", ospite:"SS Annunziata", gc:1, go:10},
    {fase:"Girone", g:1, data:"29/03", casa:"HG Five", ospite:"Team Gialloblu", gc:5, go:4},
    {fase:"Girone", g:2, data:"03/04", casa:"SS Annunziata", ospite:"Team Gialloblu", gc:4, go:0},
    {fase:"Girone", g:2, data:"03/04", casa:"HG Five", ospite:"Cibandoreventi", gc:4, go:1},
    {fase:"Girone", g:2, data:"05/04", casa:"DCF Ziwoondello", ospite:"Il Piccolo Principe", gc:1, go:6},
    {fase:"Girone", g:3, data:"10/04", casa:"DCF Ziwoondello", ospite:"Team Gialloblu", gc:6, go:6},
    {fase:"Girone", g:3, data:"10/04", casa:"HG Five", ospite:"Il Piccolo Principe", gc:8, go:0},
    {fase:"Girone", g:3, data:"17/04", casa:"Cibandoreventi", ospite:"SS Annunziata", gc:2, go:5},
    {fase:"Girone", g:4, data:"24/04", casa:"Team Gialloblu", ospite:"Cibandoreventi", gc:2, go:7},
    {fase:"Girone", g:4, data:"24/04", casa:"DCF Ziwoondello", ospite:"HG Five", gc:0, go:3},
    {fase:"Girone", g:4, data:"26/04", casa:"Il Piccolo Principe", ospite:"SS Annunziata", gc:5, go:2},
    {fase:"Girone", g:5, data:"08/05", casa:"DCF Ziwoondello", ospite:"Cibandoreventi", gc:4, go:2},
    {fase:"Girone", g:5, data:"08/05", casa:"HG Five", ospite:"SS Annunziata", gc:9, go:2},
    {fase:"Girone", g:5, data:"10/05", casa:"Il Piccolo Principe", ospite:"Team Gialloblu", gc:10, go:4},
    {fase:"Semifinale", data:"17/05", casa:"HG Five", ospite:"DCF Ziwoondello", gc:5, go:1},
    {fase:"Semifinale", data:"17/05", casa:"Il Piccolo Principe", ospite:"SS Annunziata", gc:7, go:4},
    {fase:"Finale 3° posto", data:"24/05", casa:"SS Annunziata", ospite:"DCF Ziwoondello", gc:4, go:2},
    {fase:"Finale", data:"25/05", casa:"HG Five", ospite:"Il Piccolo Principe", gc:3, go:3, rig:"3-2"}
  ]
};
PREMI_STORICI.push({anno:"2025", cat:"under", comp:"webcup", premio:"ballon", nome:"Marangi Domenico", team:"Il Piccolo Principe"});

/* Edizione 2024 (II edizione) – risultati e date dai post Instagram @webcup.martinafranca */
DATA["over50/webcup@2024"] = {
  edizione: "2024 · II edizione", stato: "Conclusa", rose:"ROSE_VUOTE", archivio:true, marcatoriRicostruiti:true, marcatoriUfficiali:[["Lacatena Ottaviano", "Caroli Elettronica", 18], ["Conte Ezio", "Tecsam", 5], ["Indelicato Martino", "Red Devils", 4], ["Palazzo Pino", "Tecsam", 4], ["Ferri Gianni", "Tecsam", 3], ["Minardi Michele", "Pizze e Delizie", 3], ["Cassano Antonio", "Pizze e Delizie", 3], ["Venere Michele", "Red Devils", 3], ["Albanese Angelo", "Caroli Elettronica", 2], ["Marinuzzi Gianni", "Red Devils", 1], ["Zaurino Nicola", "Pizze e Delizie", 1], ["Tagliente Graziano", "La Fontanina", 1]], qualificate:4,
  squadre: ["Caroli Elettronica","Tecsam","Pizze e Delizie","Red Devils","La Fontanina"],
  podio: ["Pizze e Delizie","Caroli Elettronica","Tecsam"],
  premiArchivio: [{premio:"capocannoniere", nome:"Lacatena Ottaviano", team:"Caroli Elettronica"}],
  partite: [
    {fase:"Girone", g:1, data:"25/03", casa:"Tecsam", ospite:"Pizze e Delizie", gc:4, go:2},
    {fase:"Girone", g:1, data:"25/03", casa:"Red Devils", ospite:"Caroli Elettronica", gc:2, go:7},
    {fase:"Girone", g:2, data:"07/04", casa:"Pizze e Delizie", ospite:"La Fontanina", gc:7, go:3},
    {fase:"Girone", g:2, data:"07/04", casa:"Caroli Elettronica", ospite:"Tecsam", gc:8, go:6},
    {fase:"Girone", g:3, data:"15/04", casa:"Tecsam", ospite:"La Fontanina", gc:6, go:3},
    {fase:"Girone", g:3, data:"15/04", casa:"Red Devils", ospite:"Pizze e Delizie", gc:6, go:4},
    {fase:"Girone", g:4, data:"20/04", casa:"Tecsam", ospite:"Red Devils", gc:9, go:3},
    {fase:"Girone", g:4, data:"21/04", casa:"Caroli Elettronica", ospite:"La Fontanina", gc:11, go:5},
    {fase:"Girone", g:5, data:"29/04", casa:"La Fontanina", ospite:"Red Devils", gc:7, go:6},
    {fase:"Girone", g:5, data:"29/04", casa:"Caroli Elettronica", ospite:"Pizze e Delizie", gc:4, go:2},
    {fase:"Semifinale", data:"02/06", casa:"Caroli Elettronica", ospite:"Red Devils", gc:4, go:3},
    {fase:"Semifinale", data:"02/06", casa:"Pizze e Delizie", ospite:"Tecsam", gc:6, go:3},
    {fase:"Finale 3° posto", data:"03/06", casa:"Red Devils", ospite:"Tecsam", gc:4, go:7},
    {fase:"Finale", data:"03/06", casa:"Pizze e Delizie", ospite:"Caroli Elettronica", gc:1, go:1, rig:"5-4"}
  ]
};
PREMI_STORICI.push({anno:"2024", cat:"over50", comp:"webcup", premio:"capocannoniere", nome:"Lacatena Ottaviano", team:"Caroli Elettronica"});

PREMI_STORICI.push({anno:"2025", cat:"under", comp:"webcup", premio:"capocannoniere", nome:"Salamina Francesco", team:"Il Piccolo Principe"});

/* MUNDIALITO SENIOR OVER 50 – archivio dalle locandine (risultati delle finali da completare) */
DATA["over50/mundialito@2025"] = {
  edizione: "2025 · IV edizione", stato: "Conclusa", rose:"ROSE_VUOTE", archivio:true, podio:["Stallion's","Fuori Porta","Red Devils"],
  squadre: ["Red Devils","Stallion's","Tecsam","Fuori Porta"],
  partite: [
    {fase:"Semifinale", data:"27/09 · ore 17:00", casa:"Red Devils", ospite:"Stallion's", gc:null, go:null, vince:"ospite"},
    {fase:"Semifinale", data:"27/09 · ore 18:00", casa:"Tecsam", ospite:"Fuori Porta", gc:null, go:null, vince:"ospite"},
    {fase:"Finale 3° posto", data:"12/10 · ore 16:00", casa:"Red Devils", ospite:"Tecsam", gc:null, go:null, vince:"casa"},
    {fase:"Finale", data:"12/10 · ore 17:15", casa:"Stallion's", ospite:"Fuori Porta", gc:null, go:null, vince:"casa"}
  ]
};
DATA["over50/mundialito@2024"] = {
  edizione: "2024 · III edizione", stato: "Conclusa", rose:"ROSE_VUOTE", archivio:true, podio:["Pizze e Delizie","Red Devils","Tecsam"],
  squadre: ["Red Devils","Pizze e Delizie","Fire Pro","Tecsam"],
  partite: [
    {fase:"Semifinale", data:"14/09 · ore 17:00", casa:"Fire Pro", ospite:"Red Devils", gc:1, go:4},
    {fase:"Semifinale", data:"14/09 · ore 18:30", casa:"Tecsam", ospite:"Pizze e Delizie", gc:0, go:3},
    {fase:"Finale 3° posto", data:"15/09 · ore 17:00", casa:"Fire Pro", ospite:"Tecsam", gc:null, go:null, vince:"ospite"},
    {fase:"Finale", data:"15/09 · ore 18:30", casa:"Red Devils", ospite:"Pizze e Delizie", gc:null, go:null, vince:"ospite"}
  ]
};

/* DATE DI NASCITA (schede giocatore) */
const NASCITA = {
 "Pastore Vincenzo":"01/06/1971","Papapietro Francesco":"09/11/1967","Chiarelli Domenico":"10/04/1968","Colucci Stefano":"09/01/1976",
 "Colucci Maurizio":"21/09/1978","Minardi Michele":"07/02/1967","Zaurino Nicola":"24/01/1976","Capitaneo Antonio":"09/10/1970",
 "Amorino Antonio":"31/03/1975","Colucci Domenico":"09/09/1971","Fragnelli Cesare":"05/10/1975","Carovigno Graziano":"14/04/1975","Marangi Piero":"14/05/1967","Vinci Leo":"27/02/1959","Zito Gianfranco":"05/05/1963","Di Bari Ignazio":"18/11/1966","Lacatena Ottaviano":"27/06/1973","Palese Cosimo":"13/02/1971","Palese Mimmo":"13/02/1971","Albanese Angelo":"14/04/1979","Ruggieri Michele":"08/10/1968","Lacirignola Sandro":"13/01/1976","Pricci Giuseppe":"12/08/1968","Marangi Antonio":"29/10/1963","Ruggieri Cosimo":"03/08/1975","Pagnelli Francesco":"01/04/1974","Filomena Antonio":"23/08/1974","Gnisci Francesco":"09/04/1976","Ruggieri Gino":"26/12/1964","Ruggieri Gennaro":"26/12/1964","Montanaro Alessandro":"22/03/1975","Bello Piero":"12/09/1975","Serio Andrea":"05/11/1970","Devito Francesco":"06/07/1988|Martina Franca","Olivieri Donato":"20/11/1971|Martina Franca","Chinnici Antonio":"31/05/1995|Martina Franca","Marangi Cesare":"26/06/1996|Martina Franca","Di Giuseppe Claudio":"26/02/1983|Martina Franca","Cosanti Antonio":"10/05/1983|Martina Franca","Bello Giovanni":"29/12/1989|Martina Franca","Carucci Giuseppe":"03/05/1992|Taranto","Carbotti Francesco":"30/05/1983|Martina Franca","Marinuzzi Stefano":"06/08/1996","Pavone Daniele":"12/04/1986|Cisternino",
 "Carbotti Giuseppe":"21/01/1971","Angelini Martino":"22/12/1969","Venere Michele":"20/05/1971","Devito Daniele":"03/02/1971","Braccioforte Piero":"01/01/1974","Marinuzzi Gianni":"23/12/1973","Muscato Michele":"03/05/1971","Scialpi Giuseppe":"22/09/1972","Montinaro Giuseppe":"07/03/1972","Occhinegro Ivano":"21/08/1965"
};

/* SVINCOLATI – f: foto (sponsor/sv-*.jpg), r: ruolo, t: WhatsApp, ing: squadra se ingaggiato */
const SVINCOLATI = {
  over50: [
    {n:"Semeraro Donato", f:"semeraro", r:"Portiere", t:"3382170975"},
    {n:"Colucci Martino", f:"colucci-m", r:"Giocatore", t:"3923101202"}
  ],
  under: [
    {n:"Semeraro Donato", f:"semeraro", r:"Portiere", t:"3382170975"},
    {n:"Fortunato Cosimo", f:"fortunato", r:"Portiere", ing:"Como"},
    {n:"Castellana Nicola", f:"castellana-n", r:"Giocatore", t:"3279479756"},
    {n:"Simeone Vito", f:"simeone", r:"Portiere", t:"3917395336"},
    {n:"Turnone Antonello", f:"turnone", r:"Portiere", t:"3248483183"},
    {n:"Aquaro Francesco", f:"aquaro", r:"Giocatore", t:"3922056912"},
    {n:"Camasso Giuseppe", f:"camasso", r:"Giocatore", ing:"Titanium Team"},
    {n:"Braccioforte Andrea", f:"braccioforte", r:"Giocatore", t:"3922559256"},
    {n:"Colucci Martino", f:"colucci-m", r:"Giocatore", t:"3923101202"},
    {n:"Santoro Giambattista", f:"santoro", r:"Giocatore", t:"3313120337"},
    {n:"Muscato Vincenzo", f:"muscato", r:"Giocatore", t:"3801232559"}
  ]
};

/* RUOLO giocatore (solo se comunicato) */
const RUOLO = {
 "Montinaro Giuseppe":"Jolly",
 "Occhinegro Ivano":"Jolly",
 "Scialpi Giuseppe":"Centrocampista",
 "Carbotti Giuseppe":"Jolly",
 "Angelini Martino":"Centrocampista",
 "Venere Michele":"Jolly",
 "Devito Daniele":"Attaccante",
 "Braccioforte Piero":"Centrocampista",
 "Marinuzzi Gianni":"Centrocampista",
 "Muscato Michele":"Attaccante",
};
