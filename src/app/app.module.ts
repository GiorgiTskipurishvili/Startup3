import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FeaturePageComponent } from './feature-page/feature-page.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import { TestimonialPageComponent } from './testimonial-page/testimonial-page.component';
import { CallToActionPageComponent } from './call-to-action-page/call-to-action-page.component';
import { ShowCasePageComponent } from './show-case-page/show-case-page.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PricingTablePageComponent } from './pricing-table-page/pricing-table-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LandingPageComponent,
    FeaturePageComponent,
    ContentPageComponent,
    FormPageComponent,
    TestimonialPageComponent,
    CallToActionPageComponent,
    ShowCasePageComponent,
    TeamPageComponent,
    ContactPageComponent,
    PricingTablePageComponent,
    FooterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
