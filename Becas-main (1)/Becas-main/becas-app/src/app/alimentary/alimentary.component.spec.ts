import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentaryComponent } from './alimentary.component';

describe('AlimentaryComponent', () => {
  let component: AlimentaryComponent;
  let fixture: ComponentFixture<AlimentaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlimentaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlimentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log('Running should create test');
    expect(component).toBeTruthy();
  });

  it('should generate tickets', () => {
    console.log('Running should generate tickets test');
    spyOn(window, 'open').and.stub();
    component.generateTickets();
    expect(window.open).toHaveBeenCalled();
  });
});
