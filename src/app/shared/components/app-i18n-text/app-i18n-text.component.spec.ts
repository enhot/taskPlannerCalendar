import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppI18nTextComponent } from './app-i18n-text.component';

describe('AppI18nTextComponent', () => {
  let component: AppI18nTextComponent;
  let fixture: ComponentFixture<AppI18nTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppI18nTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppI18nTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
