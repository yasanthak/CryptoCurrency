import { Component, OnInit } from '@angular/core';
import { CryptoCurrencyService } from '../shared/services/apis/crypto-currency.service';
import * as moment from 'moment';

@Component({
    selector: 'app-crypto-currency-dashboard',
    templateUrl: './crypto-currency-dashboard.component.html',
    styleUrls: ['./crypto-currency-dashboard.component.scss']
  })

  export class CryptoCurrencyDashboardComponent implements OnInit {

    currencyLists = [];
    constructor( 
        private cryptoCurrencyService: CryptoCurrencyService,
        ) { 

}

    ngOnInit() {
  
    
        this.cryptoCurrencyService.getCryptoCurrencyResults().subscribe(
            response => {
                 this.currencyLists = response;
           
            },(err: any) => console.log(err)
          )
    }

    getDate(dateFormat:string) {
        const dateString = dateFormat.substring(0,4) + '-'  + dateFormat.substring(4,6) + '-'  + dateFormat.substring(6,8)
        const newDate =  moment(dateString,'YYYY-MM-DD').format('DD-MMM-YYYY');
        return newDate;
            }

    getTime(timeFormat: string) {
        const startTimeParts = timeFormat.substr(0,2) + ':' +  timeFormat.substr(2,3);
        const newTime = moment(startTimeParts,'hh:mmA').format('hh:mmA');

        return newTime;
    }

  }