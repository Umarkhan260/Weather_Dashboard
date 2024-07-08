Weather Dashboard

This project is a Weather Dashboard application that fetches and displays weather information using the OpenWeatherMap API. It consists of components for current weather display, daily forecast, and city search functionality.

Project Structure

|-- public/
|-- src/
    |-- components/
        |-- search/
            |-- Search.js
            |-- Search.css
        |-- forecast/
            |-- Forecast.js
            |-- Forecast.css
        |-- current-weather/
            |-- CurrentWeather.js
            |-- CurrentWeather.css
    |-- api.js
    |-- App.js
    |-- App.css
    |-- index.js
|-- README.md
|-- package.json


public: Contains the public assets and index.html file.
src: Source directory containing all JavaScript and CSS files.
components: Directory for React components.
search: Contains the Search component for city search functionality.
forecast: Contains the Forecast component for displaying daily weather forecast.
current-weather: Contains the CurrentWeather component for displaying current weather details.
api.js: Configuration file for API constants (API_URL, API_KEY).
App.js: Main component integrating all other components.
App.css: Stylesheet for the main App component.
index.js: Entry point for React rendering.
README.md: Documentation file (this file).
package.json: Project configuration and dependencies.
Setup Instructions
To run this project locally, follow these steps:

Clone the repository:

git clone https://github.com/your-username/Weather-Dashboard.git
cd Weather-Dashboard
npm install
npm start

Open http://localhost:3000 in your browser to view the Weather Dashboard.

Usage:
City Search: Use the search input to find weather information for a specific city.
Current Weather: Displays current weather details including temperature, description, and additional parameters.
Daily Forecast: Shows a 7-day forecast with details for each day including weather icons, temperature range, and additional weather parameters.

Additional Notes:
This project uses React for building the user interface.
Weather icons are sourced from the OpenWeatherMap API and displayed dynamically based on weather conditions.
Ensure that API requests are made securely and that sensitive information such as API keys are stored safely.


![image](https://github.com/Shaquibcode01/Weather-Dashboard/assets/119671108/92c6680a-1968-40c6-8278-15a5fa809dd3)

![image](https://github.com/Shaquibcode01/Weather-Dashboard/assets/119671108/e720cbb5-d7c3-4162-b7a3-782376ce63a7)
