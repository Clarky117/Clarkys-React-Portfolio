import './App.css';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>qwerty</div>
    }
  ]);

  return (
    <div>

      <RouterProvider router={router}/>

    </div>
  );
}

export default App;