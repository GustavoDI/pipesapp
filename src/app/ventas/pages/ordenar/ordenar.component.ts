import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  nosotros: string = " nosotros";  
  enMayusculas : boolean = true;
  heroes:Heroe[]=[
    {
      nombre: "Superman",
      vuela:true,
      color: Color.azul
    },
    {
      nombre: "Batman",
      vuela:false,
      color: Color.negro
    },
    {
      nombre: "Robin",
      vuela:false,
      color: Color.verde
    },
    {
      nombre: "Daredevil",
      vuela:false,
      color: Color.rojo
    }
  ]
  constructor( ) { }

  ngOnInit(): void {
  }
  cambioMayusculas(){
    this.enMayusculas = !this.enMayusculas;
  }

}
