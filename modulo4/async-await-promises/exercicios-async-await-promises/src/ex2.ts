import axios from 'axios';
import { baseURL } from './baseURL';


//a) A diferença de sintaxe é: função nomeada recebe um nome, arrow function é atribuída a uma variável.


//b)


const getSubscribersArrowFunction = async (): Promise<any[]> =>{
     const result = await axios.get(`${baseURL}/subscribers`)
     return result.data
}
