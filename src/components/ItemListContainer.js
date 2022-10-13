import 'bootstrap/dist/css/bootstrap.min.css'

function ItemListContainer(greeting) {
    return (
        <div className='d-flex align-items-center justify-content-center mt-5 '>
            <h1 className="text-center p-4 text-white display-1">
                {greeting.msg}
            </h1>
        </div>
    )
}

export default ItemListContainer;