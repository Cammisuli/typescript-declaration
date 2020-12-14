export type Test = {
  customProperty: string;
};

export function wrapFunction() {
  return (arg: Test) => {
    console.log(arg);
  };
}
