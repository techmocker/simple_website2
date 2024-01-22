const VOLLJAHRIGKEIT = 18;

function checkVolljaehrig(name, alter) {
  if (alter >= VOLLJAHRIGKEIT) {
    alert(`${name} ist volljährig.`);
  } else {
    alert(`${name} ist nicht volljährig.`);
  }
}

function performVolljaehrigkeitspruefung() {
  const name = document.getElementById('nameInput').value;
  const alter = parseInt(document.getElementById('alterInput').value);

  if (name && !isNaN(alter)) {
    checkVolljaehrig(name, alter);
  } else {
    alert('Bitte gib einen gültigen Namen und ein gültiges Alter ein.');
  }
}
