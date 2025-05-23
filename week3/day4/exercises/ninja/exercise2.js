
function validateEmailNoRegex(email) {
  const atIndex = email.indexOf('@');
  if (atIndex < 1) return false;

  const domain = email.slice(atIndex + 1);
  if (domain.length < 3) return false;

  const dotIndex = domain.indexOf('.');
  if (dotIndex < 1 || dotIndex === domain.length - 1) return false;

  return true;
}

const form1 = document.getElementById('emailForm1');
const result1 = document.getElementById('result1');

form1.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email1').value;

  if (validateEmailNoRegex(email)) {
    result1.textContent = "Email valide !";
    result1.style.color = "green";
  } else {
    result1.textContent = "Email invalide !";
    result1.style.color = "red";
  }
});
