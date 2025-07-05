const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const buttonRow = document.querySelector('.button-row');

let noBtnMoved = false;

// Initialize EmailJS
emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID

function moveNoButton() {
  if (!noBtnMoved) {
    document.body.appendChild(noBtn);
    noBtn.style.position = 'absolute';
    noBtn.style.margin = '0';
    if (buttonRow) buttonRow.classList.add('only-yes');
    noBtnMoved = true;
  }
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;
  const padding = 20;
  const maxX = window.innerWidth - btnWidth - padding;
  const maxY = window.innerHeight - btnHeight - padding;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

function sendNotification() {
  // EmailJS template parameters
  const templateParams = {
    to_email: 'yatharth@yatty.xyz',
    subject: 'Date Request Accepted! 💖',
    message: 'Someone just clicked "Yes" on your date request! 🎉'
  };

  // Send email using EmailJS
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);
    });
}

noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('focus', moveNoButton);

yesBtn.addEventListener('click', () => {
  document.getElementById('question').textContent = "Yay!😘";
  yesBtn.style.display = 'none';
  noBtn.style.display = 'none';
  
  // Send notification
  sendNotification();
}); 