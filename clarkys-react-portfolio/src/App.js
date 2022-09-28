import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing/Landing';
import PortfolioItemJate from './pages/portfolio-items/PortfolioItemJate';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      // element: <div>qwerty</div>
      element: <Landing/>
    },
    {
      path: "/jate",
      element: <PortfolioItemJate/>
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