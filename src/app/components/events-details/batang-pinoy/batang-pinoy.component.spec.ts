import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatangPinoyComponent } from './batang-pinoy.component';

describe('BatangPinoyComponent', () => {
  let component: BatangPinoyComponent;
  let fixture: ComponentFixture<BatangPinoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatangPinoyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BatangPinoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
