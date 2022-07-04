import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertarDinosComponent } from './pages/insertar-dinos/insertar-dinos.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'insertar-dinos'},
  {path:'insertar-dinos',component:InsertarDinosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
