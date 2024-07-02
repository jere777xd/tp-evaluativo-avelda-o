import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { AutosComponent } from './pages/autos/autos.component';
import { MotosComponent } from './pages/motos/motos.component';
import { ProductosComponent } from './pages/productos/productos.component';


@NgModule({
  declarations: [
    AutosComponent,
    MotosComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
