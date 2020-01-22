import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {Error404Component} from './error404/error404.component';
import {Error500Component} from './error500/error500.component';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,

  
  ],
  declarations:[Error404Component, Error500Component],
  exports:[Error404Component, Error500Component],
  providers:[]
})
export class SharedModule {

}
