import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { ShowMessageComponent } from './show-message/show-message.component';
import { LoopBackComponent } from './loop-back/loop-back.component';
import { ConvertDistsnceComponent } from './convert-distsnce/convert-distsnce.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    ShowMessageComponent,
    LoopBackComponent,
    ConvertDistsnceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
