import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardProductsComponent } from './list-card-products.component';

describe('ListCardProductsComponent', () => {
  let component: ListCardProductsComponent;
  let fixture: ComponentFixture<ListCardProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCardProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCardProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
