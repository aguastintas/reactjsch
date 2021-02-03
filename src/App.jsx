import './App.css';
import NavBarComponent from './components/navbar/nav';
import ItemListContainer from './containers/ItemListContainer.jsx';

function App() {
  return (
    <>
    <NavBarComponent />
    <ItemListContainer greeting={"¡Bienvenidx a Sweet Cakes Pastelería, dulce estadía!"}/>
    </>
  );
}

export default App;
