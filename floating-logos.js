document.addEventListener("DOMContentLoaded", function () {
  // Create a full-page container for floating logos
  const container = document.createElement('div');
  container.classList.add('floating-container');
  document.body.appendChild(container); // Append to <body>, not inside any specific container

  const numberOfLogos = 20; // Number of floating logos

  for (let i = 0; i < numberOfLogos; i++) {
    const logo = document.createElement('div');
    logo.classList.add('logo');
    container.appendChild(logo);

    // Random positioning
    logo.style.left = `${Math.random() * 100}vw`;
    logo.style.top = `${Math.random() * 100}vh`;

    // Random animation speed
    const duration = Math.random() * 10 + 5; // Between 5s and 15s
    const delay = Math.random() * 5; // Delay between 0s and 5s

    logo.style.animation = `float ${duration}s infinite linear ${delay}s`;
  }
});
