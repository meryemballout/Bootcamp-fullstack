(function(userName) {
  const navbar = document.querySelector('.navbar');

  // Create user info container
  const userInfo = document.createElement('div');
  userInfo.classList.add('user-info');

  // Create profile picture
  const profilePic = document.createElement('img');
  profilePic.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsO5nCmw2riQgFPQDIIloPlgVv8oezF-7uyw&s';
  profilePic.alt = userName + "'s profile picture";

  // Create user name text
  const nameSpan = document.createElement('span');
  nameSpan.textContent = `${userName}`;

  // Append elements
  userInfo.appendChild(profilePic);
  userInfo.appendChild(nameSpan);
  navbar.appendChild(userInfo);
})('Chaimaaa');
