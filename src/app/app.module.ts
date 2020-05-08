import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";
import { LatestnewsComponent } from './components/latestnews/latestnews.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AllnewsComponent } from './components/allnews/allnews.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsdetailsComponent } from './components/latestnews/newsdetails/newsdetails.component';
import { NewslistComponent } from './components/latestnews/newslist/newslist.component';

@NgModule({
  declarations: [AppComponent, LatestnewsComponent, NavigationComponent, AllnewsComponent, FooterComponent, NewsdetailsComponent, NewslistComponent],
  imports: [BrowserModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
