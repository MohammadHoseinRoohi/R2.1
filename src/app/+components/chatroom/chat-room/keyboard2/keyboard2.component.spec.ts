import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Keyboard2Component } from './keyboard2.component';

describe('Keyboard2Component', () => {
  let component: Keyboard2Component;
  let fixture: ComponentFixture<Keyboard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Keyboard2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Keyboard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
