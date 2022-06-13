import axios from 'axios'
import { baseURL } from './baseURL'


const sendNotifications = async (subscriberIds: string[]): Promise<void> => {
    try {
        for (const subscriberId of subscriberIds) {
            axios.post(`${baseURL}/notifications`, {
                subscriberId,
                message: "Novas!"
            })
            console.log(`Notificação enviada para  ${subscriberId}`)
        }
        console.log("Notificações enviadas")
    }
    catch (err: any) {
        console.log(err.response?.data || err.message)
    }
}
