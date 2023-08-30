import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiteamsService } from "src/app/services/apiteams.service";

@Component({
  selector: "app-apiteams",
  templateUrl: "./apiteams.component.html",
  styleUrls: ["./apiteams.component.css"],
})
export class ApiteamsComponent implements OnInit {
  searchForm: FormGroup;
  constructor(private fb: FormBuilder, private sc: ApiteamsService) {}
  obj;
  msg = "";
  ngOnInit() {
    this.searchForm = this.fb.group({
      city: ["", [Validators.required]],
    });
  }
  search() {
    alert("oihoiu");
    this.sc.sarch(this.searchForm.value).subscribe((data) => {
      console.log(data.obj);
    });
  }
}
