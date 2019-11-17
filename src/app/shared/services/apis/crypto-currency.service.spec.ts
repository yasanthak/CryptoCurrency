import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { CryptoCurrencyService } from './crypto-currency.service';

 

describe('CryptoCurrencyService Tests', () => {

    let cryptoCurrencyService: CryptoCurrencyService;
    let httpTestingController: HttpTestingController;
  
    let testCryptoResults = [
        {
            "currency": "BTC",
            "date": "20180507",
            "quotes": [
                {
                    "time": "0915",
                    "price": "34.98"
                },
                {
                    "time": "1045",
                    "price": "36.13"
                },
                {
                    "time": "1230",
                    "price": "37.01"
                },
                {
                    "time": "1400",
                    "price": "35.98"
                },
                {
                    "time": "1530",
                    "price": "33.56"
                }
            ]
        }
      ]


    

      beforeEach(() => {

        TestBed.configureTestingModule({
          imports: [ HttpClientTestingModule ],
          providers: [ CryptoCurrencyService ]
        });
    
        cryptoCurrencyService = TestBed.get(CryptoCurrencyService);
        httpTestingController = TestBed.get(HttpTestingController);
      });

      afterEach(() => {
        httpTestingController.verify();
      });


      it('should GET all CryptoCurrencyResults', () => {
        cryptoCurrencyService.getCryptoCurrencyResults()
          .subscribe((data: any) => {
            expect(data.length).toBe(1);
          });
    
        let cryptoCurrencyRequest: TestRequest = httpTestingController.expectOne('http://localhost:3000/api/currencies');
        expect(cryptoCurrencyRequest.request.method).toEqual('GET');
    
        cryptoCurrencyRequest.flush(testCryptoResults);
      });
      

});