import { renderHook, act } from "@testing-library/react";
import { FavoritesProvider, useFavorites } from "../context/FavoritesContext";

test("adds favorite city", () => {
  const wrapper = ({ children }) => (
    <FavoritesProvider>{children}</FavoritesProvider>
  );

  const { result } = renderHook(() => useFavorites(), { wrapper });

  act(() => {
    result.current.addToFavorites({
      id: 1,
      name: "Athens",
    });
  });

  expect(result.current.favorites.length).toBe(1);
});