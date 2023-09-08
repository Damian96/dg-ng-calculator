import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  result: string = '';
  isLastInputOperator: boolean = false;

  appendToScreen(value: string): void {
    this.result += value;
    this.isLastInputOperator = false;
  }

  clearResult(): void {
    this.result = '';
  }

  calculateResult(): void {
    if (this.result.length == 0) {
      // Guard: don't calculate the result if there is no input
      alert('Please enter some values.');
      return;
    }
    try {
      this.result = eval(this.result);
      this.result = this.result.toString();
      if (typeof this.result !== 'number') {
        this.result = '';
        throw new Error('An error occured when calculating the result.');
      }
    } catch (error) {
      alert(error);
    }
  }

  appendOperator(operator: string) {
    if (this.isLastInputOperator) {
      this.result = this.result.slice(0, -1);
    }
    this.isLastInputOperator = true;
    this.result += operator;
  }

  deleteLast(): void {
    if (this.result.length > 0) {
      this.result = this.result.slice(0, -1);
    }
  }
}
