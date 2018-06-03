import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as components from './component/components';

@NgModule({
  declarations: [
    ...Object.values(components),
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [components.AppRootComponent]}
)
export class AppModule { }
