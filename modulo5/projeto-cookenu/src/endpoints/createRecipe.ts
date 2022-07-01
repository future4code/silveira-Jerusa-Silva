import { Response, Request } from "express"
import connection from "../data/connection"
import { GetTokenData, Recipes, today } from "../services/types"
import { generateId } from "../services/uuid"

export const createRecipe = async (req: Request, res: Response): Promise<any> => {

  let erroCode = 400

  try {
    const token = req.headers.authorization as string

    if (!token) {
      erroCode = 401
      throw new Error("Insira o token")
    }

    const { title, description } = req.body
    const id: string = generateId()
    const creation: string = today

    if (!title) {
      erroCode = 406;
      throw new Error("Insira o título")
    }

    if (!description) {
      erroCode = 406
      throw new Error("Insira a descrição")
    }

    const tokenData = GetTokenData(token)

    const response: Recipes = await connection("cookenu_recipes").insert({
      id: id,
      title: title,
      description: description,
      creation: creation,
      user_id: tokenData?.id,
    });

    res.status(201).send("Receita criada")
  } catch (error: any) {
    res.status(erroCode).send(error.sqlMessage || error.message)
  }
}