import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBusinessInfoComponent } from './home-business-info.component';

describe('HomeBusinessInfoComponent', () => {
  let component: HomeBusinessInfoComponent;
  let fixture: ComponentFixture<HomeBusinessInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBusinessInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBusinessInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
