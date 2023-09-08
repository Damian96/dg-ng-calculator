import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

import { FormsModule } from '@angular/forms';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Calculator Component', () => {
    expect(component).toBeTruthy();
  });

  it('should append numbers to the result', () => {
    component.appendToScreen('1');
    expect(component.result).toBe('1');
  });

  it('should clear the result', () => {
    component.result = '123';
    component.clearResult();
    expect(component.result).toBe('');
  });

  it('should calculate the result', () => {
    component.result = '2 + 3 * 4';
    component.calculateResult();
    expect(component.result).toBe('14');
  });

  it('should format the number when calculating', () => {
    component.result = '2 * 1000';
    component.calculateResult();
    expect(component.result).toBe('2,000');
  });

  it('should handle division by zero', () => {
    component.result = '5 / 0';
    component.calculateResult();
    expect(component.result).toBe('');
  });
});
