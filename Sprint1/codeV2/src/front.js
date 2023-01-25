const socket = io("http://localhost:3001");

socket.on(encodeURI("STDS/2/Température/T1"), (arg) => {
  console.log(arg);
  document.getElementById('tempFut').innerHTML = arg + "°C";
  var barreProgression3 = document.getElementById('myProgressBarTemperature')
  barreProgression3.style.width = (arg / 120) * 100 + "%"
  if(arg > 40 && arg < 80) {
    barreProgression3.style.backgroundColor="orange"
  }
  if (arg > 80) {
    barreProgression3.style.backgroundColor="red"
  }
  if(arg < 40) {
    barreProgression3.style.backgroundColor="green"
  }
  });

socket.on(encodeURI("STDS/2/Température/T2"), (arg) => {
  console.log(arg);
  document.getElementById('tempAmbiante').innerHTML = arg + "°C";
  var barreProgression4 = document.getElementById('myProgressBarTemperature2')
  barreProgression4.style.width = (arg / 120) * 100 + "%"
  if(arg > 40 && arg < 80) {
    barreProgression4.style.backgroundColor="orange"
  }
  if (arg > 80) {
    barreProgression4.style.backgroundColor="red"
  }
  if(arg < 40) {
    barreProgression4.style.backgroundColor="green"
  }
});

socket.on("STDS/2/Niveau", (arg) => {
  console.log("niveau", arg);
  document.getElementById('quantite').innerHTML = arg + "%";
  var barreProgression = document.getElementById('myProgressBar')
  barreProgression.style.width = arg + "%"
  if(arg > 33 && arg < 66) {
    barreProgression.style.backgroundColor="orange"
  }
  if (arg > 66) {
    barreProgression.style.backgroundColor="green"
  }
  if(arg < 33) {
    barreProgression.style.backgroundColor="red"
  }
  
});

socket.on("STDS/2/Puissance", (arg) => {
  console.log(arg);
  document.getElementById('puissance').innerHTML = arg + " Watts";
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

socket.on("STDS/2/CO2", (arg) => {
  console.log(arg);
  document.getElementById('CO2').innerHTML = arg + "ppm";
  var barreProgression5 = document.getElementById('myProgressBarCO2')
  barreProgression5.style.width = (arg / 4) * 100 + "%"
  if(arg > 1.33 && arg < 2.66) {
    barreProgression5.style.backgroundColor="orange"
  }
  if (arg > 2.66) {
    barreProgression5.style.backgroundColor="red"
  }
  if(arg < 1.33) {
    barreProgression5.style.backgroundColor="green"
  }
});

socket.on("STDS/2/Diag", (arg) => {
  console.log(arg);
  document.getElementById('diag').innerHTML = arg;
  if(arg = "Température élevée de la bière !"){
    const result = confirm("La température de la bière est élevée.\nVoulez-vous consulter la notice de maintenance ?");
    if (result == true){
      location.href="http://localhost:3000/document/STDS_notice_utilisation.pdf"
    }
  }
});


