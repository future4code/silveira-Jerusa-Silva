
import { EnergyClient } from "./EnergyClient";
import { Customer } from "./customer";
import { User } from "./user";
import { Place } from "./place";

// console.log("Hello, world!")

/** 
 Testes dos exercícios de Herança
 const newUser = new User(
    `${Date.now()}`, 
    "jerusa@teste.com", 
     "jerusa", 
    "54321"
 );
 const custumer1 = new Customer(
    `${Date.now()}`, 
     "jerusa@teste.com", 
    "jerusa", 
    "12345",
    "master"
 )
 console.log(custumer1.purchaseTotal)
 console.log(custumer1.getCreditCard())
 console.log(custumer1.introduceYourself());
*/ 

// Testes de polimorfismo

const comercialClient1 = new EnergyClient(
    "Jerusa",
    10402030,
    10
);
console.log(comercialClient1)
console.log(comercialClient1.calculateBill())

// const myPlace = new Place()