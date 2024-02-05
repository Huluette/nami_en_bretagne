import './App.css';
import BurgerMenu from './BurgerMenu';
import Footer from './Footer';
import Header from './Header';
import Presentation from './Presentation';
import Tarifs from './Tarifs';

function App() {
  return (
    <main className="main">
      <Header />
      <BurgerMenu />
      <Presentation/>
      <Tarifs/>
      <Footer/>
    </main>
  );
}

export default App;
