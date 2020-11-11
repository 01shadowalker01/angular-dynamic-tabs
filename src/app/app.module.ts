import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TabContentComponent } from "./tabs/tab-content.component";
import { TabContentHostDirective } from "./tabs/tab-content-host.directive";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, TabContentComponent, TabContentHostDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
