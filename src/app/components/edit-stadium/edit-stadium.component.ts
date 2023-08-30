import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-edit-stadium",
  templateUrl: "./edit-stadium.component.html",
  styleUrls: ["./edit-stadium.component.css"],
})
export class EditStadiumComponent implements OnInit {
  editStadiumForm: FormGroup;
  id;
  obj;
  newobj;
  t = JSON.parse(localStorage.getItem("stadiums" || "[]"));
  constructor() {}

  ngOnInit() {
    this.id = localStorage.getItem("idstadium");
    this.obj = this.t.find((element) => {
      return element.id == this.id;
    });
  }
  upadte() {
    console.log(this.obj);
    // id: this.obj.id.value,
    // name: this.obj.name.value,
    // capacity: this.obj.capacity.value,
    // country: this.obj.country.value,

    // for (let i = 0; i < this.t.length; i++) {
    //   if (this.t[i].id == this.id) {
    //     this.t[i].value = this.newobj.value;
    //   }
    // }
    // localStorage.setItem("stadiums", JSON.stringify(this.t));
  }
}
