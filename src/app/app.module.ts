import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccessoiresComponent } from './accessoires/accessoires.component';
import { FormsModule } from '@angular/forms';
import { AccessoiresFormatesComponent } from './accessoires-formates/accessoires-formates.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessoiresComponent,
    AccessoiresFormatesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
