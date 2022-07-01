import { app } from "./data/app";
import { createRecipe } from "./endpoints/createRecipe";
import { getProfile } from "./endpoints/getProfile";
import { getRecipe } from "./endpoints/getRecipe";
import { getProfileUser } from "./endpoints/getProfileUser";
import { login } from "./endpoints/login";
import { signUp } from "./endpoints/signUp";




app.post("/signup", signUp)
app.post("/login", login)
app.get("/user/profile", getProfile) //Pegar próprio perfil.
app.get("/user/:id", getProfileUser) //Pegar perfil de outro usuário.
app.post("/recipes", createRecipe)   //Criar receita
app.get("/recipes/:id", getRecipe)   //Pegar receita

