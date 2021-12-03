import  React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'
import Modal from "./components/Modal.jsx";

function ListBook(props){

    const [listbook, setBook] = useState([])
    const [estadoModalDelete, setEstadoDelete] = useState(false);
    const [estadoModalEdit, setEstadoEdit] = useState(false);
    const [estadoModalAdd, setEstadoAdd] = useState(false);
    const [getId, setId] = useState();
    const [datos, setDatos] = useState({
        title:'',
        year: '',
        genre: ''
    });


    React.useEffect(() => {
        apibook();
    });

    const handelInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    };

    const apibook = async () => {
        try {
            const data = await fetch('http://localhost:8000/api/books');
            const book = await data.json();
            setBook(book);
        } catch (error) {
            console.log(error);
        }
    };
    
    const dellBook = async () => {
        try {
            const data = await fetch('http://localhost:8000/api/books/'+String(getId), {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            const book = await data.json();
            console.log(book)
        } catch (error) {
            console.log(error);
        }
        setEstadoDelete(false)
    };

    const addBook = async (form) => {
        try {
            const data = await fetch('http://localhost:8000/api/books/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: form.title,
                    year: form.year,
                    genre: form.genre
                })
            });
            const book = await data.json();
            console.log(book)
        } catch (error) {
            console.log(error);
        }
        setEstadoAdd(false)
    };

    const editBook = async (form) => {
        try {
            const data = await fetch('http://localhost:8000/api/books/'+String(getId), {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: form.title,
                    year: form.year,
                    genre: form.genre
                })
            });
            const book = await data.json();
            console.log(book)
        } catch (error) {
            console.log(error);
        }
        setEstadoEdit(false)
    };

    return(
        <div className="flex flex-col bg-gray-700 bg-opacity-70 w-3/4 mx-auto my-auto rounded-md shadow-2xl p-5">
        <Modal estado={estadoModalDelete} active={setEstadoDelete} title='Eliminar'>
            <div className='flex-colum space-y-auto p-5 h-full'>
                <p className="text-white mt-6">Esta seguro que desea eliminar el libro?</p>
                <div className="flex">
                <div className="flex mt-10 gap-5 mx-auto">
                    <button onClick={() => setEstadoDelete(false)} className="bg-gray-700 text-white py-2 px-9 rounded-md shadow-lg" >Cancelar</button>
                    <button onClick={() => dellBook()} className="bg-red-700 text-white py-2 px-9 rounded-md shadow-lg" >Eliminar</button>
                </div>
                </div>
            </div>
        </Modal>
        <Modal estado={estadoModalEdit} active={setEstadoEdit} title='Editar'>
        <div className='flex-colum w-full'>
                <form className="flex flex-col text-gray-100 my-5">
                    <div className="flex flex-col flex-grow gap-5">

                        <label>Titulo:</label>
                        <input type="text" value={datos.title} name="title" onChange={handelInputChange} className="p-2 placeholder-indigo-500 bg-black bg-opacity-0 border-b-2 border-indigo-500" />
                    
        
                        <label>Autor:</label>
                        <input type="text" value={datos.year} name="year" onChange={handelInputChange} className="p-2  placeholder-indigo-500 bg-black bg-opacity-0 border-b-2 border-indigo-500"/>
        
                        <label>Genero:</label>
                        <input type="text" value={datos.genre} name="genre" onChange={handelInputChange} className="p-2  placeholder-indigo-500 bg-black bg-opacity-0 border-b-2 border-indigo-500 "/>
                    </div>
                </form>

                <div className="flex mt-10 gap-5 mx-auto">
                    <button onClick={() => setEstadoEdit(false)} className="bg-gray-600 text-white px-9 py-2 rounded-md shadow-lg mx-auto" >Cancelar</button>
                    <button onClick={() => {setEstadoEdit(false); editBook(datos)}} className="bg-green-600 text-white px-9 py-2 rounded-md shadow-lg mx-auto" >Editar</button>
                </div>
            </div>
        </Modal>
        <Modal estado={estadoModalAdd} active={setEstadoAdd} title='Agregar Libro'>
            <div className='flex-colum w-full'>
                <form className="flex flex-col text-gray-100 my-5">
                    <div className="flex flex-col flex-grow gap-5">

                        <label>Titulo:</label>
                        <input type="text" placeholder="don quijote" name="title" onChange={handelInputChange} className="p-2 placeholder-indigo-500 bg-black bg-opacity-0 border-b-2 border-indigo-500" />
                    
        
                        <label>Autor:</label>
                        <input type="text" placeholder="1615" name="year" onChange={handelInputChange} className="p-2  placeholder-indigo-500 bg-black bg-opacity-0 border-b-2 border-indigo-500"/>
        
                        <label>Genero:</label>
                        <input type="text" placeholder="Novela" name="genre" onChange={handelInputChange} className="p-2  placeholder-indigo-500 bg-black bg-opacity-0 border-b-2 border-indigo-500 "/>
                    </div>
                </form>

                <div className="flex mt-10 gap-5 mx-auto">
                    <button onClick={() => setEstadoAdd(false)} className="bg-gray-600 text-white px-9 py-2 rounded-md shadow-lg mx-auto" >Cancelar</button>
                    <button onClick={() => {setEstadoAdd(false); addBook(datos)}} className="bg-green-600 text-white px-9 py-2 rounded-md shadow-lg mx-auto" >Agregar</button>
                </div>
            </div>
        </Modal>
        <h2 className="text-gray-100 text-4xl text-center mt-2 mb-2">Libros</h2>
        <table className="text-left w-full">
            <thead className="flex w-full">
                <tr className="flex w-full text-md text-gray-100 border-b-2 border-gray-500">
                    <th className="p-2 w-1/4">Libro</th>
                    <th className="p-2 w-1/4">Lanzamiento</th>
                    <th className="p-2 w-1/4">Genero</th>
                    <th className="p-2 w-1/4"></th>
                </tr>
            </thead>
            <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full max-h-60 border-b-2 border-gray-500 ">
                {
                    listbook.map(item => (
                    <tr className="flex w-full mb-4 border-b border-blue-300 text-gray-100">
                    <td className="p-2 w-1/4">{item.title}</td>
                    <td className="p-2 w-1/4">{item.year}</td>
                    <td className="p-2 w-1/4">{item.genre}</td>
                    <td className="p-2 w-1/4 mx-auto">
                        <button onClick={() => {setEstadoEdit(true); setId(item._id); setDatos({
                            title: item.title,
                            year: item.year,
                            genre: item.genre
                        })}} className="text-blue-400 shadow-lg mr-2"><FontAwesomeIcon icon={faEdit}/></button>
                        <button onClick={() => {setEstadoDelete(true); setId(item._id)}} className="text-red-500 shadow-lg"><FontAwesomeIcon icon={faTrash}/>
                        </button>
                    </td> 
                    </tr>
                    ))
                }
            </tbody>
        </table>
        <div className="flex mt-3 pt-3 w-full mx-auto">
            <button onClick={() => setEstadoAdd(true)} className="bg-green-600 p-2 rounded-md shadow-lg mx-auto text-gray-100">
                <i className="fas fa-plus"></i> Agregar un Libro
            </button>
        </div>
    </div>
        
    );
}

export default ListBook;