    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("sign-up-mode");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("sign-up-mode");
    });

    
    window.addEventListener('load', () => {
      container.style.opacity = '0';
      container.style.transform = 'scale(0.9)';
      container.style.transition = 'all 0.5s ease';
      
      setTimeout(() => {
        container.style.opacity = '1';
        container.style.transform = 'scale(1)';
      }, 100);
    });
