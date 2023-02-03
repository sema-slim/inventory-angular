import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryDrawerComponent } from './inventory-drawer.component';

describe('InventoryDrawerComponent', () => {
  let component: InventoryDrawerComponent;
  let fixture: ComponentFixture<InventoryDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
