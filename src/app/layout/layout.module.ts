import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout.component';
import {RoutesModule} from '../routes/routes.module';

@NgModule({
  imports:[

    RoutesModule,
  ],
  providers:[],
  declarations:[
    LayoutComponent,
  ],
  exports:[
    LayoutComponent,
  ]
})
export class LayoutModule {
}
