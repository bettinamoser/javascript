/***********************

************************/


var _e =function(id) {
  return document.getElementById(id);
}

/***********************

************************/

var zahlEinlesen = function(text){

  var zahl;
  text=text.replace(',','.'); // ersetze Beistrich mit Punkt
  //text=text.replace(/,/,'.'); // auch möglich
  zahl=text*1;
  return zahl;

}

/***********************

************************/

var zahlAusgeben = function(zahl){
  var text;
  zahl = Math.round(zahl*100)/100; //Math.round rundet nur auf Ganzzahlen, daher diese Umgehung
  //Math.floor --> abrunden, Math.ceil --> aufrunden
  text=zahl+'';
  text=text.replace('.',',');
  return text;

}

var zufallsZahl =function(von,bis){
  //Math.random() liefert Zahl zwischen 0 und 1
  var zufall, anzahl;

  anzahl=bis-von+1;
  zufall= Math.floor(Math.random()*anzahl)+von;
  return zufall;

}
