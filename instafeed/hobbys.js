// hobbys.js

const hobbies = [];

function addHobby() {
  const hobbyInput = document.getElementById('hobbyInput').value;
  if (hobbyInput) {
    hobbies.push(hobbyInput);
    document.getElementById('hobbyInput').value = '';
  }
}

function displayHobbies() {
  const hobbyList = document.getElementById('hobbyList');
  hobbyList.innerHTML = ''; // Clear previous list

  for (let i = 0; i < hobbies.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `Mein ${i + 1}. Hobby: ${hobbies[i]}`;
    hobbyList.appendChild(listItem);
  }
}
