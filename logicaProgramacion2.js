function convertirTemperatura() {
  let gradosCelsius;
  while (true) {
    gradosCelsius = parseFloat(
      prompt("Introduce la temperatura en grados Celsius:")
    );

    if (!isNaN(gradosCelsius)) {
      break;
    } else {
      alert("Por favor, introduce un número válido.");
    }
  }
  const gradosKelvin = gradosCelsius + 273.15;
  const gradosFahrenheit = (gradosCelsius * 9) / 5 + 32;
  const resultado = `
    Temperatura en grados celsius: ${gradosCelsius}°C<br>
    Temperatura en grados Kelvin: ${gradosKelvin}°K<br>
    Temperatura en grados Farenheit: ${gradosFahrenheit}°F<br>
  `;
  document.getElementById("resultado").innerHTML = resultado;

  alert(
    `Temperatura en Celsius: ${gradosCelsius}°C\nTemperatura en Kelvin: ${gradosKelvin}K\nTemperatura en Fahrenheit: ${gradosFahrenheit}°F`
  );
}
