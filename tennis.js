/* ============ TENNIS 2026 – migrato dalle pagine Mailup 464/561/570 (tabelloni, order of play, regolamento) ============
   Ogni incontro: [giocatore 1, giocatore 2, vincitore, punteggio]. "Rit." = ritiro. Punteggio vuoto = non riportato. */
const TENNIS = {
 edizione:"2026", stato:"Conclusa", luogo:"Sporting Club Martina Franca · campi 3 e 4 (resina)",
 tabelloni:{
  "m-gold":{cat:"m", liv:"gold", nome:"Maschile · GOLD", campione:"Castellana N.", turni:[
   ["Finale",[["Castellana N.","Taldone","Castellana N.",""]]],
   ["Semifinali",[["Marangi D.","Castellana N.","Castellana N.","6-1/6-0"],["Marinò","Taldone","Taldone","6-2/7-5"]]],
   ["Quarti",[["Marangi D.","Castellana A.","Marangi D.","6-3/6-3"],["Castellana N.","Castellana F.","Castellana N.","6-1/6-1"],["Rotondo","Marinò","Marinò","6-4/6-2"],["Taldone","Comune","Taldone","6-2/7-6"]]],
   ["Ottavi",[["Marangi D.","Gentile","Marangi D.","6-4/6-4"],["Filomena","Castellana A.","Castellana A.",""],["Palazzo","Castellana N.","Castellana N.","6-3/6-0"],["Ferrante","Castellana F.","Castellana F.",""],["Rotondo","Giacovazzo C.","Rotondo","Rit."],["Castellana L.","Marinò","Marinò","4-6/6-0/10-7"],["Taldone","Lasorte","Taldone","Rit."],["Comune","Cervellera","Comune","Rit."]]],
   ["Secondo turno",[["Ponte","Gentile","Gentile","7-6/6-0"],["Filomena","Caliolo","Filomena","6-4/6-2"],["Palese","Ferrante","Ferrante","Rit."],["Fragnelli","Giacovazzo C.","Giacovazzo C.","6-4/1-6/10-5"],["Campanella T.","Lasorte","Lasorte","Rit."],["Carbotti","Comune","Comune","6-2/6-1"]]],
   ["Primo turno",[["Giacovazzo M.","Gentile","Gentile","6-0/6-2"],["Molendini","Filomena","Filomena","6-0/3-6/10-4"],["Ferrante","Petino","Ferrante","6-1/6-2"],["Giacovazzo C.","Marraffa","Giacovazzo C.","7-6/4-6/10-7"],["Cassano","Lasorte","Lasorte","6-2/6-1"],["Carbotti","Demitri","Carbotti","6-2/6-1"]]]
  ]},
  "m-silver":{cat:"m", liv:"silver", nome:"Maschile · SILVER", campione:"Pasculli I.", turni:[
   ["Finale",[["Pasculli I.","Olivieri","Pasculli I.",""]]],
   ["Semifinali",[["Baccari N.","Pasculli I.","Pasculli I.","6-4/6-3"],["Olivieri","Gioiello","Olivieri","6-0/6-2"]]],
   ["Quarti",[["Baccari N.","Castellana C.","Baccari N.","6-3/3-6/10-8"],["Labbro D.","Pasculli I.","Pasculli I.","6-2/6-0"],["Aiello","Olivieri","Olivieri","6-4/2-6/10-4"],["Gioiello","Liuzzi","Gioiello","4-6/6-1/10-6"]]],
   ["Ottavi",[["Baccari N.","Ferrante L.","Baccari N.","6-3/6-2"],["Semeraro M.","Castellana C.","Castellana C.","6-4/6-4"],["Marangi","Labbro D.","Labbro D.","3-6/6-2/10-4"],["Sorressa","Pasculli I.","Pasculli I.","6-2/6-3"],["Aiello","Fumarola","Aiello","6-4/6-3"],["Raguso","Olivieri","Olivieri","7-6/6-1"],["Sorressa A.","Gioiello","Gioiello","6-3/6-4"],["Liuzzi","Palazzo","Liuzzi","6-3/7-5"]]],
   ["Secondo turno",[["Baccari N.","Pasculli V.","Baccari N.","6-3/7-5"],["Marinuzzi S.","Ferrante L.","Ferrante L.","6-4/4-6/10-8"],["Semeraro M.","Caliolo","Semeraro M.","6-4/6-4"],["Castellana C.","Baccari E.","Castellana C.","6-4/6-1"],["Mannavola A.","Marangi","Marangi","6-4/6-3"],["Grassi","Labbro D.","Labbro D.","6-1/6-4"],["Sorressa","Cinqui","Sorressa","6-0/7-5"],["Greco","Pasculli I.","Pasculli I.","6-1/7-6"],["Aiello","Soleti","Aiello","7-6/7-5"],["Rinaldi","Fumarola","Fumarola","6-3/6-3"],["Basilico","Raguso","Raguso","6-2/6-3"],["Porcelli F.","Olivieri","Olivieri","6-1/6-0"],["Di Bari","Sorressa A.","Sorressa A.","6-0/7-5"],["Franco","Gioiello","Gioiello","6-0/6-1"],["Castellana D.","Liuzzi","Liuzzi","2-6/6-2/13-11"],["Vitulano","Palazzo","Palazzo","7-6/2-6/10-6"]]],
   ["Primo turno",[["Porcelli G.","Pasculli V.","Pasculli V.","7-5/6-0"],["Marinuzzi S.","Mobilio D.","Marinuzzi S.","6-1/6-1"],["Caliolo","Vaccaro","Caliolo","6-2/6-2"],["Castellana C.","Ponte M.","Castellana C.","6-3/6-3"],["Di Maggio","Grassi","Grassi","6-2/6-3"],["Sorressa","Ricci A.","Sorressa","6-3/6-3"],["Vitale","Greco","Greco","7-6/6-2"],["Occhinegro","Soleti","Soleti","6-4/6-4"],["Zigrino","Rinaldi","Rinaldi",""],["Granaldi","Porcelli F.","Porcelli F.","7-5/6-4"],["Calella","Sorressa A.","Sorressa A.","6-3/6-3"],["Terrulli","Franco","Franco","6-1/6-2"],["Liuzzi","Pulito","Liuzzi","7-5/6-4"],["D'Elia","Vitulano","Vitulano","6-3/6-3"]]]
  ]},
  "m-bronze":{cat:"m", liv:"bronze", nome:"Maschile · BRONZE", campione:"Lavermicocca", turni:[
   ["Finale",[["Ricchiuti","Lavermicocca","Lavermicocca",""]]],
   ["Semifinali",[["Ricchiuti","Tagliente","Ricchiuti",""],["Lavermicocca","Carbotti","Lavermicocca",""]]],
   ["Quarti",[["Lerario D.","Ricchiuti","Ricchiuti",""],["Tagliente","Balestra","Tagliente","6-3/6-2"],["Lavermicocca","Aquaro A.","Lavermicocca","6-4/6-2"],["Basta V.","Carbotti","Carbotti","6-4/4-4 Rit."]]],
   ["Ottavi",[["Zito G.","Lerario D.","Lerario D.","6-4/7-5"],["Valentini","Ricchiuti","Ricchiuti","7-5/6-0"],["Tirone","Tagliente","Tagliente","2-1 Rit."],["Balestra","Speciale","Balestra","6-3/6-4"],["Lavermicocca","Pastore M.","Lavermicocca","6-4/6-4"],["Giacovelli A.","Aquaro A.","Aquaro A.","7-5/6-4"],["Basta V.","Marinuzzi G.","Basta V.","6-4/6-1"],["Carbotti","De Iudicibus","Carbotti","6-4/3-6/10-8"]]],
   ["Secondo turno",[["Sforza F.","Zito G.","Zito G.","Rit."],["Lerario D.","Mastrovito","Lerario D.","4-6/7-5/10-7"],["Valentini","Aquaro M.","Valentini","7-6/7-5"],["Castello","Ricchiuti","Ricchiuti","7-5/6-4"],["Tirone","Cervellera","Tirone","Rit."],["Tagliente","Apruzzese","Tagliente","7-6/6-4"],["Balestra","Vitulano","Balestra","6-1/6-1"],["Tirone","Speciale","Speciale","6-4/6-3"],["Gioiello","Lavermicocca","Lavermicocca","6-2/6-1"],["Giacovelli R.","Pastore M.","Pastore M.","6-1/7-5"],["Giacovelli A.","Tomai G.","Giacovelli A.","7-6/6-1"],["Aquaro A.","Lacarbonara","Aquaro A.","6-3/6-4"],["Basta V.","Pastore F.","Basta V.","6-0/6-0"],["Marinuzzi G.","Pugliese G.","Marinuzzi G.","6-0/7-5"],["Carbotti","Romanelli","Carbotti","6-3/6-3"],["Rosato","De Iudicibus","De Iudicibus","Rit."]]],
   ["Primo turno",[["Zito G.","Dimarco G.","Zito G.","6-1/6-2"],["Matera","Lerario D.","Lerario D.","6-2/6-4"],["Aiello","Aquaro M.","Aquaro M.","6-0/6-0"],["Bello","Castello","Castello","6-1/6-2"],["Vinci","Cervellera","Cervellera","7-6/6-3"],["Tagliente","Fumarola","Tagliente","6-2/6-0"],["Marraffa P.","Vitulano","Vitulano","6-0/7-6"],["Caramia","Tirone","Tirone","7-5/6-2"],["Lavermicocca","Lattanzi","Lavermicocca","6-0/6-4"],["Serio","Giacovelli R.","Giacovelli R.","6-1/6-4"],["Tomai G.","Ippolito G.","Tomai G.","6-0/6-0"],["Fischetti","Aquaro A.","Aquaro A.","6-2/6-2"],["Cardone F.","Pastore F.","Pastore F.","6-2/6-3"],["Pellegrini","Marinuzzi G.","Marinuzzi G.","6-1/6-1"],["Pugliese G.","Vinci M.","Pugliese G.","6-4/7-5"],["Fumarola","Romanelli","Romanelli","6-4/1-6/10-3"],["Pugliese J.","Rosato","Rosato","6-4/7-5"],["De Iudicibus","Tinelli R.","De Iudicibus","1-6/7-5/10-8"]]]
  ]},
  "f-gold":{cat:"f", liv:"gold", nome:"Femminile · GOLD", campione:"Digiuseppe G.", turni:[
   ["Finale",[["Palmisano T.","Digiuseppe G.","Digiuseppe G.",""]]],
   ["Semifinali",[["Palmisano B.","Palmisano T.","Palmisano T.",""],["Rosato A.","Digiuseppe G.","Digiuseppe G.",""]]],
   ["Quarti",[["Lenoci T.","Palmisano T.","Palmisano T.","6-4/6-4"],["Nardelli M.","Rosato A.","Rosato A.","6-1/6-3"]]],
   ["Ottavi",[["Palmisano T.","Conte G.","Palmisano T.","Rit."],["Nardelli M.","Granaldi M.","Nardelli M.","6-1/6-3"]]],
   ["Primo turno",[["Labbro F.","Nardelli M.","Nardelli M.","Rit."]]]
  ]},
  "f-silver":{cat:"f", liv:"silver", nome:"Femminile · SILVER", campione:"Zaccaria C.", turni:[
   ["Finale",[["Zaccaria C.","Conte F.","Zaccaria C.","6-1/6-3"]]],
   ["Semifinali",[["Zaccaria C.","Devita A.","Zaccaria C.","6-2/6-0"],["Conte F.","Massafra V.","Conte F.",""]]],
   ["Quarti",[["Zaccaria C.","Ippolito M.","Zaccaria C.","6-2/6-2"],["Latorre V.","Devita A.","Devita A.","6-7/6-3/12-10"],["Massafra M.","Conte F.","Conte F.","2-6/6-4/10-8"],["Sabatelli F.","Massafra V.","Massafra V.","6-3/6-2"]]],
   ["Ottavi",[["Colucci K.","Ippolito M.","Ippolito M.","6-2/6-0"],["Latorre V.","Chiarelli I.","Latorre V.","7-6/1-6/10-4"],["Ricci C.","Devita A.","Devita A.","6-1/2-6/10-4"],["De Giorgi G.","Massafra M.","Massafra M.","7-6/6-2"],["Palmisano M.","Conte F.","Conte F.","6-2/6-2"],["Ancona S.","Sabatelli F.","Sabatelli F.","5-7/6-3/10-8"]]]
  ]}
 },
 nomiCompleti:{"Castellana N.":"Castellana Nicolò","Marangi D.":"Marangi Dario","Taldone":"Taldone Giuseppe","Marinò":"Marinò Pietro","Baccari N.":"Baccari Nicolò","Pasculli I.":"Pasculli Ignazio","Olivieri":"Olivieri Donatello","Gioiello":"Gioiello Antonio","Rosato A.":"Rosato Angela","Digiuseppe G.":"Digiuseppe Greta","Lavermicocca":"Lavermicocca Christian","Carbotti":"Carbotti Giovanni","Zaccaria C.":"Zaccaria Carlotta","Conte F.":"Conte Flavia"},
 orderOfPlay:{ data:"Domenica 24 maggio 2026", partite:[
  ["08:30","Semifinale","Maschile · SILVER","Baccari Nicolò","Pasculli Ignazio"],
  ["09:30","FINALE","Donne · SILVER","Zaccaria Carlotta","Conte Flavia"],
  ["11:00","Semifinale","Maschile · GOLD","Marangi Dario","Castellana Nicolò"],
  ["12:30","Semifinale","Maschile · SILVER","Olivieri Donatello","Gioiello Antonio"],
  ["15:30","Semifinale","Maschile · GOLD","Taldone Giuseppe","Marinò Pietro"],
  ["17:00","Semifinale","Donne · GOLD","Rosato Angela","Digiuseppe Greta"],
  ["18:00","Semifinale","Maschile · BRONZE","Lavermicocca Christian","Carbotti Giovanni"]]},
 regolamento:[
  ["Formula del torneo",["Il torneo è riservato a soci e associati in possesso di tessera FITP 2026, con tabellone maschile suddiviso in fasce GOLD, SILVER e BRONZE e tabellone femminile suddiviso in fasce GOLD e SILVER.","Gli incontri si disputano esclusivamente la domenica su campi in resina (campo 3 e 4).","Il torneo si svolge a eliminazione diretta: chi perde una partita viene eliminato.","Il vincitore di ogni incontro accede al turno successivo fino alla finale."]],
  ["Regole di gioco",["Gli incontri si disputano 2 set su 3.","I primi due set si giocano a 6 game, con un vantaggio sul 40-40 e successivo killer point in caso di nuova parità, e tie-break sul 6-6 a 7 punti.","In caso di un set pari, il terzo set è sostituito da un long tie-break a 10 punti.","Semifinali e finali si disputano regolarmente 2 set su 3, con anche il terzo set a 6 game (vantaggio sul 40-40, poi killer point; tie-break sul 6-6 a 7 punti)."]],
  ["Quote di iscrizione",["€ 25 soci.","€ 30 non soci.","La quota va versata prima di disputare la prima partita."]],
  ["Date",["Inizio torneo 22 marzo, finali 31 maggio. Si gioca solo di domenica.","22/03 · 29/03 · 12/04 · 26/04 · 10/05 · 17/05: 18 partite per giornata.","05/04 (Pasqua): nessuna partita · 19/04 e 03/05: solo eventuali recuperi.","Semifinali 24/05 · Finali 31/05."]]
 ],
 gallery:"https://f2x9b.emailsp.com/frontend/LandingPage.aspx?idList=1&idLP=500&guid=AAFA5375-BCF1-4E06-965A-E3A98B626156"
};

/* ARCHIVIO TENNIS – dalle grafiche "FINAL" e "Champion" pubblicate su Instagram @webcup.martinafranca.
   Per le edizioni passate sono disponibili solo le finali (punteggi non pubblicati). */
TENNIS.archivio = {
 "2025":[
  {nome:"Maschile · GOLD", liv:"gold", data:"25/05/2025", a:"Marangi Dario", b:"Marinò Pietro", w:"Marinò Pietro"},
  {nome:"Maschile · SILVER", liv:"silver", data:"24/05/2025", a:"Mezzapesa Giovanni", b:"Leuci Fabio", w:"Mezzapesa Giovanni"},
  {nome:"Femminile · GOLD", liv:"gold", data:"24/05/2025", a:"Digiuseppe Greta", b:"Lenoci Titti", w:"Digiuseppe Greta"}
 ],
 "2024":[
  {nome:"Maschile · GOLD", liv:"gold", data:"30/06/2024", a:"Palazzo Davide", b:"Castellana F.", w:"Palazzo Davide"},
  {nome:"Maschile · SILVER", liv:"silver", data:"30/06/2024", a:"Marseglia Matteo", b:"D'Arcangelo M.", w:"Marseglia Matteo"},
  {nome:"Maschile · BRONZE", liv:"bronze", data:"28/06/2024", a:"Liuzzi Luca", b:"Pennella F.", w:"Liuzzi Luca"},
  {nome:"Femminile · GOLD", liv:"gold", data:"23/06/2024", a:"Rosato A.", b:"Digiuseppe Greta", w:"Digiuseppe Greta"},
  {nome:"Femminile · SILVER", liv:"silver", data:"30/06/2024", a:"Lillo G.", b:"Labbro Federica", w:"Labbro Federica"},
  {nome:"Femminile · BRONZE", liv:"bronze", data:"30/06/2024", a:"Batzu M.", b:"Colucci Katia", w:"Colucci Katia"}
 ],
 "2023":[
  {nome:"Maschile · GOLD", liv:"gold", w:"Palazzo Davide"},
  {nome:"Maschile · SILVER", liv:"silver", w:"Bulgherini Riccardo"},
  {nome:"Femminile · GOLD", liv:"gold", w:"Digiuseppe Greta"}
 ]
};

/* TABELLONI – struttura completa dei box, colonna per colonna (indice del box: [nome, punteggio con cui ci è arrivato]).
   Serve a disegnare il tabellone grafico generato dall'app. */
const TB_STRUTT = {
 "m-gold":[
  ["Primo turno",64,{6:["Giacovazzo M."],7:["Gentile"],8:["Molendini"],9:["Filomena"],26:["Ferrante"],27:["Petino"],38:["Giacovazzo C."],39:["Marraffa"],54:["Cassano"],55:["Lasorte"],56:["Carbotti"],57:["Demitri"]}],
  ["Secondo turno",32,{2:["Ponte"],3:["Gentile","6-0/6-2"],4:["Filomena","6-0/3-6/10-4"],5:["Caliolo"],12:["Palese"],13:["Ferrante","6-1/6-2"],18:["Fragnelli"],19:["Giacovazzo C.","7-6/4-6/10-7"],26:["Campanella T."],27:["Lasorte","6-2/6-1"],28:["Carbotti","6-2/6-1"],29:["Comune"]}],
  ["Ottavi",16,{0:["Marangi D."],1:["Gentile","7-6/6-0"],2:["Filomena","6-4/6-2"],3:["Castellana A."],4:["Palazzo"],5:["Castellana N."],6:["Ferrante","Rit."],7:["Castellana F."],8:["Rotondo"],9:["Giacovazzo C.","6-4/1-6/10-5"],10:["Castellana L."],11:["Marinò"],12:["Taldone"],13:["Lasorte","Rit."],14:["Comune","6-2/6-1"],15:["Cervellera"]}],
  ["Quarti",8,{0:["Marangi D.","6-4/6-4"],1:["Castellana A."],2:["Castellana N.","6-3/6-0"],3:["Castellana F."],4:["Rotondo","Rit."],5:["Marinò","4-6/6-0/10-7"],6:["Taldone","Rit."],7:["Comune","Rit."]}],
  ["Semifinali",4,{0:["Marangi D.","6-3/6-3"],1:["Castellana N.","6-1/6-1"],2:["Marinò","6-4/6-2"],3:["Taldone","6-2/7-6"]}],
  ["Finale",2,{0:["Castellana N.","6-1/6-0"],1:["Taldone","6-2/7-5"]}],
  ["Campione",1,{0:["Castellana N."]}]],
 "m-silver":[
  ["Primo turno",64,{2:["Porcelli G."],3:["Pasculli V."],4:["Marinuzzi S."],5:["Mobilio D."],10:["Caliolo"],11:["Vaccaro"],12:["Castellana C."],13:["Ponte M."],20:["Di Maggio"],21:["Grassi"],24:["Sorressa"],25:["Ricci A."],28:["Vitale"],29:["Greco"],34:["Occhinegro"],35:["Soleti"],36:["Zigrino"],37:["Rinaldi"],44:["Granaldi"],45:["Porcelli F."],50:["Calella"],51:["Sorressa A."],52:["Terrulli"],53:["Franco"],58:["Liuzzi"],59:["Pulito"],60:["D'Elia"],61:["Vitulano"]}],
  ["Secondo turno",32,{0:["Baccari N."],1:["Pasculli V.","7-5/6-0"],2:["Marinuzzi S.","6-1/6-1"],3:["Ferrante L."],4:["Semeraro M."],5:["Caliolo","6-2/6-2"],6:["Castellana C.","6-3/6-3"],7:["Baccari E."],8:["Mannavola A."],9:["Marangi"],10:["Grassi","6-2/6-3"],11:["Labbro D."],12:["Sorressa","6-3/6-3"],13:["Cinqui"],14:["Greco","7-6/6-2"],15:["Pasculli I."],16:["Aiello"],17:["Soleti","6-4/6-4"],18:["Rinaldi"],19:["Fumarola"],20:["Basilico"],21:["Raguso"],22:["Porcelli F.","7-5/6-4"],23:["Olivieri"],24:["Di Bari"],25:["Sorressa A.","6-3/6-3"],26:["Franco","6-1/6-2"],27:["Gioiello"],28:["Castellana D."],29:["Liuzzi","7-5/6-4"],30:["Vitulano","6-3/6-3"],31:["Palazzo"]}],
  ["Ottavi",16,{0:["Baccari N.","6-3/7-5"],1:["Ferrante L.","6-4/4-6/10-8"],2:["Semeraro M.","6-4/6-4"],3:["Castellana C.","6-4/6-1"],4:["Marangi","6-4/6-3"],5:["Labbro D.","6-1/6-4"],6:["Sorressa","6-0/7-5"],7:["Pasculli I.","6-1/7-6"],8:["Aiello","7-6/7-5"],9:["Fumarola","6-3/6-3"],10:["Raguso","6-2/6-3"],11:["Olivieri","6-1/6-0"],12:["Sorressa A.","6-0/7-5"],13:["Gioiello","6-0/6-1"],14:["Liuzzi","2-6/6-2/13-11"],15:["Palazzo","7-6/2-6/10-6"]}],
  ["Quarti",8,{0:["Baccari N.","6-3/6-2"],1:["Castellana C.","6-4/6-4"],2:["Labbro D.","3-6/6-2/10-4"],3:["Pasculli I.","6-2/6-3"],4:["Aiello","6-4/6-3"],5:["Olivieri","7-6/6-1"],6:["Gioiello","6-3/6-4"],7:["Liuzzi","6-3/7-5"]}],
  ["Semifinali",4,{0:["Baccari N.","6-3/3-6/10-8"],1:["Pasculli I.","6-2/6-0"],2:["Olivieri","6-4/2-6/10-4"],3:["Gioiello","4-6/6-1/10-6"]}],
  ["Finale",2,{0:["Pasculli I.","6-4/6-3"],1:["Olivieri","6-0/6-2"]}],
  ["Campione",1,{0:["Pasculli I."]}]],
 "m-bronze":[
  ["Primo turno",64,{2:["Zito G."],3:["Dimarco G."],4:["Matera"],5:["Lerario D."],10:["Aiello"],11:["Aquaro M."],12:["Bello"],13:["Castello"],18:["Vinci"],19:["Cervellera"],20:["Tagliente"],21:["Fumarola"],26:["Marraffa P."],27:["Vitulano"],28:["Caramia"],29:["Tirone"],34:["Lavermicocca"],35:["Lattanzi"],36:["Serio"],37:["Giacovelli R."],42:["Tomai G."],43:["Ippolito G."],44:["Fischetti"],45:["Aquaro A."],50:["Cardone F."],51:["Pastore F."],52:["Pellegrini"],53:["Marinuzzi G."],54:["Pugliese G."],55:["Vinci M."],58:["Fumarola"],59:["Romanelli"],60:["Pugliese J."],61:["Rosato"],62:["De Iudicibus"],63:["Tinelli R."]}],
  ["Secondo turno",32,{0:["Sforza F."],1:["Zito G.","6-1/6-2"],2:["Lerario D.","6-2/6-4"],3:["Mastrovito"],4:["Valentini"],5:["Aquaro M.","6-0/6-0"],6:["Castello","6-1/6-2"],7:["Ricchiuti"],8:["Tirone"],9:["Cervellera","7-6/6-3"],10:["Tagliente","6-2/6-0"],11:["Apruzzese"],12:["Balestra"],13:["Vitulano","6-0/7-6"],14:["Tirone","7-5/6-2"],15:["Speciale"],16:["Gioiello","Bye"],17:["Lavermicocca","6-0/6-4"],18:["Giacovelli R.","6-1/6-4"],19:["Pastore M."],20:["Giacovelli A."],21:["Tomai G.","6-0/6-0"],22:["Aquaro A.","6-2/6-2"],23:["Lacarbonara"],24:["Basta V."],25:["Pastore F.","6-2/6-3"],26:["Marinuzzi G.","6-1/6-1"],27:["Pugliese G.","6-4/7-5"],28:["Carbotti"],29:["Romanelli","6-4/1-6/10-3"],30:["Rosato","6-4/7-5"],31:["De Iudicibus","1-6/7-5/10-8"]}],
  ["Ottavi",16,{0:["Zito G.","Rit."],1:["Lerario D.","4-6/7-5/10-7"],2:["Valentini","7-6/7-5"],3:["Ricchiuti","7-5/6-4"],4:["Tirone","Rit."],5:["Tagliente","7-6/6-4"],6:["Balestra","6-1/6-1"],7:["Speciale","6-4/6-3"],8:["Lavermicocca","6-2/6-1"],9:["Pastore M.","6-1/7-5"],10:["Giacovelli A.","7-6/6-1"],11:["Aquaro A.","6-3/6-4"],12:["Basta V.","6-0/6-0"],13:["Marinuzzi G.","6-0/7-5"],14:["Carbotti","6-3/6-3"],15:["De Iudicibus","Rit."]}],
  ["Quarti",8,{0:["Lerario D.","6-4/7-5"],1:["Ricchiuti","7-5/6-0"],2:["Tagliente","2-1 Rit."],3:["Balestra","6-3/6-4"],4:["Lavermicocca","6-4/6-4"],5:["Aquaro A.","7-5/6-4"],6:["Basta V.","6-4/6-1"],7:["Carbotti","6-4/3-6/10-8"]}],
  ["Semifinali",4,{0:["Ricchiuti"],1:["Tagliente","6-3/6-2"],2:["Lavermicocca","6-4/6-2"],3:["Carbotti","6-4/4-4 Rit."]}],
  ["Finale",2,{0:["Ricchiuti"],1:["Lavermicocca"]}],
  ["Campione",1,{0:["Lavermicocca"]}]],
 "f-gold":[
  ["Primo turno",32,{16:["Labbro F."],17:["Nardelli M."]}],
  ["Ottavi",16,{6:["Palmisano T."],7:["Conte G."],8:["Nardelli M.","Rit."],9:["Granaldi M."]}],
  ["Quarti",8,{2:["Lenoci T."],3:["Palmisano T.","Rit."],4:["Nardelli M.","6-1/6-3"],5:["Rosato A."]}],
  ["Semifinali",4,{0:["Palmisano B."],1:["Palmisano T.","6-4/6-4"],2:["Rosato A.","6-1/6-3"],3:["Digiuseppe G.","6-3/6-4"]}],
  ["Finale",2,{0:["Palmisano T."],1:["Digiuseppe G."]}],
  ["Campione",1,{0:["Digiuseppe G."]}]],
 "f-silver":[
  ["Ottavi",16,{2:["Colucci K."],3:["Ippolito M."],4:["Latorre V."],5:["Chiarelli I."],6:["Ricci C."],7:["Devita A."],8:["De Giorgi G."],9:["Massafra M."],10:["Palmisano M."],11:["Conte F."],12:["Ancona S."],13:["Sabatelli F."]}],
  ["Quarti",8,{0:["Zaccaria C."],1:["Ippolito M.","6-2/6-0"],2:["Latorre V.","7-6/1-6/10-4"],3:["Devita A.","6-1/2-6/10-4"],4:["Massafra M.","7-6/6-2"],5:["Conte F.","6-2/6-2"],6:["Sabatelli F.","5-7/6-3/10-8"],7:["Massafra V."]}],
  ["Semifinali",4,{0:["Zaccaria C.","6-2/6-2"],1:["Devita A.","6-7/6-3/12-10"],2:["Conte F.","2-6/6-4/10-8"],3:["Massafra V.","6-3/6-2"]}],
  ["Finale",2,{0:["Zaccaria C.","6-2/6-0"],1:["Conte F."]}],
  ["Campione",1,{0:["Zaccaria C.","6-1/6-3"]}]]
};
