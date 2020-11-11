import { Component, OnInit } from "@angular/core";
import { Avatar, AVATARS  } from "./avatar-list.mock";

@Component({
  selector: "shw-avatar-list",
  templateUrl: "./avatar-list.component.html",
  styleUrls: ["./avatar-list.component.scss"],
})
export class AvatarListComponent implements OnInit {
  avatarList: Avatar[] = AVATARS;

  constructor() {}

  ngOnInit(): void {}
}
