import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootbarComponent } from './footbar.component';

describe('FootbarComponent', () => {
  let component: FootbarComponent;
  let fixture: ComponentFixture<FootbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FootbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
