import React, {useState, useEffect} from "react";
import Header from '../../components/Headers'
import {Home,Button, DivForm, DivBody, Name, Form, Text, ButtonSend, DivPosts } from './styled';
import {BASE_URL} from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';
import {useNavigate, useParams} from 'react-router-dom';
import useForm from '../../hooks/useForm';
import axios from 'axios';
import {goToPost} from '../../Router/Coordinator';

function PageGetFeed(){

  const [votess, setVote] =useState({}, +1);

  const postslist = useRequestData([], `${BASE_URL}/posts`);


  const navigate= useNavigate();

  const { form, onChange, cleanFields } = useForm({ title:"", body: ""})

  const onSubmitPost = () => {
    const body = form
    const url = `${BASE_URL}/posts`
    const headers = {Authorization: localStorage.getItem("token")}

    axios.post(url, body, {headers})
    .then((res) => {
        console.log(res.data)
        alert("Post enviado")
        cleanFields()
    })
    .catch((error) => {
        
        console.log(error.res);
        
    })
  }

  const votes = (id) => {
    const headers = { auth: localStorage.getItem("token")}
    const body = {"direction": 1}
    axios
    .post(`${BASE_URL}posts/${id}/votes`, body, headers)
        .then((res) => {
            setVote(res.data)
           
        })
        .catch((err) => {
            console.log(err.res.date)
        })
}

  const deletePostVote = (id) => {
    const url = `${BASE_URL}/posts/:${id}/votes`
    const headers = { auth: localStorage.getItem("token")}
    axios.delete( url, {headers})
        .then((res) => {
          
        })
        .catch((err) => {
          console.log(err.res);
          
        });
  }

  const onClickPost = (id) => {
    goToPost(navigate, id)
  }  

  

  const lposts = postslist.map((item) =>{
    return(
      <DivForm key={item.id}>

      
          <Name><strong>Nome: </strong>{item.username}</Name>

          <DivBody>
          <Button key={item.id} onClick={() => onClickPost(item.id)}> 
            </Button> <p><strong> Título: </strong> { item.title}</p>
          </DivBody>
          <Text>{item.body}</Text>
         
          <p><strong>Votos: </strong>{item.voteSum}</p>

          <div>
          <button onClick={() => votes(item.id)}> Positivo</button>
          <button onClick={() => deletePostVote(item.id)}> Deletar voto</button>
          </div>
            
          <div><p><strong>Comentários:</strong>{item.commentCount}</p></div>

      
      </DivForm>
    )
  })

  return (
    <Home>
      <Header/>
        
            <Form onClick={onSubmitPost}>
                  <input className="input"
                  name={"title"}
                  value={form.title}
                  placeholder="Título"
                  onChange={onChange}
                  pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}
                  />
                  <input className="input"
                  name={"body"}
                  value={form.body}
                  placeholder="Texto"
                  onChange={onChange}
                  pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}
                  />
                  <ButtonSend type="submit"> Enviar </ButtonSend> 
            </Form>
          <DivPosts>{lposts}</DivPosts>
        
      </Home>


  )

}

export default PageGetFeed