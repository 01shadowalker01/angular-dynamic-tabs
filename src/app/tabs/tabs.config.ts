import { AvatarListComponent } from "../test-components/avatar-list/avatar-list.component";
import { SearchListComponent } from "../test-components/search-list/search-list.component";
import { Tab } from "./tab";

export const TABS: Tab[] = [
  {
    title: "Avatars",
    component: AvatarListComponent,
    data: null
  },
  {
    title: "Search List",
    component: SearchListComponent,
    data: null
  }
];
