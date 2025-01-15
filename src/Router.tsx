import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { HomePage } from "./pages/Home";
import { CartPage } from "./pages/Cart";

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<DefaultLayout />}
      >
        <Route
          index
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/cart"
          element={<CartPage />}
        />
      </Route>
    </Routes>
  );
}
