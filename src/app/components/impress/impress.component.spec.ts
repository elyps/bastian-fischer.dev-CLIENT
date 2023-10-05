import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressComponent } from './impress.component';

describe('ImpressComponent', () => {
  let component: ImpressComponent;
  let fixture: ComponentFixture<ImpressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpressComponent]
    });
    fixture = TestBed.createComponent(ImpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
