import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import { MainHeightComponent } from './components/main-height/main-height.component';
import { MainDownComponent } from './components/main-down/main-down.component';
import {CarouselModule} from "./modules/carousel/carousel.module";
import { FooterComponent } from './components/footer/footer.component';
import {BlackredbuttonModule} from "./modules/blackredbutton/blackredbutton.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainHeightComponent,
    MainDownComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        CarouselModule,
        BlackredbuttonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
