import { Component, OnInit } from "@angular/core";
import { Lot, LOTS } from "./lot-list.mock";

@Component({
  selector: "shw-search-list",
  templateUrl: "./search-list.component.html",
  styleUrls: ["./search-list.component.scss"],
})
export class SearchListComponent implements OnInit {
  lotList: Lot[] = [];
  onePerPage = false;
  sortOptions: string[] = ["Most similar", "Price", "Date", "Lot No."];

  constructor() {}

  ngOnInit(): void {
    this.lotList = [LOTS[2], LOTS[2], LOTS[2]];
  }
}
