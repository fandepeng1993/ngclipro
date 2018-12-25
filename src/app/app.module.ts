import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { RxjsTestComponent } from './rxjs-test/rxjs-test.component';
import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HighlightDirective } from './highlight.directive';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { UnlessDirective } from './unless.directive';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    RxjsTestComponent,
    AdDirective,
    AdBannerComponent,
    HighlightDirective,
    HeroJobAdComponent,
    HeroProfileComponent,
    UnlessDirective
  ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
