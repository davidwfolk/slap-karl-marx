
let Karl = {
  health: 100,
  dead: "https://upload.wikimedia.org/wikipedia/commons/9/91/Karlmarxtomb.jpg"
}

let attackChoices = {
  "slap": 7,
  "kick": 12,
  "wetWilly": 50,
}


function karlDamage(playerChoice) {
 let slapDamage = attackChoices[playerChoice]
 let newKarlHealth = Karl.health - slapDamage
    Karl.health = newKarlHealth
    console.log(newKarlHealth);
  if (newKarlHealth <= attackChoices[playerChoice]) {
     newKarlHealth = 0
  }
  document.getElementById("healthBar").style.width = newKarlHealth + "%"
  if (newKarlHealth <= 50) {
     document.getElementById("btn-wet-willy").classList.remove("hidden")
  }
  
    if (newKarlHealth <= 0) {
     document.getElementById("km-dead").src = "https://upload.wikimedia.org/wikipedia/commons/9/91/Karlmarxtomb.jpg"
  //  document.getElementById("btn-reset").classList.remove("hidden")
 }
  }


