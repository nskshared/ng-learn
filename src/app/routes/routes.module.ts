import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {routes} from './routes';
import {CommonComponent} from './common/common.component';

@NgModule({
  imports:[
    RouterModule.forRoot(routes, {enableTracing:true}),
  ],
  declarations:[CommonComponent],
  exports:[
    RouterModule,
    CommonComponent
  ]
})

export class RoutesModule {
}
