import './App.css';

import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MealsProvider from './context/MealsProvider';
import DrinksProvider from './context/DrinksProvider';
import UtilsProvider from './context/UtilsContext';
import Router from './Router';

function App() {
  return (

    <BrowserRouter>
      <UtilsProvider>
        <MealsProvider>
          <DrinksProvider>
            <Header />
            <Router />
          </DrinksProvider>
        </MealsProvider>
      </UtilsProvider>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
