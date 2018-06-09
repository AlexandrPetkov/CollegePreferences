import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as components from './component/components';
import * as services from './services';
import * as pipes from './pipes';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ...Object.values(components),
    ...Object.values(pipes)
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ...Object.values(services),
  ],
  bootstrap: [components.AppRootComponent]}
)
export class AppModule { }
