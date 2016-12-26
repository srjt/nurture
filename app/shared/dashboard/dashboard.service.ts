
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import * as imageSource from "image-source";
var httpRequest = require("http/http-request");

import { Config } from "../config";

 

@Injectable()
export class DashboardService {
  constructor(private http: Http) {}
  load(pageNo) {
    pageNo = pageNo || 1;
    
    // console.log("API " + Config.apiUrlDashboard + "?pageNo=" + pageNo);
    return this.http.get(Config.apiUrlDashboard + "?pageNo=" + pageNo + "&pageSize=6"    , this.getHeaders())
                    .map(response => response.json())
                    .catch(this.handleErrors);
  }
 loadThumbnail(thumbnailUrl){
    return new Promise( (resolve, reject) => { 
      httpRequest.request({url: thumbnailUrl, method: "GET"})
        .then((res)=>{
          if(res.statusCode === 301){
            thumbnailUrl = res.headers["Location"];
            httpRequest.request({url:thumbnailUrl, method: "GET"})
              .then((res)=>{
                res.content.toImage().then((resImg) => {
                  resolve(resImg);
                },(err)=>{reject(err)});
              },(err)=>{
                console.log("errored again pic " + err);
                reject(err);
              });
          }
          else {
            //console.log("loaded pic " + thumbnailUrl);
            res.content.toImage().then((resImg)=>{
              resolve(resImg);
            },(err)=>{ reject(err)});
          }

        },(err)=>{
          console.log("errored pic " + err);
          reject(err);
        });
    });  
  }
  
  private getHeaders(){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");  
    return {headers: headers};
  }
  handleErrors(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}
