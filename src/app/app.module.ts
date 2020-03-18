import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from 'angular-admin-lte';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { adminLteConf } from './admin-lte.conf';
import { CoreModule } from 'src/core/core.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, CoreModule, FormsModule,
    AppRoutingModule, LayoutModule.forRoot(adminLteConf),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
