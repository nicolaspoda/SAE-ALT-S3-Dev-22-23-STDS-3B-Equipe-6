const socket = io("http://localhost:3001");

socket.on(encodeURI("STDS/2/Température/T1"), (arg) => {
  console.log(arg);
  document.getElementById('tempFut').innerHTML = arg;
});

socket.on(encodeURI("STDS/2/Température/T2"), (arg) => {
  console.log(arg);
  document.getElementById('tempAmbiante').innerHTML = arg;
});

socket.on("STDS/2/Niveau", (arg) => {
  console.log(arg);
  document.getElementById('quantite').innerHTML = arg;
  
});

socket.on("STDS/2/Puissance", (arg) => {
  console.log(arg);
  document.getElementById('puissance').innerHTML = arg;
});


socket.on("STDS/2/Diag", (arg) => {
  console.log(arg);
  document.getElementById('diag').innerHTML = arg;
});
// STDS/2/CO2
