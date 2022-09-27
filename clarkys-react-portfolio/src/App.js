import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing/Landing';
import PortfolioItem from './pages/portfolio-item/PortfolioItem';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      // element: <div>qwerty</div>
      element: <Landing/>
    },
    {
      // menu page will be new route
      // no it won't cos i got the js functionality working
    },
    {
      path: "/portfolio-item",
      element: <PortfolioItem/>
      // i think each item will be its own page
    }
  ]);

  return (
    <main>

      <RouterProvider router={router}/>

    </main>
  );
}

export default App;