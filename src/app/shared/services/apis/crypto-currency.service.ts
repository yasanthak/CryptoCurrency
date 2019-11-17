import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CryptoCurrency, Currencyquotes } from '../../models/crypto-currency';


@Injectable({
    providedIn: 'root'
})
export class CryptoCurrencyService {
    private cryptoCurrencyUrl = 'http://localhost:3000/api/currencies';

    constructor(private http: HttpClient) { }

    getCryptoCurrencyResults(): Observable<any> {

        return this.http.get<any>(this.cryptoCurrencyUrl)
            .pipe(map(res => {
                const currencyList = res
                const tranFormedArray = [];

                currencyList.forEach(result => {

                    const resultList = this.maxProfitForCurrency(result);
                    tranFormedArray.push(resultList);

                });

                return tranFormedArray;

            }),
                catchError(this.handleHttpError)

            );
    }

    private maxProfitForCurrency(results) {
        let length = results.quotes.length,
            min = Infinity,
            time = '',
            res = -Infinity;
        const resObj = new Currencyquotes();
        const resArray = new CryptoCurrency();


        resArray.currency = results.currency;
        resArray.date = results.date;

        for (let i = 0; i <= length - 1; i++) {
            if (results.quotes[i].price < min) {
                min = results.quotes[i].price;
                time = results.quotes[i].time;
            } else if ((results.quotes[i].price > min && results.quotes[i].price) - min > res) {
                res = results.quotes[i].price - min
                resObj.buyingPrice = min;
                resObj.sellingPrice = results.quotes[i].price;
                resObj.Profit = res;
                resObj.sellingTime = results.quotes[i].time;
                resObj.buyingTime = time;



            }

        }

        if (isFinite(res)) {
            resArray.quotes.push(resObj);

            return resArray;
        } else {
            return 0;
        }
    };

    private handleHttpError(err) {

        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.Message}`;
        } else {
            errorMessage = `Backend returned code ${err.status}: ${err.error.Message}`;
        }
        return throwError(errorMessage);
    }

}