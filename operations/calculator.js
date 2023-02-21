// creating a simple memory store
let calcMemory = 0;
let startFloat = "-1";
let zero = "0";

//default state
export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
};

//pushing numbers in main row
export const handleNumber = (value, state) => {
    
    //working with float points
    if ((state.currentValue.includes(".") && value === ".")) {
        return;
    }
    if (state.currentValue === "0" && value === ".") {
        startFloat = "0";
        return { currentValue: "0" };
    }
    if ((state.currentValue === "0" ) && (startFloat === "0")) {
        startFloat = "-1";
        return { currentValue: `0.${value}` };
    }
    
    //working with default value
    if (state.currentValue === "0") {
    return { currentValue: `${value}` };
    }

    return {
        currentValue: `${state.currentValue}${value}`
    };
};

//operators logic
const handleEqual = (state) => {
  const { currentValue, previousValue, operator } = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = { operator: null, previousValue: null };
    

  switch (operator) {
    case "+":
      return {
        currentValue: `${previous + current}`,
        ...resetState,
      };
    case "-":
      return {
        currentValue: `${previous - current}`,
        ...resetState,
      };
    case "*":
      return {
        currentValue: `${previous * current}`,
        ...resetState,
      };
    case "/":
      return {
        currentValue: `${previous / current}`,
        ...resetState,
      };

    default:
      return state;
  }
};

// calculator logic
const calculator = (type, value, state) => {
  switch (type) {
    case "number":
        return handleNumber(value, state);
    
    case "clear":
        return initialState;
    case "posneg":
        return {
            currentValue: `${parseFloat(state.currentValue) * -1}`,
        };
    case "percentage":
        return {
            currentValue: `${parseFloat(state.currentValue) * 0.01}`,
        };
    case "operator":
        return {
            operator: value,
            previousValue: state.currentValue,
            currentValue: "0",
        };
    case "equal":
        return handleEqual(state);
    
    //memory operations
    case "memoryClear":
        calcMemory = 0;
        return state 
    case "memoryRead":
        return {
            currentValue: `${calcMemory}`
        }
    case "memoryMinus":
        calcMemory -= parseFloat(state.currentValue);
        return {
            currentValue: `${calcMemory}`
        }

    case "memoryPlus":
        calcMemory += parseFloat(state.currentValue);
        return {
            currentValue: `${calcMemory}`
        }
    default:
      return state;
  }
};

export default calculator;
