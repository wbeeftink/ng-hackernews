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

import { ItemComponent } from "./item.component";
import { PaginationComponent } from "../../components/pagination/pagination.component";
import { CommentComponent } from "../../components/comment/comment.component";

describe("ItemComponent", () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommentComponent,
        HttpClientTestingModule,
        ItemComponent,
        MatCardModule,
        MatIconModule,
        PaginationComponent,
        RouterTestingModule,
      ],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
