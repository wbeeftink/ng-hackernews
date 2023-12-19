import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
  waitForAsync,
} from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";

import { AbstractBaseListComponent } from "./abstract-base-list.component";
import { PaginationComponent } from "../pagination/pagination.component";
import { FeedItemComponent } from "../feed-item/feed-item.component";

describe("AbstractBaseListComponent", () => {
  let component: AbstractBaseListComponent;
  let fixture: ComponentFixture<AbstractBaseListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AbstractBaseListComponent,
        FeedItemComponent,
        HttpClientTestingModule,
        MatCardModule,
        MatIconModule,
        PaginationComponent,
        RouterTestingModule,
      ],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractBaseListComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
