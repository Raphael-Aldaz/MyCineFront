import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { MainComponent } from './components/main/main.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CityReducer } from './reducer/city.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CityEffects } from './effects/city.effects';
import { FormCityComponent } from './components/form-city/form-city.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavBarComponent,
    FormCityComponent
  ],
   imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({state: CityReducer}),
    EffectsModule.forRoot([CityEffects]),
    HttpClientModule,
    FormsModule,
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
