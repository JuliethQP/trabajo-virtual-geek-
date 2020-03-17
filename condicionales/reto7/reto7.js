var año;
año=parseInt(prompt("Cual año quieres saber"));
if(año==0 || año==4 || año==8 || año==12){
    console.log("es el año bisiesto")
}
else if (año%2!=0){
    console.log("el siguiente es el año bisiesto" + año+1);
}