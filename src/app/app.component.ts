import { Component } from "@angular/core";
import { TabService } from "./tabs/tab.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public tabService: TabService) {}

  onCloseTab(tabIndex: number) {
    this.tabService.closeTab(tabIndex);
  }
}
