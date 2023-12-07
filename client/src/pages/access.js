import React, { useState } from "react";
import AccessComponent from "@/components/AccessComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useRouter } from "next/router";

export default function Access() {
    const [ sign, setSign ] = useState(true) 
    const [ name, setName ] = useState('') 
    const [ nameError, setNameError ] = useState(false) 
    const [ email, setEmail ] = useState('') 
    const [ emailError, setEmailError ] = useState(false) 
    const [ pass, setPass ] = useState('')  
    const [ passError, setPassError ] = useState(false) 
    const [ confPass, setConfPass ] = useState('') 
    const [ confPassError, setConfPassError ] = useState(false) 
    const [ error, setError ] = useState('') 
    const toggleSign = ()=>{
        setSign(!sign)
        setNameError(false)
        setEmailError(false)
        setPassError(false)
        setConfPassError(false)
    }
    const router = useRouter()

    const handleAccess = async () => {
        
        try {
            if (!name) {
                setNameError(true);
              } else {
                setNameError(false);
              }
          
              if (!email) {
                setEmailError(true);
              } else {
                setEmailError(false);
              }
          
              if (!pass) {
                setPassError(true);
              } else {
                setPassError(false);
              }
              if (!confPass) {
                setConfPassError(true);
              } else {
                setConfPassError(false);
              }
          const userData = {
            name_user: name,
            email_user: email,
            pass_user: pass,
            conf_pass_user: confPass,
          }
          let route = sign ? 'login' : 'register'
          const response = await axios.post(`http://localhost:8000/access/${route}`, userData);
          if (response.status === 200) {
            router.push('/')
          }
          
        } catch (error) {
            if (error.response) {
            const { data } = error.response;
            if (data && data.erro && data.mensagem) {
                setError(data.mensagem);
            } else {
                setError('Erro desconhecido na autenticação');
            }
            } else if (error.request) {
                setError('Sem resposta do servidor. Verifique sua conexão com a internet.');
            } else {
                setError('Erro ao enviar a solicitação.');
            }
            console.log(error)
        }
        setName('')  
        setEmail('')  
        setPass('')  
        setConfPass('')
    }
    
    console.log(error)
        
    const handleFormKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    }
    if (sign) {
        return(
            <AccessComponent>
                
                <div className="mb-md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                    <div className="form-outline form-white mb-4">
                        <label className="form-label" htmlFor="typeEmailX">Email</label>
                        <input 
                            type="email" 
                            id="typeEmailX" 
                            className="form-control form-control-lg"  
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            required
                        />
                        {emailError && <span style={{ color: 'red' }}>Campo obrigatório</span>}
                    </div>

                    <div className="form-outline form-white mb-4">
                        <label className="form-label" htmlFor="typePasswordX">Password</label>
                        <input 
                            type="password" 
                            id="typePasswordX" 
                            className="form-control form-control-lg"  
                            value={pass}
                            onChange={(e)=>setPass(e.target.value)}
                            required
                        />
                        {passError && <span style={{ color: 'red' }}>Campo obrigatório</span>}
                    </div>

                    <p className="small mb-5 pb-lg-2">
                        <a className="text-white-50" href="#!">Forgot password?</a>
                    </p>

                    <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleAccess}>Login</button>

                </div>

                <div>
                    <p className="mb-0">
                        Não tem conta? 
                        <a href="#!" className="text-white-50 fw-bold" onClick={toggleSign}>Cadastrar</a>
                    </p>
                </div>
            </AccessComponent>
        )
    }else{
        return(
            <AccessComponent>
                
                <div className="mb-md-0 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase">Cadastrar</h2>
                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                    <div className="form-outline form-white mb-4">
                        <label className="form-label" htmlFor="typeName">Nome</label>
                        <input 
                            type="email" 
                            id="typeName" 
                            className="form-control form-control-lg" 
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            required
                        />
                        {nameError && <span style={{ color: 'red' }}>Campo obrigatório</span>}
                    </div>

                    <div className="form-outline form-white mb-4">
                        <label className="form-label" htmlFor="typeEmailX">Email</label>
                        <input 
                            type="email"
                            id="typeEmailX"
                            className="form-control form-control-lg"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            required
                        />
                        {emailError && <span style={{ color: 'red' }}>Campo obrigatório</span>}
                    </div>

                    <div className="form-outline form-white mb-4">
                        <label className="form-label" htmlFor="typePasswordX">Senha</label>
                        <input 
                            type="password" 
                            id="typePasswordX" 
                            className="form-control form-control-lg" 
                            value={pass}
                            onChange={(e)=>setPass(e.target.value)}
                            required
                        />
                        {passError && <span style={{ color: 'red' }}>Campo obrigatório</span>}
                    </div>

                    <div className="form-outline form-white mb-4">
                        <label className="form-label" htmlFor="typeConfPasswordX">Confirmar Senha</label>
                        <input 
                            type="password" 
                            id="typeConfPasswordX" 
                            className="form-control form-control-lg" 
                            value={confPass}
                            onChange={(e)=>setConfPass(e.target.value)}
                            required
                        />
                        {confPassError && <span style={{ color: 'red' }}>Campo obrigatório</span>}
                    </div>

                    <button className="btn btn-outline-light btn-lg px-5" type="button" onClick={handleAccess}>Cadastrar</button>

                </div>

                <div>
                    <p className="mb-0">Já tem uma conta? <a href="#!" className="text-white-50 fw-bold" onClick={toggleSign}>Entrar</a></p>
                </div>
            </AccessComponent>
        )
    }
}