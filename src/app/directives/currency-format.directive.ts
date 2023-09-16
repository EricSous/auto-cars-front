import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appCurrencyFormat]',
})
export class CurrencyFormatDirective {
  constructor(private el: ElementRef, private control: NgControl) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    if (this.control) {
      (this.control as any).control.setValue(numericValue.toFixed(2), {
        emitEvent: false,
      });
    }
    this.el.nativeElement.value = this.formatCurrency(numericValue);
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }
}
