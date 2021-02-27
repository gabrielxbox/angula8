import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavBarComponet } from './component/nav-bar/nav-bar.component';
import { Error404Component } from './component/error404/error-404.component';

@NgModule({
  declarations: [
    NavBarComponet
  ],

  imports: [
    RouterModule.forChild([
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  exports: [
    NavBarComponet
  ]
})
export class CoreModule {

}
