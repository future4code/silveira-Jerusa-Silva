import app from "./app"
import {signUp} from './endpoints/signUp'
import {getUserByEmail} from './endpoints/getUserByEmail'
import {login} from './endpoints/login'
import {getDataByActiveToken} from './endpoints/getDataByToken'



app.get('/user/:email', getUserByEmail)
app.get('/token', getDataByActiveToken)
app.post('/signup', signUp)
app.post('/login', login)