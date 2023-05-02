import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './article/article.component';
import { ArticleDeuxComponent } from './articledeux/article2.component';
import { FooterSideUnComponent } from './footer-side-un/footer-side-un.component';
import { FooterSideTwoComponent } from './footer-side-two/footer-side-two.component';
import { FooterSideThreeComponent } from './footer-side-three/footer-side-three.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ArticleComponent,
    ArticleDeuxComponent,
    FooterSideUnComponent,
    FooterSideTwoComponent,
    FooterSideThreeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
