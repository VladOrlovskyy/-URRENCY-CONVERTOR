import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { calcRate, ICalcRateProps } from 'src/assets/calcRate';

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.scss'],
})
export class ConvertorComponent {
  @Input() USDUAH!: number;
  @Input() EURUAH!: number;

  controlInput1 = new FormControl();
  controlInput2 = new FormControl();

  currency1 = 'UAH';
  currency2 = 'UAH';

  handleSelect1(e: Event) {
    this.currency1 = (e.target as HTMLSelectElement).value;
    this.updateInput2();
  }

  handleSelect2(e: Event) {
    this.currency2 = (e.target as HTMLSelectElement).value;
    this.updateInput2();
  }

  handleInput1(e: Event) {
    const count = Number((e.target as HTMLInputElement).value);
    if (count < 0) {
      this.controlInput2.setValue('');
      return;
    }
    this.updateInput2(count);
  }

  handleInput2(e: Event) {
    const count = Number((e.target as HTMLInputElement).value);
    if (count < 0) {
      this.controlInput1.setValue('');
      return;
    }
    this.updateInput1(count);
  }

  private updateInput2(count?: number) {
    if (count !== undefined && count < 0) {
      this.controlInput2.setValue('');
      return;
    }
    const props: ICalcRateProps = {
      from: this.currency1,
      to: this.currency2,
      count: count ?? Number(this.controlInput1.value),
      USDUAH: this.USDUAH,
      EURUAH: this.EURUAH,
    };
    this.controlInput2.setValue(calcRate(props));
  }

  private updateInput1(count: number) {
    const props: ICalcRateProps = {
      from: this.currency2,
      to: this.currency1,
      count,
      USDUAH: this.USDUAH,
      EURUAH: this.EURUAH,
    };
    this.controlInput1.setValue(calcRate(props));
  }
}
