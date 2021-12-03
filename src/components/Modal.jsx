import React from "react";

function DellModal ({children, estado, active, title}) {
    return (
        <>
        {estado && 
        <div className='flex h-screen w-screen fixed top-0 left-0 bg-gray-900 bg-opacity-80'>
            <div className='flex-colum w-1/3 h-auto bg-gray-700 my-auto mx-auto rounded-md bg-opacity-60 p-3 break-words'>
                <h2 className='text-center text-white text-2xl'>{title}</h2>
                {children}
            </div>
        </div>}
        </>
    );
}

export default DellModal;