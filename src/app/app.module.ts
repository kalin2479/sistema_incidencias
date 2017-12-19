import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './services/user.service'
import { AuthguardGuard } from './authguard.guard'
import { AccessService } from './services/access.service'

/**
  * Graficos 
**/
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { LoginComponent } from './login/login.component';

/*
Habilito las rutas, para ello llamo al modulo Routes
*/
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { GraficoComponent } from './grafico/grafico.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';

const appRoutes : Routes = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'login',
    component : LoginComponent    
  },
  {
    path : 'dashboard',
    canActivate : [AuthguardGuard],
    component : DashboardComponent    
  },
  {
    path : 'tickets',
    canActivate : [AuthguardGuard],
    component : TicketComponent    
  },
  {
    path : 'ticket',
    canActivate : [AuthguardGuard],
    children : [
      {
        path : ':name',
        component : TicketFormComponent
      },
      {
        path : ':name/:id',
        component : TicketFormComponent
      }
    ]
  },
  // De cualquier otra forma que no se haya establecido la regla ira al login
  {
    path : '**',
    redirectTo : ''
  }
] 



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    PlantillaComponent,
    GraficoComponent,
    TicketComponent,
    TicketFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MaterializeModule,
    ChartsModule
  ],
  providers: [
    UserService,
    AuthguardGuard,
    AccessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
