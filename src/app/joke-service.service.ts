import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
@Injectable()
export class JokeServiceService {
  constructor(private http: Http) {}
  time;
  getOneJoke = (miliseconds) => {
    this.time = Observable.timer(0, miliseconds);
    return this.time.flatMap(i =>
      this.http.get("https://api.icndb.com/jokes/random")
    );
  };
}
