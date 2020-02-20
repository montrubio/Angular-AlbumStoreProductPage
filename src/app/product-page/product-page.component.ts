import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  comida;
  //console.log(comida);
  constructor() { }

  ngOnInit() {
    this.comida = ['pato', 'gato', 'c'];

    // return comida;
  }

}
