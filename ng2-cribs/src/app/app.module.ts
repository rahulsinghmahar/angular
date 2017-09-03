import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { TabsDemoComponent } from './tabs/tabs-demo.component';
import { TypeaheadDemoComponent } from './typeahead/typeahead-demo.component';


import { TabsModule } from './tabs/tabs.module';
import { TypeaheadModule } from './typeahead/typeahead.module';




@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
	TabsDemoComponent,
	TypeaheadDemoComponent
	
  ],
  imports: [
    BrowserModule,
	TabsModule,
	TypeaheadModule,
	FormsModule,
	ReactiveFormsModule,
	HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
