
let Karl = {
  health: 100,
  dead:
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
 
  if (newKarlHealth <= 50) {
     document.getElementById("btn-wet-willy").classList.remove("hidden")
  }

    if (Karl.health <= 0) {
    
   document.getElementById("btn-reset").classList.remove("hidden")
 }
  }