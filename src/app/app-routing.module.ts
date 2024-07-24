import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HubComponent } from './components/hub/hub.component';
import { ApiComponent } from './components/api/api.component';

const routes: Routes = [
  { path: '', redirectTo: 'hub', pathMatch: 'full' },
  { path: 'hub', component: HubComponent },
  { path: 'api', component: ApiComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
