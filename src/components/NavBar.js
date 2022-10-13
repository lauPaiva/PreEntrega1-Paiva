import Cart from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css'

function NavBar() {
    return (
        <div className="navbar navbar-expand-lg bg-info">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="w-100 navbar-nav d-flex justify-content-between">
                        <li className='m-2 bg-primary  h4'>
                            <a className="nav-link active text-white " href="a">Home</a>
                        </li>
                        <li className='m-2 bg-primary h4'>
                            <a className="nav-link active text-white" href="a">Store</a>
                        </li>
                        <li className='m-2 bg-primary h4'>
                            <a className="nav-link active text-white" href="a">Contact</a>
                        </li>
                        <li className='m-2  d-flex align-items-center justify-content-center'>
                            <Cart/>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NavBar;