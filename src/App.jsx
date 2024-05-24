import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import { Home } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ index: true, element: <Home /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
