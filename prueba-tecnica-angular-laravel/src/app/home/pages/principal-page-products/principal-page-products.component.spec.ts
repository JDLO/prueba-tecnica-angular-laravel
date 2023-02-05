import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalPageProductsComponent } from './principal-page-products.component';

describe('PrincipalPageProductsComponent', () => {
  let component: PrincipalPageProductsComponent;
  let fixture: ComponentFixture<PrincipalPageProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalPageProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalPageProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
