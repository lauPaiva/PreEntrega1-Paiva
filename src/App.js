import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
    return(
    <div className='bg-primary min-vh-100'>
        <NavBar/>
        <ItemListContainer msg='Bienvenido :)  '/>
    </div>
    )
}

export default App;
