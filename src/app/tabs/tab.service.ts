import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Tab } from "./tab";
import { TABS } from "./tabs.config";

@Injectable({
  providedIn: "root",
})
export class TabService {
  private tabs$ = new BehaviorSubject<Tab[]>(TABS);

  constructor() {}

  public get tabList(): Observable<Tab[]> {
    return this.tabs$.asObservable();
  }
}
