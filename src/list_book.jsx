import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'

function ListBook(props){

    const [listbook, setBook] = React.useState([])


    React.useEffect(() => {
        apibook();
    }, []);
    

    const apibook = async () => {
        try {
            const data = await fetch('http://localhost:8000/api/books');
            const book = await data.json();
            setBook(book);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="flex flex-col bg-gray-700 bg-opacity-70 w-3/4 mx-auto my-auto rounded-md shadow-2xl p-5">
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
                        <a href="" className="text-blue-400 mr-2"><FontAwesomeIcon icon={faEdit}/></a>
                        <a href="" className="text-red-500"><FontAwesomeIcon icon={faTrash}/></a>
                    </td> 
                    </tr>
                    ))
                }
            </tbody>
        </table>
        <div className="flex mt-3 pt-3 w-full mx-auto">
            <a href="" className="bg-green-600 p-2 rounded-2xl mx-auto text-gray-100">
                <i className="fas fa-plus"></i> Agregar un Libro
            </a>
        </div>
    </div>
        
    );
}

export default ListBook;