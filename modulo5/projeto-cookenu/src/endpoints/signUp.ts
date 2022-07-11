import { Response, Request } from "express"
import connection from "../data/connection"
import { HashManager, User } from "../services/types"
import { generateId } from "../services/uuid"

export const signUp = async (req: Request, res: Response): Promise<any> => {
  let erroCode = 400
  try {
    const { name, email, password } = req.body
    const id = generateId()

    if (!name) {
      erroCode = 406
      throw new Error("Insira o nome")
    }
    if (!email) {
      erroCode = 406;
      throw new Error("Insira e-mail")
    }
    if (!password) {
      erroCode = 406;
      throw new Error("Digite a senha")
    } else if (password.length <= 6) {
      erroCode = 406;
      throw new Error("A senha deve conter 6 caracteres")
    }

    const hashManager: HashManager = new HashManager()
    const hashPassword = hashManager.generateHash(password)

    const response: User = await connection("cookenu_user").insert({
      id: id,
      name: name,
      email: email,
      password: hashPassword,
    });

    res.status(201).send("Usuário registradodo com sucesso!")
  } catch (error: any) {
    res.status(erroCode).send(error.sqlMessage || error.message)
  }
}