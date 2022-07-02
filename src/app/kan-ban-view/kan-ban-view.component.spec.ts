import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanBanViewComponent } from './kan-ban-view.component';

describe('KanBanViewComponent', () => {
  let component: KanBanViewComponent;
  let fixture: ComponentFixture<KanBanViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanBanViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanBanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
