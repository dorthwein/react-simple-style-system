import StyleModifiersInterface from '../types/StyleModifiersInterface';
export default interface InputInterface extends StyleModifiersInterface {
  onChange: Function;
  value?: any;
}
