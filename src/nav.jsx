import React, { useState } from "react";
import Modal from "./components/Modal.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'



function Navbar(props){

    const [ModalSignin, setSigIn] = useState(false);
    const [datos, setDatos] = useState({
        Username: '',
        Email: '',
        password: ''
    });

    React.useEffect(() => {
    });

    const handelInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    };

    const signIn = async (form) => {
        console.log(form.Email)
        console.log(form.password)
        try {
            const data = await fetch('http://localhost:8000/api/users/signin', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: form.Email,
                    password: form.password
                })
            });
            const book = await data.json();
            console.log(book)
        } catch (error) {
            console.log(error);
        }
        setSigIn(false)
    };

    return(
        <div className="flex h-16 bg-opacity-70 text-white bg-black mb-16 px-20">
            <Modal estado={ModalSignin} active={setSigIn} title='SignIn'>
                <div className='flex-colum w-full'>
                    <form className="flex flex-col text-gray-100 my-5">
                        <div className="flex flex-col flex-grow gap-5">                  
            
                            <label>Email:</label>
                            <input type="text" placeholder="j_perez@algo.algo" name="Email" onChange={handelInputChange} className="p-2  placeholder-indigo-500 bg-black bg-opacity-0 border-b-2 border-indigo-500"/>
            
                            <label>Password:</label>
                            <input type="text" placeholder="********" name="password" onChange={handelInputChange}  className="p-2  placeholder-indigo-500 bg-black bg-opacity-0 border-b-2 border-indigo-500 "/>
                        </div>
                    </form>

                    <div className="flex mt-10 gap-5 mx-auto">
                        <button onClick={() => setSigIn(false)} className="bg-gray-600 text-white px-9 py-2 rounded-md shadow-lg mx-auto" >Cancelar</button>
                        <button onClick={() => {setSigIn(false); signIn(datos)}} className="bg-green-600 text-white px-9 py-2 rounded-md shadow-lg mx-auto" >Aceptar</button>
                    </div>
                </div>
            </Modal>
            {/* <Modal estado={ModalSignin} active={setSigIn} title='SignIn'>
                <div className='flex-colum w-full'>
                    <form className="flex flex-col text-gray-100 my-5">
                        <div className="flex flex-col flex-grow gap-5">

                            <label>Username:</label>
                            <input type="text" placeholder="juan-perez" name="Username" onChange={handelInputChange} className="p-2 placeholder-indigo-500 bg-black bg-opacity-0 border-b-2 border-indigo-500"/>
                        
            
                            <label>Email:</label>
                            <input type="text" placeholder="j_perez@algo.algo" name="Email" onChange={handelInputChange} className="p-2  placeholder-indigo-500 bg-black bg-opacity-0 border-b-2 border-indigo-500"/>
            
                            <label>Password:</label>
                            <input type="text" placeholder="********" name="password" onChange={handelInputChange}  className="p-2  placeholder-indigo-500 bg-black bg-opacity-0 border-b-2 border-indigo-500 "/>
                        </div>
                    </form>

                    <div className="flex mt-10 gap-5 mx-auto">
                        <button onClick={() => setSigIn(false)} className="bg-gray-600 text-white px-9 py-2 rounded-md shadow-lg mx-auto" >Cancelar</button>
                        <button onClick={() => {setSigIn(false); signIn(datos)}} className="bg-green-600 text-white px-9 py-2 rounded-md shadow-lg mx-auto" >Aceptar</button>
                    </div>
                </div>
            </Modal> */}
            <div className="text-white text-xl my-auto ">
                <h2 className="">Test Top Tive</h2>
            </div>
            <div className="flex ml-auto my-auto gap-5">
                <button onClick={() => setSigIn(true)}  className="border-2 border-blue-500 text-white p-1 w-20 rounded-md shadow-lg" >SignIn</button>
                <button  className="border-2 border-green-500 text-white p-1 w-20 rounded-md shadow-lg" >SignUp</button>
            </div>
        </div>
        
    );
}

export default Navbar;