import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { Config } from "../config";

var fetchModule = require("fetch");


@Injectable()
export class DashboardService {
  constructor(private http: Http) {}
  load(pageNo) {
    console.log("loading.. Pg "+ pageNo);
    pageNo = pageNo || 1;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    console.log("API " + Config.apiUrlDashboard + "?pageNo=" + pageNo);
    return this.http.get(Config.apiUrlDashboard + "?pageNo=" + pageNo , { headers: headers })
                    .map(response => response.json())
                    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    return Observable.throw(error);
  }
}