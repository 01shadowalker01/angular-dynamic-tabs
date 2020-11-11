import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TabContentComponent } from "./tabs/tab-content.component";
import { TabContentHostDirective } from "./tabs/tab-content-host.directive";
import { AvatarListComponent } from "./test-components/avatar-list/avatar-list.component";
import { SearchListComponent } from './test-components/search-list/search-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TabContentComponent,
    AvatarListComponent,
    TabContentHostDirective,
    SearchListComponent,
    AvatarListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
