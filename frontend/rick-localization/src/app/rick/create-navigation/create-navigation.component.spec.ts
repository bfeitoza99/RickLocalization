import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNavigationComponent } from './create-navigation.component';

describe('CreateNavigationComponent', () => {
  let component: CreateNavigationComponent;
  let fixture: ComponentFixture<CreateNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
