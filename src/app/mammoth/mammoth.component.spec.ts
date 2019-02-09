import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MammothComponent } from './mammoth.component';

describe('MammothComponent', () => {
  let component: MammothComponent;
  let fixture: ComponentFixture<MammothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MammothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MammothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
