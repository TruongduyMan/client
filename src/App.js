import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 

const router = createBrowserRouter([
    {
      path: "/",
      element: <span>Home Page</span>,
    },

    {
      path: "/products/:id",
      element: <span>Category</span>,
    },
    
    {
      path: "/products/:id",
      element: <span>Product</span>,
    },
    
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
