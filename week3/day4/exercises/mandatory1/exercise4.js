
  document.getElementById("MyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const radiusInput = document.getElementById("radius");
    const volumeInput = document.getElementById("volume");

    const radius = parseFloat(radiusInput.value);

    if (!isNaN(radius) && radius >= 0) {
      const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
      volumeInput.removeAttribute("disabled");
      volumeInput.value = volume.toFixed(2);

    } else {
      volumeInput.value = "Invalid radius";
    }
  });
