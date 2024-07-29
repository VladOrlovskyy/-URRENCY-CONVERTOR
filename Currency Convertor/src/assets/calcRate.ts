export interface ICalcRateProps {
  from: string;
  to: string;
  count: number;
  USDUAH: number;
  EURUAH: number;
}

export const calcRate = (props: ICalcRateProps): number | void | string => {
  if (props.count === 0) {
    return '';
  }
  if (props.from === props.to) {
    return props.count.toFixed(2);
  }
  if (props.from === 'UAH' && props.to === 'USD') {
    return (props.count / props.USDUAH).toFixed(2);
  }
  if (props.from === 'UAH' && props.to === 'EUR') {
    return (props.count / props.EURUAH).toFixed(2);
  }
  if (props.from === 'USD' && props.to === 'UAH') {
    return (props.count * props.USDUAH).toFixed(2);
  }
  if (props.from === 'USD' && props.to === 'EUR') {
    return (props.count * (props.USDUAH / props.EURUAH)).toFixed(2);
  }
  if (props.from === 'EUR' && props.to === 'UAH') {
    return (props.count * props.EURUAH).toFixed(2);
  }
  if (props.from === 'EUR' && props.to === 'USD') {
    return (props.count * (props.EURUAH / props.USDUAH)).toFixed(2);
  }
};
