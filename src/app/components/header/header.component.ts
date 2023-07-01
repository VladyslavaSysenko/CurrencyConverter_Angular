import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @Input() rates: Record<string, Record<string, number>>;

  usd_uah: number = 0;
  eur_uah: number = 0;

  // get exchange rates
  ngOnInit(): void {
    this.usd_uah = 1/this.rates['UAH']['USD'];
    this.eur_uah = 1/this.rates['UAH']['EUR'];
  }
}


