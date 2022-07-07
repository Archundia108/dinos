import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarDinosComponent } from './pages/editar-dinos/editar-dinos.component';
import { InsertarDinosComponent } from './pages/insertar-dinos/insertar-dinos.component';
import { ListarDinosComponent } from './pages/listar-dinos/listar-dinos.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'insertar-dinos'},
  {path:'insertar-dinos',component:InsertarDinosComponent},
  { path: 'editar-dinos/:id', component: EditarDinosComponent },
  {path:'listar-dinos',component:ListarDinosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
