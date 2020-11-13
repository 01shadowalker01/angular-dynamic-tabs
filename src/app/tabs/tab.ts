import { Type } from "@angular/core";

export interface Tab {
  title: string;
  component: Type<any>;
  closable: boolean;
  data: any;
}
