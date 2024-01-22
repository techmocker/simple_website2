// Array mit Hobbies erstellen
let hobbies = ["Lesen", "Sport", "Musik", "Kochen"];

// Funktion zum Hinzufügen von Hobbies
function addHobby(newHobby) {
  // Überprüfen, ob mehr als 5 Elemente im Array sind
  if (hobbies.length >= 5) {
    // Das erste Element löschen
    hobbies.shift();
  }
  // Das neue Hobby ans Ende des Arrays hinzufügen
  hobbies.push(newHobby);
}

// Hobbies hinzufügen
addHobby("Reisen");
addHobby("Fotografie");

// Hobbies über einen for-loop ausgeben
for (let i = 0; i < hobbies.length; i++) {
  console.log(`Mein ${i + 1}. Hobby: ${hobbies[i]}`);
}
