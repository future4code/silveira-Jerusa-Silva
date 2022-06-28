import connection from "../connection";
import { user } from "../types";

export async function createUser (id: string, email: string, password: string, name: string, role: string) {
    await connection
    .insert({
        id,
        email,
        password,
        name,
        role
    })
    .into("users_autenticacao");
}