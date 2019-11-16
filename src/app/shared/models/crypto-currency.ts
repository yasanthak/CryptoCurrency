export class CryptoCurrency {
    currency: string;
    date: string;
    quotes : Currencyquotes[] = []; 
}

export class Currencyquotes {
    time: string;
    buyingPrice : number;
    sellingPrice : number;
    buyingTime: string;
    sellingTime : string;
    Profit : number
  
    constructor(values: Object = {}){
      Object.assign(this, values);
    }
  }