import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditorArticulosComponent } from './components/editor-articulos/editor-articulos.component';
import { BorrarArticulosComponent } from './components/borrar-articulos/borrar-articulos.component';
import { ListaRubrosComponent } from './components/lista-rubros/lista-rubros.component';
import { EditorRubrosComponent } from './components/editor-rubros/editor-rubros.component';
import { BorrarRubrosComponent } from './components/borrar-rubros/borrar-rubros.component';
import { ListaProveedoresComponent } from './components/lista-proveedores/lista-proveedores.component';
import { EditorProveedoresComponent } from './components/editor-proveedores/editor-proveedores.component';
import { BorrarProveedoresComponent } from './components/borrar-proveedores/borrar-proveedores.component';
import { EditorTelefonosComponent } from './components/editor-telefonos/editor-telefonos.component';
import { BorrarTelefonosComponent } from './components/borrar-telefonos/borrar-telefonos.component';
import { ListaTelefonosComponent } from './components/lista-telefonos/lista-telefonos.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { EditorClientesComponent } from './components/editor-clientes/editor-clientes.component';
import { BorrarClientesComponent } from './components/borrar-clientes/borrar-clientes.component';
import { ComprarComponent } from './components/comprar/comprar.component';
import { VenderComponent } from './components/vender/vender.component';
import { VerFacturacompraComponent } from './components/ver-facturacompra/ver-facturacompra.component';
import { VerFacturaventaComponent } from './components/ver-facturaventa/ver-facturaventa.component';
import { ListaFacturacompraComponent } from './components/lista-facturacompra/lista-facturacompra.component';
import { ListaFacturaventaComponent } from './components/lista-facturaventa/lista-facturaventa.component';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    ListaArticulosComponent,
    NavbarComponent,
    EditorArticulosComponent,
    BorrarArticulosComponent,
    ListaRubrosComponent,
    EditorRubrosComponent,
    BorrarRubrosComponent,
    ListaProveedoresComponent,
    EditorProveedoresComponent,
    BorrarProveedoresComponent,
    EditorTelefonosComponent,
    BorrarTelefonosComponent,
    ListaTelefonosComponent,
    ListaClientesComponent,
    EditorClientesComponent,
    BorrarClientesComponent,
    ComprarComponent,
    VenderComponent,
    VerFacturacompraComponent,
    VerFacturaventaComponent,
    ListaFacturacompraComponent,
    ListaFacturaventaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
    BrowserAnimationsModule
  ],
  // Es importante declarar aca los services para que sean singletones
  // esto es para activar el http interceptor { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  providers: [AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
