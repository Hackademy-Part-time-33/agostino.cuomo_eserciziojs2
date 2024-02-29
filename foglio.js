/* TRACCIA 1 */

let numerogatti = 20;
let fila = 3;

let numerofile= numerogatti/fila;
console.log("Il numero delle file è: " + Math.floor(numerofile)); 

let nonfila = numerogatti%fila;
let gattimancanti = fila - nonfila;
console.log("I gatti che mancano per completare una fila è:  " + gattimancanti);
console.log("Il numero di gatti non in file è 2: " + Math.floor(nonfila));


/* TRACCIA 2 */

let voto = prompt("inserisci il voto");

 if (voto >= 30) {
    console.log("eccellente");
} else if (voto >=27 && voto <= 29) {
    console.log("ottimo");
} else if ( voto >=24 && voto <27) {
    console.log("distinto");
}else if (voto >= 21 && voto<24) {
    console.log("buono")
}else if(voto >=18 && voto <21){
    console.log("sufficiente");
}else if(voto<18){
    console.log("insufficente");
}; 


switch (voto) {
   case "1":
   case "2":
   case "3":
   case "4":
   case "5":
   case "6":
   case "7":
   case "8":
   case "92":
   case "10":
   case "11":
   case "12":
   case "13":
   case "14":
   case "15":
   case "16":
   case "17":
        console.log("insufficiente");
        break; 
   case "18":
   case "19":
   case "20":
     console.log("sufficiente");
       break;
   case "21":
   case "22":
   case "23":
     console.log("buono");
     break;
   case "24":
   case "25":
   case "26":
    console.log("distinto");
    break;
   case "27":
   case "28":
   case "29":
    console.log("ottimo");      
    break;
    case "30": 
    console.log("eccellente");
    break;     

    
} ;

/* TRACCIA 3 */
 
let temperatura = prompt("inserisci la temperatura");

if (temperatura < -10) {
    console.log("copriti... ancora ti raffreddi");
} else if (temperatura <0) {
    console.log("non è tanto il freddo quanto l'umidità");
} else if(temperatura < 20){
    console.log("non ci sono più le mezze stagioni");
}else if ( temperatura < 30) {
    console.log("mi dia una peroni sudata");}
else if (temperatura >= 30) {
    console.log("lu mare, lu sole, lu ientu")
};

/* switch non si puo usare per numeri che vanno all'infinito per temperature maggiori 30 e minori di -10*/
switch (temperatura) {
    case "-10":
    case"-9":
    case"-8":
    case"-7":
    case"-6":
    case"-5":
    case"-4":
    case"-3":
    case"-2":
    case"-1":
          console.log("non è tanto il freddo quanto l'umidità");
           break;
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "92":
    case "10":
    case "11":
    case "12":
    case "13":
    case "14":
    case "15":
    case "16":
    case "17":
    case "18":
    case "19":    
         console.log("non ci sono più le mezze stagioni");
         break; 
    
    case "20":  
    case "21":
    case "22":
    case "23": 
    case "24":
    case "25":
    case "26":
    case "27":
    case "28":
    case "29":
     console.log("mi dia una peroni sudata");      
     break;
     case "30": 
     console.log("eccellente");
     break;     
}