import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { RatingSelectComponent } from './components/rating-select/rating-select.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    RatingSelectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
