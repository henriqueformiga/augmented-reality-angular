import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { FotoComponent } from './pages/foto/foto.component';
import { SobreComponent } from './pages/sobre/sobre.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FotoComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
