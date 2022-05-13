import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { ShowCarsComponent } from './show-cars/show-cars.component';
import { MobiService } from './server/mobiService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCr75J84UsQCGxcoSgTuoN0YAChzZtsXz0'
    }),
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  providers: [MobiService],
  declarations: [ AppComponent, ShowCarsComponent ],
  bootstrap: [ AppComponent, ShowCarsComponent ]
})
export class AppModule {}
