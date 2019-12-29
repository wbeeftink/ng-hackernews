import { DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';

import { FeedItemComponent } from './feed-item.component';
import { FeedItem } from '../../interfaces/feed-item';

const mockItem: FeedItem = {
  id: 1,
  title: 'This is an item',
  points: 1337,
  user: 'wbeeftink',
  time: Date.now(),
  time_ago: '3 days ago',
  comments_count: 3,
  type: '',
};

describe('FeedItemComponent', () => {
  let component: FeedItemComponent;
  let fixture: ComponentFixture<FeedItemComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatCardModule,
      ],
      declarations: [FeedItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedItemComponent);
    component = fixture.componentInstance;
    component.item = { ...mockItem };
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the title without the domain', () => {
    const titleElement = element.query(By.css('mat-card-title')).nativeElement as HTMLElement;
    const title = titleElement.textContent.trim();

    expect(titleElement).toBeDefined();
    expect(title).toBe(mockItem.title);
  });

  it('should link to the item detail', () => {
    const titleLinkElement = element.query(By.css('mat-card-title a')).nativeElement as HTMLElement;
    const href = titleLinkElement.getAttribute('href');

    expect(titleLinkElement).toBeDefined();
    expect(href).toBe('/item/1');
  });

  it('should compose a subtitle of several fields', () => {
    const subtitleElement = element.query(By.css('mat-card-subtitle')).nativeElement as HTMLElement;
    const subtitle = subtitleElement.textContent.trim().replace(/\s\s+/g, ' '); // Remove any multiple spaces with a single space

    expect(subtitleElement).toBeDefined();
    expect(subtitle).toBe(`By ${mockItem.user} | ${mockItem.points} points | ${mockItem.time_ago} | ${mockItem.comments_count} comments`);
  });

  it('should compose a subtitle of only the time ago for jobs', () => {
    component.item.type = 'job';
    fixture.detectChanges();

    const subtitleElement = element.query(By.css('mat-card-subtitle')).nativeElement as HTMLElement;
    const subtitle = subtitleElement.textContent.trim();

    expect(subtitleElement).toBeDefined();
    expect(subtitle).toBe(mockItem.time_ago);
  });

  it('should link externally and show the domain', () => {
    const domain = 'https://angular.io';
    component.item.domain = domain;
    component.item.url = domain;
    fixture.detectChanges();

    const titleElement = element.query(By.css('mat-card-title')).nativeElement as HTMLElement;
    const titleLinkElement = element.query(By.css('mat-card-title a')).nativeElement as HTMLElement;
    const title = titleElement.textContent.trim();
    const href = titleLinkElement.getAttribute('href');

    expect(titleElement).toBeDefined();
    expect(titleLinkElement).toBeDefined();
    expect(title).toBe(`${mockItem.title} (${domain})`);
    expect(href).toBe(domain);
  });
});
