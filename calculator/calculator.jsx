const Calculator = () => {
  const [calc, setCalc] = React.useState({
    current: "0",
    total: "0",
    isInitial: true,
    preOp: ""
  });

  const handleNumber = (value) => {
    const newValue = calc.isInitial ? value : calc.current + value;
    setCalc({
      ...calc,
      current: newValue,
      isInitial: false
    });
  };

  const doCalculation = () => {
    const current = parseFloat(calc.current);
    const total = parseFloat(calc.total);

    switch (calc.preOp) {
      case "+": return total + current;
      case "-": return total - current;
      case "*": return total * current;
      case "/": return total / current;
      default: return current;
    }
  };

  const handleOperator = (op) => {
    const newTotal = doCalculation();
    setCalc({
      current: newTotal.toString(),
      total: newTotal.toString(),
      isInitial: true,
      preOp: op
    });
  };

  const handleClear = () => {
    setCalc({
      current: "0",
      total: "0",
      isInitial: true,
      preOp: ""
    });
  };

  const handleEqual = () => {
    const result = doCalculation();
    setCalc({
      current: result.toString(),
      total: "0",
      isInitial: true,
      preOp: ""
    });
  };

  return (
    <div id="calculator">
      <div id="display">{calc.current}</div>
      <button className="clear" onClick={handleClear}>C</button>
      <button className="operator" onClick={() => handleOperator("/")}>÷</button>
      <button className="operator" onClick={() => handleOperator("*")}>×</button>
      <button className="operator" onClick={() => handleOperator("-")}>−</button>

      <button onClick={() => handleNumber("7")}>7</button>
      <button onClick={() => handleNumber("8")}>8</button>
      <button onClick={() => handleNumber("9")}>9</button>
      <button className="operator" onClick={() => handleOperator("+")}>+</button>

      <button onClick={() => handleNumber("4")}>4</button>
      <button onClick={() => handleNumber("5")}>5</button>
      <button onClick={() => handleNumber("6")}>6</button>
      <button className="equal" style={{ gridRow: "span 2" }} onClick={handleEqual}>=</button>

      <button onClick={() => handleNumber("1")}>1</button>
      <button onClick={() => handleNumber("2")}>2</button>
      <button onClick={() => handleNumber("3")}>3</button>

      <button style={{ gridColumn: "span 2" }} onClick={() => handleNumber("0")}>0</button>
      <button onClick={() => handleNumber(".")}>.</button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Calculator />);
