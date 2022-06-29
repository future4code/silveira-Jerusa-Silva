import { hashSync, genSaltSync, compareSync } from "bcryptjs";

export class User {
  constructor(
    protected id: string,
    protected name: string,
    protected email: string,
    protected password: string
  ) {}
}

export class Recipes {
  constructor(
    protected id: string,
    protected title: string,
    protected description: string,
    protected creation: string,
    protected user_id: string
  ) {}
}

export class FollowSystem {
  constructor(
    protected id: string,
    protected user_id: string,
    protected user_follow: string
  ){}
}

export type Authentication = {
  id: string;
};

export class HashManager {
  generateHash = (plainText: string): string => {
    const cost: number = 12;
    const salt: string = genSaltSync(cost);
    const cypherText: string = hashSync(plainText, salt);

    return cypherText;
  };

  compareHash = (plainText: string, cypherText: string): boolean => {
    return compareSync(plainText, cypherText);
  };
}



