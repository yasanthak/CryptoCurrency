import { async, ComponentFixture, TestBed ,inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CryptoCurrencyDashboardComponent } from './crypto-currency-dashboard.component'
import { CryptoCurrencyService } from 'src/app/shared/services/apis/crypto-currency.service';
import { of } from 'rxjs';


describe('CryptoCurrencyDashboardComponent', () => {
  let component: CryptoCurrencyDashboardComponent;
  let fixture: ComponentFixture<CryptoCurrencyDashboardComponent>;
  let cryptoCurrencyService : CryptoCurrencyService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CryptoCurrencyDashboardComponent],

      imports: [
         HttpClientModule

      ],
      providers: [CryptoCurrencyService]
    })
      .compileComponents();
  }));

  beforeEach(inject([CryptoCurrencyService], s => {
    cryptoCurrencyService = s;
    fixture = TestBed.createComponent(CryptoCurrencyDashboardComponent);
    component = fixture.componentInstance;
   
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('ngOnInit() should call and get the Tranformed Array to be displayed', (() => {
    expect(component).toBeDefined();

    const response = [
        
            {
              "quotes": [
                {
                  "buyingPrice": "34.98",
                  "sellingPrice": "37.01",
                  "Profit": 2.030000000000001,
                  "sellingTime": "1230",
                  "buyingTime": "0915"
                }
              ],
              "currency": "BTC",
              "date": "20180507"
            },
            {
              "quotes": [
                {
                  "buyingPrice": "1.45",
                  "sellingPrice": "2.15",
                  "Profit": 0.7,
                  "sellingTime": "1700",
                  "buyingTime": "0900"
                }
              ],
              "currency": "ETC",
              "date": "20180507"
            },
            {
              "quotes": [
                {
                  "buyingPrice": "14.32",
                  "sellingPrice": "15.03",
                  "Profit": 0.7099999999999991,
                  "sellingTime": "1245",
                  "buyingTime": "0930"
                }
              ],
              "currency": "LTC",
              "date": "20180507"
            }
          
    ];
  
    spyOn(cryptoCurrencyService, 'getCryptoCurrencyResults').and.returnValue(of(response))
  
    component.ngOnInit();
  
    fixture.detectChanges();
  
    expect(component.currencyLists).toEqual(response);
 
    

}));
  

});
