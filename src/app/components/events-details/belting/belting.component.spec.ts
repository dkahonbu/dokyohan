import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeltingComponent } from './belting.component';

describe('BeltingComponent', () => {
  let component: BeltingComponent;
  let fixture: ComponentFixture<BeltingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeltingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeltingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
