import { ChangeEventHandler, ChangeEvent } from 'react';

// String, Number, Boolean
let name: string = 'Emmanuel';

//Functions
const addTwoNumbers: (a: number, b: number) => number = (a, b) => {
  return a + b;
};

const newFunction: (a: number, b: number) => void = (a, b) => {};

/**
 *  Objects - Two Ways
 * Interface and TYpe are similar
 * Interface is extensible like React class components
 * the start ith I prefix like IWorld
 * Inheritance & Overloading
 * Types allows us to do something called a union
 * Functional - Types is ideal
 * OOP - Interface is Ideal
 */

interface ISampleProps extends IChangeHandler {
  className: string;
  placeholder?: string; //Optional placeholder props
  //   onChangeHandler: (a: string) => void;
}

interface ISampleProps {
  defaultValue: string;
}

interface IChangeHandler {
  onChangeHandler: (a: string) => void;
}

type sampleProps = {
  className: string;
  placeholder?: string;
  defaultValue: string;
  //   onChangeHandler: ChangeEventHandler<HTMLInputElement>; //ChangeEventHandler from react takes a generic HTMLInputElement to indicate its an input box not select, checkbox or radio button...
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

// Union
type AmericanAddress = {
  street: string;
  state: string;
};

type CanadianAddress = {
  street: string;
  province: string;
};

type ItalianAddress = {
  street: string;
  region: string;
};

type LocalAddress = AmericanAddress | CanadianAddress | ItalianAddress;

const address: LocalAddress = {
  street: 'Fish Avenue',
  state: 'Oklahoma City',
};

export const Sample = ({
  className,
  placeholder,
  defaultValue,
  onChangeHandler,
}: sampleProps) => {
  return (
    <div className={className}>
      <h1>TypeScript Practice {placeholder}</h1>
      <p>{name}</p>
      <p>{addTwoNumbers(5, 6)}</p>
      <input type="text" onChange={onChangeHandler} value={defaultValue} />
    </div>
  );
};
