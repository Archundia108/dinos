import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertarDinosComponent } from './pages/insertar-dinos/insertar-dinos.component';
import { ListarDinosComponent } from './pages/listar-dinos/listar-dinos.component';
import { EditarDinosComponent } from './pages/editar-dinos/editar-dinos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InsertarDinosComponent,
    ListarDinosComponent,
    EditarDinosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
