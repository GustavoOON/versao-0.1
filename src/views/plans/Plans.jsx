import React ,{useState, useEffect} from 'react'
import './plan.css'
import axios  from "axios"
import Cookies  from 'js-cookie'
import Multiselect from 'multiselect-react-dropdown';
import { Spinner }  from 'react-bootstrap';
import {
    CContainer ,
    CForm,
    CNavbarBrand,
    CFormInput ,
    CButton ,
    CNavbar,
    CCard,
    CCardBody,
    CCardFooter,
    
  } from '@coreui/react'
  
import NewPlan from './render/NewPlan'
import ShowPlan from './render/ShowPlan'

const Plans = () =>{

    const [dados, setDados] = useState([])
    // Array de objetos com planos
    const token = Cookies.get('TokenID')
    const userType = Cookies.get('userType')
    let config = {
      headers: {
        'Authorization': token, 
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    };
    let aux = 3
    // Toda vez que monta o componente puxa os valores
    useEffect( ()=>{
        axios 
            .get("http://dashboardbff.oonpayperuse.com.br/plansService/plans", config)
            .then((response) => { 
                setDados(response.data)
                console.log(response.data)
            })
            .catch(r =>{ 
                console.log('error', r), alert('Login expirado'),window.location.reload()
            })
    }, []) 

    const atualizaPage = () =>{
        setDados([])
        axios 
            .get("http://dashboardbff.oonpayperuse.com.br/plansService/plans", config)
            .then((response) => { 
                setDados(response.data)
                console.log(response.data)
            })
            .catch(r =>{ 
                console.log('error', r), alert('Login expirado'),window.location.reload()
            })
    }


    if(dados == ''){
        return(
            <>
                <h4> <Spinner animation="grow" variant="info" />  </h4>
            </>
        )
    }else{
        return (
            <div className="container-plan"> 
               
                <CNavbar colorScheme="light" className="bg-light">
                    <CContainer  fluid>
                        <CNavbarBrand  href="#"> </CNavbarBrand>
                        <CForm className="d-flex container-search">
                            <CFormInput type="search" className="me-2" size='lg' placeholder="Procurar" />
                            <CButton type="submit" size="sm" className='btn-pesq' color="secondary" variant="outline">
                                Procurar
                            </CButton>
                            {userType == "ADMIN" ? 
                                (<NewPlan attPage={atualizaPage} />)
                                :null
                            }
                        </CForm>
                    </CContainer>
                </CNavbar>
                
                 <div className='container-opcoes'>
                    {dados.map((plano, index) =>{
                       
                        if(index < aux){
                            return(
                                <div key={index} className='container-show-plans'>
                                    <ShowPlan dados={plano} attPage={atualizaPage} />
                                </div>
                            )
                        }
                    })}
                    
                </div> 
    
            </div>
        )
    }
    
}

export default Plans