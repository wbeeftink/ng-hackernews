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

import { AskComponent } from "./ask.component";
import { PaginationComponent } from "../../components/pagination/pagination.component";
import { FeedItemComponent } from "../../components/feed-item/feed-item.component";

describe("AskComponent", () => {
  let component: AskComponent;
  let fixture: ComponentFixture<AskComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AskComponent,
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
    fixture = TestBed.createComponent(AskComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
