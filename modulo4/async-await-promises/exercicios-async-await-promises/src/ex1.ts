import axios from 'axios'
import { baseURL } from './baseURL'



//a) Utilizar o endpoint GET /subscribers
//b) Com Promise <any[]>

//c)

async function getAllSubscribers(): Promise<any[]> {
    const result = await axios.get(`${baseURL}/subscribers`)

    return result.data
}