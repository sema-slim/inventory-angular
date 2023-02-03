import { Component, ViewEncapsulation } from '@angular/core';
import { Item } from '../types/item';

const items: Item[] = [
  {
    name: 'test',
    iconUrl: 'assets/shoes.svg',
  },
  {
    name: 'test',
    iconUrl: 'assets/shoes.svg',
  },
  {
    name: 'test',
    iconUrl: 'assets/shoes.svg',
  },
];

@Component({
  selector: 'app-inventory-drawer',
  templateUrl: './inventory-drawer.component.html',
  styleUrls: ['./inventory-drawer.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class InventoryDrawerComponent {
  emptyArr = new Array(8);
  items: Item[] = items;
  isOpen = false;
}
