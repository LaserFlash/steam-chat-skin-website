import { Component, OnInit, Input } from "@angular/core";
import utils from "../utils";
import { User, Status } from "../users";

@Component({
  selector: "app-friend",
  templateUrl: "./friend.component.html",
  styleUrls: ["./friend.component.css"],
})
export class FriendComponent implements OnInit {
  @Input() user: User;
  constructor() {}
  ngOnInit(): void {}

  public statusToDisplayName(status: Status[]) {
    return utils.statusToDisplayName(status);
  }

  public statusToClass(status: Status[]) {
    return utils.statusToClassNames(status);
  }

  public isAway(status: Status[]) {
    return status.includes("away") && !status.includes("offline");
  }
}
