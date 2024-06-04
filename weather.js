const BASE_URL = "https://api.weather.gov/gridpoints/TOP/31,80/forecast"


const DisplayWeather = async () => {
    try {
      const response = await fetch(
        BASE_URL = "https://api.weather.gov/gridpoints/TOP/31,80/forecast"
      );
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data = await response.json();
      document.getElementById("myCat").src = data[0].url;
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
  };

  const BASE_URL1 = "https://freetestapi.com/api/v1/";

const fetchData = async (endpointResource) => {
    try {
        const response = await fetch(`${BASE_URL}${endpointResource}`);
        
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json(); 
        displayData(data);
    } catch (error) {
        console.error(`Error fetching data from ${endpointResource}:`, error);
    }
};

const displayData = (data) => { 
    data.forEach(iterator => {
        console.log(`${iterator.name}, ${iterator.description}`);
        console.log('');
    });
}
