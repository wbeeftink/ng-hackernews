import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CommentComponent } from './comment.component';
import { Item } from '../../interfaces/item';

const mockComment: Item = {
  id: 1,
  title: '',
  points: 0,
  user: 'wbeeftink',
  time: 1546003998,
  time_ago: '1 hour ago',
  content: 'Lorem ipsum dolor sit amet',
  type: '',
  comments: [{
    id: 2,
    title: '',
    points: 0,
    user: 'wbeeftink',
    time: 1546004422,
    time_ago: '2 hours ago',
    content: 'Something about this',
    type: '',
    comments: [],
    level: 0,
    comments_count: 0,
  }, {
    id: 3,
    title: '',
    points: 0,
    user: 'wbeeftink',
    time: 1546009832,
    time_ago: '3 hours ago',
    content: 'Something about that',
    type: '',
    comments: [],
    level: 0,
    comments_count: 0,
  }],
  level: 0,
  comments_count: 0,
};

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CommentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    component.comment = { ...mockComment };
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the user', () => {
    const userElement = element.query(By.css('.user')).nativeElement as HTMLElement;
    const value = userElement.textContent.trim();

    expect(userElement).toBeDefined();
    expect(value).toBe(mockComment.user);
  });

  it('should render the time', () => {
    const timeElement = element.query(By.css('.time')).nativeElement as HTMLElement;
    const value = timeElement.textContent.trim();
    const title = timeElement.title;

    expect(timeElement).toBeDefined();
    expect(value).toBe(mockComment.time_ago);
    expect(title).toBe('Posted on Sunday, January 18, 10:26 PM');
  });

  it('should render the content', () => {
    const contentElement = element.query(By.css('.content')).nativeElement as HTMLElement;
    const value = contentElement.textContent.trim();

    expect(contentElement).toBeDefined();
    expect(value).toBe(mockComment.content);
  });

  it('should render nested comments', () => {
    const nestedCommentsElements = element.queryAll(By.css('app-comment'));
    const comment1 = nestedCommentsElements[0].query(By.css('.content')).nativeElement.textContent.trim();
    const comment2 = nestedCommentsElements[1].query(By.css('.content')).nativeElement.textContent.trim();

    expect(nestedCommentsElements.length).toBe(2);
    expect(comment1).toBe(mockComment.comments[0].content);
    expect(comment2).toBe(mockComment.comments[1].content);
  });
});
