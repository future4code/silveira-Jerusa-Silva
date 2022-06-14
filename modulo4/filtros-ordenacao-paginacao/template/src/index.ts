import { app } from './app'
import { getUsersByName } from './endpoints/getUsersByName'
import { getAllUsersByType } from './endpoints/getAllUsersByType'
import { getFiveUsersByPage } from './endpoints/getFiveUsersByPage'



app.get("/users", getUsersByName)
app.get("/users/byType/:type", getAllUsersByType)
app.get("/users/byPage/:page", getFiveUsersByPage)

