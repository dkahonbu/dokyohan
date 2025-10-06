import { ComponentFixture, TestBed } from '@angular/core/testing';

import { fourthMayorsCupComponent } from './fourth-mayors-cup.component';

describe('ForthMayorsCupComponent', () => {
  let component: fourthMayorsCupComponent;
  let fixture: ComponentFixture<fourthMayorsCupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [fourthMayorsCupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(fourthMayorsCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
