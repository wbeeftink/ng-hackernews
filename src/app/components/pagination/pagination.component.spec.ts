import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { MatIconModule } from "@angular/material/icon";

import { PaginationComponent } from "./pagination.component";

describe("PaginationComponent", () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let element: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PaginationComponent, MatIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render pages correctly", () => {
    component.currentPage = 1;
    component.maxPages = 10;
    fixture.detectChanges();

    const textElement = element.query(By.css(".pages"))
      .nativeElement as HTMLElement;

    const text = textElement.textContent!.trim();

    expect(text).toBe("1 / 10");
  });

  it("should disable previous button on first page", () => {
    component.currentPage = 1;
    component.maxPages = 3;
    fixture.detectChanges();

    const buttonElement = element.query(By.css(".previous"))
      .nativeElement as HTMLElement;

    expect(buttonElement.hasAttribute("disabled")).toBeTruthy();
  });

  it("should not disable button on subsequent pages", () => {
    component.currentPage = 2;
    component.maxPages = 3;
    fixture.detectChanges();

    const buttonElement = element.query(By.css(".previous"))
      .nativeElement as HTMLElement;

    expect(buttonElement.hasAttribute("disabled")).toBeFalsy();
  });

  it("should disable next button on last page", () => {
    component.currentPage = 3;
    component.maxPages = 3;
    fixture.detectChanges();

    const buttonElement = element.query(By.css(".next"))
      .nativeElement as HTMLElement;

    expect(buttonElement.hasAttribute("disabled")).toBeTruthy();
  });

  it("should not disable next button on pages before the last page", () => {
    component.currentPage = 2;
    component.maxPages = 3;
    fixture.detectChanges();

    const buttonElement = element.query(By.css(".next"))
      .nativeElement as HTMLElement;

    expect(buttonElement.hasAttribute("disabled")).toBeFalsy();
  });

  it("should disable previous and next buttons in case of a single page", () => {
    component.currentPage = 1;
    component.maxPages = 1;
    fixture.detectChanges();

    const previousButtonElement = element.query(By.css(".previous"))
      .nativeElement as HTMLElement;

    const nextButtonElement = element.query(By.css(".next"))
      .nativeElement as HTMLElement;

    expect(previousButtonElement.hasAttribute("disabled")).toBeTruthy();
    expect(nextButtonElement.hasAttribute("disabled")).toBeTruthy();
  });

  it("should emit event with previous page when previous button is clicked", () => {
    component.currentPage = 5;
    component.maxPages = 10;
    fixture.detectChanges();

    jest.spyOn(component.previous, "emit");

    const buttonElement = element.query(By.css(".previous"))
      .nativeElement as HTMLElement;
    buttonElement.dispatchEvent(new Event("click"));

    expect(component.previous.emit).toHaveBeenCalledWith(4);
  });

  it("should emit event with next page when next button is clicked", () => {
    component.currentPage = 5;
    component.maxPages = 10;
    fixture.detectChanges();

    jest.spyOn(component.next, "emit");

    const buttonElement = element.query(By.css(".next"))
      .nativeElement as HTMLElement;
    buttonElement.dispatchEvent(new Event("click"));

    expect(component.next.emit).toHaveBeenCalledWith(6);
  });
});
