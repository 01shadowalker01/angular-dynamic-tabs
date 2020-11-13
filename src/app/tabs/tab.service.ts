import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Tab } from "./tab";
import { TABS } from "./tabs.config";

@Injectable({
  providedIn: "root",
})
export class TabService {
  private _tabList: Tab[] = TABS;
  private tabs$ = new BehaviorSubject<Tab[]>(this._tabList);

  constructor() {}

  public get tabList(): Observable<Tab[]> {
    return this.tabs$.asObservable();
  }

  closeTab(tabIndex: number) {
    delete this._tabList[tabIndex];
    this.tabs$.next(this._tabList);
  }
}
