import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MatToolbarModule } from "@angular/material/toolbar";

import { HeaderComponent } from "./header.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let element: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatToolbarModule],
      declarations: [HeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should contain navigation links", () => {
    const linkElements = element.queryAll(By.css("a:not(.logo):not(.made-by)"));
    expect(linkElements.length).toBe(component.navItems.length);
  });
});
