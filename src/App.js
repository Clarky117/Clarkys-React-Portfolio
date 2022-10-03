import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ContactMe from './pages/contact-me/ContactMe';
import Landing from './pages/landing/Landing';
import EcbePortfolioItem from './pages/portfolio-items/EcbePortfolioItem';
import EntPortfolioItem from './pages/portfolio-items/EntPortfolioItem';
import EtPortfolioItem from './pages/portfolio-items/EtPortfolioItem';
import JatePortfolioItem from './pages/portfolio-items/JatePortfolioItem';
import JsccPortfolioItem from './pages/portfolio-items/JsccPortfolioItem';
import SnPortfolioItem from './pages/portfolio-items/SnPortfolioItem';
import TpgPortfolioItem from './pages/portfolio-items/TpgPortfolioItem';
import WotPortfolioItem from './pages/portfolio-items/WotPortfolioItem';

function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      // element: <div>qwerty</div>
      element: <Landing />
    },
    {
      path: "/jate",
      element: <JatePortfolioItem />
      // i think each item will be its own page
    },
    {
      path: "/social-network",
      element: <SnPortfolioItem />
    },
    {
      path: "/workout-tracker",
      element: <WotPortfolioItem />
    },
    {
      path: "/team-profile-generator",
      element: <TpgPortfolioItem />
    },
    {
      path: "/js-coding-quiz",
      element: <JsccPortfolioItem />
    },
    {
      path: "/employee-tracker",
      element: <EtPortfolioItem />
    },
    {
      path: "/express-note-taker",
      element: <EntPortfolioItem />
    },
    {
      path: "/e-commerce-back-end",
      element: <EcbePortfolioItem />
    },
    {
      path: "/contact-me",
      element: <ContactMe />
    }
  ]);

  return (
    <main>
      
        <RouterProvider router={router} />    

    </main>

  );
}

export default App;