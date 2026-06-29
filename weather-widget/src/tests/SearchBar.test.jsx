import { render, screen } from "@testing-library/react";
import SearchBar from "../components/SearchBar";
import { vi } from "vitest";

test("renders search input and button", () => {
  render(
    <SearchBar
      value=""
      onChange={vi.fn()}
      onSubmit={vi.fn()}
    />
  );

  expect(screen.getByRole("textbox")).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /search/i })
  ).toBeInTheDocument();
});