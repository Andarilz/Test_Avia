import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  km:    number = 0;
  age:   number = 0;
  weight:number = 0;
  price_aero_econom:  number|string = 0;
  price_aero_improved:number|string = 0;
  price_aero_luxuary: number|string = 0;
  price_gd_econom:    number|string = 0;
  price_gd_improved:  number|string = 0;
  price_gd_luxiary:   number|string = 0;

  callculate(event){
      event.preventDefault()

       this.weight > 20 ? this.price_aero_econom   = 'Недоступно' : this.price_aero_econom   = this.km * 4 + (this.weight > 5 ? 4000 : 0)

       this.weight > 50 ? this.price_aero_improved = 'Недоступно' : this.price_aero_improved = this.km * (this.age > 7 ? 8 : 8 * 0.3    ) +  (this.weight > 20 ? 5000 : 0)

       this.weight > 50 ? this.price_aero_luxuary  = 'Недоступно' : this.price_aero_luxuary  = this.km * (this.age > 16 ? 15 : 15 * 0.3 )

       this.weight > 50 ? this.price_gd_econom     = 'Недоступно' : this.price_gd_econom     = this.km * (this.age > 5 ? 0.5 : 0.5 * 0.5) +  (this.weight > 15 ? 50 * this.weight : 0)

       this.weight > 60 ? this.price_gd_improved   = 'Недоступно' : this.price_gd_improved   = this.km * (this.age > 8 ? 2 : 2 * 0.3    ) +  (this.weight > 20 ? 50 * this.weight : 0)

       this.weight > 60 ? this.price_gd_luxiary    = 'Недоступно' : this.price_gd_luxiary    = this.km * (this.age > 16 ? 4 : 4 * 0.2   )

  }
}
