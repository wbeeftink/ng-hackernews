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

import { NewComponent } from "./new.component";
import { PaginationComponent } from "../../components/pagination/pagination.component";
import { FeedItemComponent } from "../../components/feed-item/feed-item.component";

describe("NewComponent", () => {
  let component: NewComponent;
  let fixture: ComponentFixture<NewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FeedItemComponent,
        HttpClientTestingModule,
        MatCardModule,
        MatIconModule,
        NewComponent,
        PaginationComponent,
        RouterTestingModule,
      ],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
