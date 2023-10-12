import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActivityCardComponent } from './shared/activity-card/activity-card.component';
import { AvatarComponent } from './shared/avatar/avatar.component';
import { PeriodComponent } from './features/period/period.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityCardComponent,
    AvatarComponent,
    PeriodComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
