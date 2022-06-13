import axios from 'axios'
import { baseURL } from './baseURL'

//a) Função assíncrona, devolve uma Promise<void>.

//b)

export const createNews = async(title: string, content: string): Promise<void> =>{
    await axios.put(`${baseURL}/news`, {
        title,
        content,
        date: new Date(). getTime()
    })
}