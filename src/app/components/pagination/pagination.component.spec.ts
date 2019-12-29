import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
      ],
      declarations: [PaginationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.currentPage = 1;
    component.maxPages = 10;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render pages correctly', () => {
    const textElement = element.query(By.css('span')).nativeElement as HTMLElement;
    const text = textElement.textContent.trim();

    expect(text).toBe('1 / 10');
  });

  it('should have enable or disable previous button correctly', () => {
    const buttonElement = element.query(By.css('.previous')).nativeElement as HTMLElement;

    for (let i = 1; i <= component.maxPages; i++) {
      component.currentPage = i;
      fixture.detectChanges();

      if (i === 1) {
        expect(buttonElement.hasAttribute('disabled')).toBe(true);
      } else {
        expect(buttonElement.hasAttribute('disabled')).toBe(false);
      }
    }
  });

  it('should have enable or disable next button correctly', () => {
    const buttonElement = element.query(By.css('.next')).nativeElement as HTMLElement;

    for (let i = 1; i <= component.maxPages; i++) {
      component.currentPage = i;
      fixture.detectChanges();

      if (i === component.maxPages) {
        expect(buttonElement.hasAttribute('disabled')).toBe(true);
      } else {
        expect(buttonElement.hasAttribute('disabled')).toBe(false);
      }
    }
  });

  it('should emit event with previous page when previous button is clicked', () => {
    component.currentPage = 5;
    spyOn(component.previous, 'emit');
    fixture.detectChanges();

    const buttonElement = element.query(By.css('.previous')).nativeElement as HTMLElement;
    buttonElement.dispatchEvent(new Event('click'));

    expect(component.previous.emit).toHaveBeenCalledWith(4);
  });

  it('should emit event with next page when next button is clicked', () => {
    component.currentPage = 5;
    spyOn(component.next, 'emit');
    fixture.detectChanges();

    const buttonElement = element.query(By.css('.next')).nativeElement as HTMLElement;
    buttonElement.dispatchEvent(new Event('click'));

    expect(component.next.emit).toHaveBeenCalledWith(6);
  });
});
