import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      // element: <div>qwerty</div>
      element: <Landing/>
    }
  ]);

  return (
    <div>

      <RouterProvider router={router}/>

    </div>
  );
}

export default App;