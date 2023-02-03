import { HostListener, Component } from '@angular/core';

@Component({
  selector: 'app-loadout',
  templateUrl: './loadout.component.html',
  styleUrls: ['./loadout.component.css'],
})
export class LoadoutComponent {
  public innerWidth: any;
  public innerHeight: any;
  public nCols: Number = 4;
  public nRows: Number = 4;
  public rowHeight: string = '100px';
  public colHeight: string = '80px';

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }
}
