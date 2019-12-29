import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { AbstractBaseListComponent } from './abstract-base-list.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { FeedItemComponent } from '../feed-item/feed-item.component';

describe('AbstractBaseListComponent', () => {
  let component: AbstractBaseListComponent;
  let fixture: ComponentFixture<AbstractBaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatIconModule,
        MatCardModule,
      ],
      declarations: [
        AbstractBaseListComponent,
        PaginationComponent,
        FeedItemComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractBaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
