const socket = io("http://localhost:3001");


socket.on(encodeURI("STDS/2/Température/T1"), (arg) => {
  console.log(arg);
  document.getElementById('tempFut').innerHTML = arg;
  var thermo = document.getElementById('cvsThermometre')
  thermo.innerHTML = arg;
  });

socket.on(encodeURI("STDS/2/Température/T2"), (arg) => {
  console.log(arg);
  document.getElementById('tempAmbiante').innerHTML = arg;
});

socket.on("STDS/2/Niveau", (arg) => {
  console.log("niveau", arg);
  document.getElementById('quantite').innerHTML = arg;

  var barreProgression = document.getElementById('myProgressBar')
  if(barreProgression) {
    console.log("GOOD")
    barreProgression.style.width = (arg / 100) * 100 + "%"
  } else {
    console.log("PAS BARRE")
  }
  if(arg > 33 && arg < 66) {
    barreProgression.style.backgroundColor="orange"
  }
  if (arg > 66) {
    barreProgression.style.backgroundColor="red"
  }
  if(arg < 33) {
    barreProgression.style.backgroundColor="green"
  }
  
});

socket.on("STDS/2/Puissance", (arg) => {
  console.log(arg);
  document.getElementById('puissance').innerHTML = arg;

  var barreProgression2 = document.getElementById('myProgressBarPuissance')
  barreProgression2.style.width = (arg / 4) * 100 + "%"
  if(arg > 1.33 && arg < 2.66) {
    barreProgression2.style.backgroundColor="orange"
  }
  if (arg > 2.66) {
    barreProgression2.style.backgroundColor="red"
  }
  if(arg < 1.33) {
    barreProgression2.style.backgroundColor="green"
  }
});

socket.on("STDS/2/Diag", (arg) => {
  console.log(arg);
  document.getElementById('diag').innerHTML = arg;
});
// STDS/2/CO2

socket.on("STDS/2/C02", (arg) => {
  console.log(arg);
  document.getElementById('CO2').innerHTML = arg;
  
  var barreProgression3 = document.getElementById('myProgressBarCO2')
  barreProgression3.style.width = (arg / 4) * 100 + "%"
});

