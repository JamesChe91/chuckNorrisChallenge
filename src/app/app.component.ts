import { Component, OnInit } from "@angular/core";
import { JokeServiceService } from "./joke-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  joke;
  time;
  constructor(private service: JokeServiceService) {  }
  ngOnInit() {
    this.time = this.joke == "" ? 0 : 6000;
    this.service
      .getOneJoke(this.time)
      .subscribe(res => (this.joke = res.json().value.joke));
  }
}
