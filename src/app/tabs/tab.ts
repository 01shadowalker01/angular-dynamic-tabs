import { Type } from "@angular/core";

export interface Tab {
  title: string;
  component: Type<any>;
  data: any;
}
