import { Component, Input, ViewChild, ElementRef} from '@angular/core';



@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {

  @Input() rates: Record<string, Record<string, number>>;
  @Input() currencies: string[];
  
  @ViewChild('valuefrom') value_from: ElementRef;
  @ViewChild('valueto') value_to: ElementRef;
  @ViewChild('currencyfrom') currency_from: ElementRef;
  @ViewChild('currencyto') currency_to: ElementRef;
  
  multiplyer: number = 1;

  // recalculate another input
  convert(code:string): void{
    // calculate multiplyer for provided currencies
    this.multiplyer = this.rates[this.currency_from.nativeElement.value][this.currency_to.nativeElement.value];
    // change opposite value
    if (code == "from"){
      this.value_to.nativeElement.value = Number((this.value_from.nativeElement.value * this.multiplyer).toFixed(2));
    }
    if (code == "to"){
      this.value_from.nativeElement.value = Number((this.value_to.nativeElement.value / this.multiplyer).toFixed(2));
    } 
  }
}
