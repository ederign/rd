type ConversionDescriptor = "as-number" | "as-text";
type Combinable = number | string;

function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConversion === "as-number") {
    return +result;
  }
  return result.toString();
}

const combinedAges = combine(30, 3, "as-number");

console.log(combinedAges);

const combinedNames = combine("Eder", "Dora", "as-text");

console.log(combinedNames);
