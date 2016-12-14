import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { Config } from "../config";

@Injectable()
export class DashboardService {
  constructor(private http: Http) {}
  load() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.get(Config.apiUrlDashboard, { headers: headers })
                    .map(response => response.json())
                    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}