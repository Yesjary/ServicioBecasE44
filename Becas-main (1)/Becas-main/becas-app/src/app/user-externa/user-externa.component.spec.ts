import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExternaComponent } from './user-externa.component';

describe('UserAlimenticiaComponent', () => {
  let component: UserExternaComponent;
  let fixture: ComponentFixture<UserExternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserExternaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserExternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
