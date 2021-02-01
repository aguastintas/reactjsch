import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidgetComponent from './cart';
import './estilos.css'

const NavBarComponent = () => {
  return (
    <>
    <header>
      <h1>Sweet Cakes</h1>
      <nav>
        <a href="">Home</a>
        <a href="">Cakes</a>
        <a href="">Pedidos</a>
        <a href="">Contacto</a>
        <CartWidgetComponent />
      </nav>
    </header> 
    </>
  );
}

export default NavBarComponent;