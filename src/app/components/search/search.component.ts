import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  Search = "Search";
  obj = {};
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      city: [""],
      country: [""],
    });
  }
  search() {
    localStorage.setItem("searchobj", JSON.stringify(this.searchForm.value));
  }
}
