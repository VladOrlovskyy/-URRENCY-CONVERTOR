import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConvertorComponent } from './convertor.component';

describe('ConvertorComponent', () => {
  let component: ConvertorComponent;
  let fixture: ComponentFixture<ConvertorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle input and select changes', () => {
    const input1 = fixture.nativeElement.querySelector('.currency-converter__input:first-child');
    const input2 = fixture.nativeElement.querySelector('.currency-converter__input:last-child');
    const select1 = fixture.nativeElement.querySelector('.currency-converter__select:first-child');
    const select2 = fixture.nativeElement.querySelector('.currency-converter__select:last-child');

    input1.value = '100';
    input1.dispatchEvent(new Event('input'));
    select1.value = 'USD';
    select1.dispatchEvent(new Event('change'));
    select2.value = 'EUR';
    select2.dispatchEvent(new Event('change'));

    expect(component.controlInput1.value).toBe(100);
    expect(component.currency1).toBe('USD');
    expect(component.currency2).toBe('EUR');
  });
});
