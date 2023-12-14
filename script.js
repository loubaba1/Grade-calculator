// Grade calculator

// Button click Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //INPUT
  let clientSideScripting1 = +document.getElementById("1").value;
  let structuredProgramming1 = +document.getElementById("2").value;
  let structuredProgramming2 = +document.getElementById("3").value;
  let clientSideScripting2 = +document.getElementById("4").value;
  let projectA = +document.getElementById("5").value;

  //   console.log(ClientSideScripting1);

  // PROCESS
  let finalCS10Grade = (clientSideScripting1 + structuredProgramming1 + structuredProgramming2 + clientSideScripting2 + projectA) / 5;

  console.log(finalCS10Grade);

  // OUTPUT

  document.getElementById("output").innerHTML = Math.round(finalCS10Grade);


}
 