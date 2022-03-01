import React, { useState} from 'react'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import './galery.css'
const Carrocel = (propsIMG) =>{
    
    const [plate, setPlate] = useState('QIZ1774')
    
    /*
    // URL BASE -- tirar espacos
    https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/  <número da placa>  %2F  <nome da foto> ?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac

    */
    return (
        
        <div className='container-menu'> 
             <Gallery>
                 {/* IMAGEM  */}
                <Item
                    original= {`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2Fcnh?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`}
                    thumbnail={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2Fcnh?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`}
                    width="1024"
                    height="768"
                    
                >
                {({ ref, open }) => (
                    <div class="container">
                        <img   
                            ref={ref}  
                            onClick={open} 
                            width="256"
                            height="192"
                            className='container-img'
                            src={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2Fcnh?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`}
                        />
                        <div class="centered">
                            <p className='text'> CNH </p> 
                        </div>
                    </div>
                        
                )}
                </Item>

                <Item
                    original={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2FcarDocument?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`}
                    thumbnail={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2FcarDocument?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`}
                    width="1024"
                    height="768"
                >
                {({ ref, open }) => (
                <div class="container">
                    <img   
                        ref={ref} 
                        onClick={open} 
                        width="256"
                        height="192"
                        className='container-img'
                        src={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2FcarDocument?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`} 
                    />
                    <div class="centered">
                        <p className='text'> CRV </p> 
                    </div>
                </div>
                )}
                </Item>

                <Item
                    original={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2Faddress?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`}
                    thumbnail={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2Faddress?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`}
                    width="1024"
                    height="768"
                >
                {({ ref, open }) => (
                    <div class="container">
                        <img   
                            ref={ref} 
                            onClick={open} 
                            width="256"
                            height="192"
                            className='container-img'
                            src={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2Faddress?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`} 
                        />
                        <div class="centered">
                            <p className='text'>Endereço </p> 
                        </div>
                    </div>
                )}
                </Item>

                <Item
                    original={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2Fchassis?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`} 
                    thumbnail={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2Fchassis?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`} 
                    width="1024"
                    height="768"
                >
                {({ ref, open }) => (
                    <div class="container">
                        <img   
                            ref={ref} 
                            onClick={open} 
                            width="256"
                            height="192"
                            className='container-img'
                            src={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2Fchassis?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`} 
                        />
                        <div class="centered">
                            <p className='text'> Chassi </p>
                        </div>
                    </div>
                )}
                </Item>
                <Item
                    original={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2Ffront?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`} 
                    thumbnail={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2Ffront?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`} 
                    width="1024"
                    height="768"
                >
                {({ ref, open }) => (
                    <div class="container">
                        <img   
                            ref={ref} 
                            onClick={open} 
                            width="256"
                            height="192"
                            className='container-img'
                            src={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2Ffront?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`}  
                        />
                        <div class="centered">
                            <p className='text'> Frente </p>
                        </div>
                    </div>
                )}
                </Item>
                <Item
                    original={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2Fback?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`} 
                    thumbnail={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2Fback?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`} 
                    width="1024"
                    height="768"
                >
                {({ ref, open }) => (
                    <div class="container">
                        <img   
                            ref={ref} 
                            onClick={open} 
                            width="256"
                            height="192"
                            className='container-img'
                            src={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2Fback?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`} 
                        />
                        <div class="centered">
                            <p className='text'> Traseira </p>
                        </div>
                    </div>
                )}
                </Item>

                <Item
                    original={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2Fleft?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`} 
                    thumbnail={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2Fleft?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`} 
                    width="1024"
                    height="768"
                >
                {({ ref, open }) => (
                    <div class="container">
                        <img   
                            ref={ref} 
                            onClick={open} 
                            width="256"
                            height="192"
                            className='container-img'
                            src={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2Fleft?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`} 
                        />
                        <div class="centered">
                            <p className='text'> Lat. Esquerda </p>
                        </div>
                    </div>
                )}
                </Item>
                <Item
                    original={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2Fright?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`}
                    thumbnail={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2Fright?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`}
                    width="1024"
                    height="768"
                >
                {({ ref, open }) => (
                    <div class="container">
                        <img   
                            ref={ref} 
                            onClick={open} 
                            width="256"
                            height="192"
                            className='container-img'
                            src={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2Fright?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`}
                        />
                        <div class="centered">
                            <p className='text'> Lat. Direita </p>
                        </div>
                    </div>
                )}
                </Item>

                <Item
                    original={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2FbackLeft?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`}
                    thumbnail={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2FbackLeft?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`}
                    width="1024"
                    height="768"
                >
                {({ ref, open }) => (
                    <div class="container">
                        <img   
                            ref={ref} 
                            onClick={open} 
                            width="256"
                            height="192"
                            className='container-img'
                            src={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2FbackLeft?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`}
                        />
                        <div class="centered">
                            <p className='text'> Traseira Esquerda </p>
                        </div>
                    </div>
                )}
                </Item>
                <Item
                    original={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2FbackRight?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`}
                    thumbnail={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2FbackRight?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`}
                    width="1024"
                    height="768"
                >
                {({ ref, open }) => (
                    <div class="container">
                        <img   
                            ref={ref} 
                            onClick={open} 
                            width="256"
                            height="192"
                            className='container-img'
                            src={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2FbackRight?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`}
                        />
                        <div class="centered">
                            <p className='text'> Traseira Direita </p>
                        </div>
                    </div>
                )}
                </Item>
                
                <Item
                    original={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2Fpanel?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`}
                    thumbnail={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2Fpanel?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`}
                    width="1024"
                    height="768"
                >
                {({ ref, open }) => (
                    <div class="container">
                        <img   
                            ref={ref} 
                            onClick={open} 
                            width="256"
                            height="192"
                            className='container-img'
                            src={`https://firebasestorage.googleapis.com/v0/b/oon-app-c9afc.appspot.com/o/${plate}%2Fpanel?alt=media&token=c6b22d99-918f-4be6-8a74-4b2d527d44ac`}
                        />
                        <div class="centered">
                            <p className='text'> Painel </p>
                        </div>
                    </div>
                )}
                </Item>
            </Gallery>
           
    
        </div>
    )

}


export default Carrocel