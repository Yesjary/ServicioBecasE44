import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAlimenticiaComponent } from './user-alimenticia.component';

describe('UserAlimenticiaComponent', () => {
  let component: UserAlimenticiaComponent;
  let fixture: ComponentFixture<UserAlimenticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAlimenticiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserAlimenticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
