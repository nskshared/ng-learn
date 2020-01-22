import {LayoutComponent} from '../layout/layout.component';
import {Error500Component} from './common/error500/error500.component';
import {Error404Component} from './common/error404/error404.component';


export const routes = [
      
      {
        path:'',
        component:LayoutComponent,
        children:[
          {
            path:'', redirectTo:'home', pathMatch:'full'
          },
          {
            path:'home', loadChildren:'./employee/employee.module#EmployeeModule'
          },
          // Not lazy-loaded routes
          {
            path:'404', component:Error404Component
          },
          {
            path:'500', component:Error500Component
          }
          ,


// Not found
          {
            path:'**', redirectTo:'home'
          }
          ,
        ]
      },
    ]
;
