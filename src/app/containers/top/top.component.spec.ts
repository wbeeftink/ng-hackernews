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

import { TopComponent } from "./top.component";
import { PaginationComponent } from "../../components/pagination/pagination.component";
import { FeedItemComponent } from "../../components/feed-item/feed-item.component";

describe("TopComponent", () => {
  let component: TopComponent;
  let fixture: ComponentFixture<TopComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FeedItemComponent,
        HttpClientTestingModule,
        MatCardModule,
        MatIconModule,
        PaginationComponent,
        RouterTestingModule,
        TopComponent,
      ],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
