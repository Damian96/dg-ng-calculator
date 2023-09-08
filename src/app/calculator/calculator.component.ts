import { Component } from '@angular/core';
import { NumberFormatPipe } from "../number-format.pipe";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [NumberFormatPipe]
})
export class CalculatorComponent {

  result: string = '';
  isLastInputOperator: boolean = false;

  constructor(private numberFormatPipe: NumberFormatPipe) { }

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
      this.result = this.result.replace(/\s/g, '');
      this.result = this.result.replace('%', '/100');
      if (this.result.includes('/0')) {
        this.result = '';
        throw new Error('An error occured when calculating the result.');
      } else {
        this.result = eval(this.result);
        this.result = this.numberFormatPipe.transform(this.result);
        this.result = this.result.toString();
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
