import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBecasExternasComponent } from './list-becas-externas.component';

describe('ListBecasExternasComponent', () => {
  let component: ListBecasExternasComponent;
  let fixture: ComponentFixture<ListBecasExternasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListBecasExternasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListBecasExternasComponent);
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
