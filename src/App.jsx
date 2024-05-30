import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import { Cart, DetailProducts, Home, Products } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      {
        path: "products/:id",
        element: <DetailProducts />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
