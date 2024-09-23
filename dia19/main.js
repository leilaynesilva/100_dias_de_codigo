searchBtn.addEventListener('click', () => { 
    const city = cityInput.value.trim(); 
    if (city) { 
        console.log(`Buscando dados para a cidade: ${city}`); // Adicione esta linha para debug
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`) 
            .then(response => { 
                console.log(response); // Adicione esta linha para ver a resposta
                if (!response.ok) { 
                    throw new Error('Cidade não encontrada!'); 
                } 
                return response.json(); 
            }) 
            .then(data => { 
                errorMessage.textContent = ''; 
                cityName.textContent = data.name; 
                weatherDescription.textContent = data.weather[0].description; 
                temperature.textContent = `${data.main.temp}°C`; 
                humidity.textContent = `Humidade: ${data.main.humidity}%`; 
            }) 
            .catch(error => { 
                cityName.textContent = ''; 
                weatherDescription.textContent = ''; 
                temperature.textContent = ''; 
                humidity.textContent = ''; 
                errorMessage.textContent = error.message; 
            }); 
    } 
});
