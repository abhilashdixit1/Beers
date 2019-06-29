import { Component, OnInit } from "@angular/core";
import { ItemsService } from "../item-service.service";
import { Items } from "../items";

@Component({
  selector: "app-beers",
  templateUrl: "./beers.component.html",
  styleUrls: ["./beers.component.scss"]
})
export class BeersComponent implements OnInit {
  public items: Items[];

  constructor(private _itemsService: ItemsService) {}

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this._itemsService.getItems().subscribe(data => {
      this.items = data;
    });
  }
}
