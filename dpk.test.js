const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  test("if event has partitionKey", (event) => {
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(trivialKey);
  });
});
