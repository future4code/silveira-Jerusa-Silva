import axios from 'axios'
import { baseURL } from './baseURL'


//a) Recebe um array de Promises, mesmo que não tenha recebido todas as respostas.
//b) Não é necessário aguardar todas as respostas para enviar uma nova requisição.

//c)

export const sendNotificationsPromiseAll = async (subscriberIds: string[]): Promise<void> => {
    try {
        const requests = subscriberIds.map((subscriberId: string) => {
            return axios.post(`${baseURL}/notifications`, {
                subscriberId,
                message: "Novas"
            })
        })
        await Promise.all(requests)
        console.log("Notificações enviadas")
    }
    catch (err: any) {
        console.log(err.response?.data || err.message)
    }
}