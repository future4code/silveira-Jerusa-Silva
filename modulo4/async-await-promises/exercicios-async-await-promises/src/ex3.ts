import axios from 'axios'
import { baseURL } from './baseURL'

//a)Não haverá erro, retorna o type user.
//b) Com o mapeamento, o tempo é otimizado e assim é mais fácil de encontrar erros na requisição.
//c)

export type Subscriber = {
    id: string,
    name:string,
    email:string
}

export const getSubscribersTyped = async (): Promise <Subscriber[]> =>{
    const result = await axios.get(`${baseURL}/subscribers`)
    return result.data
}