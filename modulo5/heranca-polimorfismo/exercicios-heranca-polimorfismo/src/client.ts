export interface Client {


    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
    // Retorna o valor da conta em reais
}