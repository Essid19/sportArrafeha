import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatchService } from "src/app/services/match.service";

@Component({
  selector: "app-matches-table",
  templateUrl: "./matches-table.component.html",
  styleUrls: ["./matches-table.component.css"],
})
export class MatchesTableComponent implements OnInit {
  matchestab: any = [];

  constructor(private router: Router, private service: MatchService) {}
  pageOfItems: Array<any>;
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
  ngOnInit() {
    // array of objects
    this.refresh();
  }
  display(x) {
    this.router.navigate([`matchinfo/${x}`]);
  }
  edit(x) {
    localStorage.setItem("idmatch", x);
    this.router.navigate(["editmatch"]);
  }
  delete(x) {
    alert(`match n ${x} delete`);
    this.service.deleteMatch(x).subscribe((res) => {
      console.log("hereres after delete", res.msg);
      this.refresh();
    });
  }
  refresh() {
    this.service.getAllMatch().subscribe((res) => {
      this.matchestab = res.matches;
    });
  }
}
