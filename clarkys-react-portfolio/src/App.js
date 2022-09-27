import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      // element: <div>qwerty</div>
      element: <Landing/>
    },
    {
      // menu page will be new route
    }
  ]);

  return (
    <main>

      <RouterProvider router={router}/>

    </main>
  );
}

export default App;