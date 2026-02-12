import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthOrRegistComponent } from './auth-or-regist.component';

describe('AuthOrRegistComponent', () => {
  let component: AuthOrRegistComponent;
  let fixture: ComponentFixture<AuthOrRegistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthOrRegistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthOrRegistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
