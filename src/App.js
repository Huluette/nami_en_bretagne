import './App.css';
import BurgerMenu from './BurgerMenu';
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
    </main>
  );
}

export default App;
