import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import WeatherCard from "../components/WeatherCard";

const weather = {
  id: 1,
  name: "Athens",
  main: {
    temp: 25,
    humidity: 60,
  },
  wind: {
    speed: 4,
  },
  weather: [
    {
      description: "clear sky",
      icon: "01d",
    },
  ],
};

test("renders weather information", () => {
  render(
    <BrowserRouter>
      <WeatherCard
        weather={weather}
        unit="metric"
        toggleUnit={vi.fn()}
        addToFavorites={vi.fn()}
      />
    </BrowserRouter>
  );

  expect(screen.getByText("Athens")).toBeInTheDocument();
  expect(screen.getByText(/25/)).toBeInTheDocument();
});