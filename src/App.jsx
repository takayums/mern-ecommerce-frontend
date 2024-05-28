import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import { DetailProducts, Home, Products } from "./pages";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
