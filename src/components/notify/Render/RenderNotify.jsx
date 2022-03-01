import React from 'react'

const Render = (props) =>{

    return (
        <>
            {props.notificacoes.map(item =>(
                <div> 
                    <label className='Titulo-notificacao'> {item.titulo}</label>
                    <br />
                    <p className='texto-notificacao'> {item.text}</p>
                    <hr />
                </div> 
           
           ))}
        </>
    )
}

export default Render;