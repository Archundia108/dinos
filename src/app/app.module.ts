import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertarDinosComponent } from './pages/insertar-dinos/insertar-dinos.component';
import { ListarDinosComponent } from './pages/listar-dinos/listar-dinos.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertarDinosComponent,
    ListarDinosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
