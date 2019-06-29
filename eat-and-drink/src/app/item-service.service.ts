import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Items } from "./items";

@Injectable()
export class ItemsService {
  constructor(private _http: HttpClient) {}

  getItems() {
    return this._http.get<Items[]>(
      "https://8a21zgd15f.execute-api.eu-west-3.amazonaws.com/live"
    );
  }
}
