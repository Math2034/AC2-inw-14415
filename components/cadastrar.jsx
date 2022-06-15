import { app, database } from '../service/firebase'
import { collection, addDoc, getDocs, orderBy, query } from 'firebase/firestore'
import { useState, useEffect } from 'react'

export default function Cadastrar(){

  //hooks
  const[nome, SetNome]=useState('')
  const[email, SetEmail]=useState('')
  const[telefone, SetTelefone]=useState('')
  const[mensagem, SetMensagem]=useState('')

  //create
  const create = ()=>{
    addDoc(contato,
    {
      nome:nome,
      telefone:telefone,
      email:email,
      mensagem:mensagem
    }).then(()=>{
      SetNome('')
      SetEmail('')
      SetTelefone('')   
      SetMensagem('')
      read()
    })
  }

    return(
    <>
      <main className="container">
        <div className="row">
          <div className="col-md">
            <h3 className="text-center">Cadastrar</h3>
            <input
             type="text" placeholder="Nome"
             className="form-control" required
             onChange={event=>SetNome(event.target.value)}
             value={nome}/>
            <br/>
            <input type="tel" placeholder="Telefone"
             className="form-control" required
             onChange={event=>SetTelefone(event.target.value)}
             value={telefone}/>
            <br/>
            <input type="text" placeholder="Email"
             className="form-control" required
             onChange={event=>SetEmail(event.target.value)}
             value={email}/>
            <br/>
            <textarea placeholder="Mensagem" className="form-control"
             required onChange={event=>SetMensagem(event.target.value)}
             value={mensagem}/>
            <br/>
            <input type="submit" value="Salvar" className="btn btn-outline-dark form-control" onClick={create}/>
          </div>
	  </div>
     </main>
   </>
    )
}