import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower : string ='gustavo';
  nombreUpper : string ='GUSTAVO';
  nombreCompleto : string ='GuSTaVo DiAz';

  fecha: Date = new Date(); //el dia de hoy

  constructor() { }

  ngOnInit(): void {
  }


}
