# Weather Widget Application

## Project Overview

This project is a Weather Widget Application built with React. It allows users to search for weather information for any city using the OpenWeather API. Users can view current weather conditions, save favorite cities, switch between Celsius and Fahrenheit, and toggle between light and dark themes.

## Features

* Search weather by city
* Current temperature
* Weather description
* Weather icon
* Humidity
* Wind speed
* Celsius/Fahrenheit toggle
* Add favorite cities
* Remove favorite cities
* Favorites saved in Local Storage
* Light/Dark theme using Context API
* City Details page
* React Router navigation
* Responsive design using Tailwind CSS
* Unit tests using Vitest and React Testing Library

## Technologies Used

* React
* React Router
* Tailwind CSS
* Context API
* OpenWeather API
* Vitest
* React Testing Library

## Installation

```bash
npm install
```

## Run the Project

```bash
npm run dev
```

## Build the Project

```bash
npm run build
```

## Run Tests

```bash
npm run test
```

## State Management

The application uses React Context API for shared state management. Favorites and theme settings are stored in separate contexts to avoid prop drilling and keep concerns separated. Favorites and theme preferences are persisted using Local Storage.
