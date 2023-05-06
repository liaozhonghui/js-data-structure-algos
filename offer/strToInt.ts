enum CharType {
  SPACE,
  SIGN,
  INT,
  ERROR
}

function getCharType(s: string): CharType {
  if (s == ' ') return CharType.SPACE;
  else if (s == '+' || s == '-') return CharType.SIGN;
  else if (s >= '0' && s <= '9') return CharType.INT;
  else return CharType.ERROR;
}

enum STATE {
  ENTRY,
  SPACE,
  SIGN,
  INT,
  END
}
const stateTree = {
  [STATE.ENTRY]: {
    [CharType.SPACE]: STATE.SPACE,
    [CharType.SIGN]: STATE.SIGN,
    [CharType.INT]: STATE.INT,
  },
  [STATE.SPACE]: {
    [CharType.SPACE]: STATE.SPACE,
    [CharType.SIGN]: STATE.SIGN,
    [CharType.INT]: STATE.INT
  },
  [STATE.SIGN]: {
    [CharType.INT]: STATE.INT,
  },
  [STATE.INT]: {
    [CharType.INT]: STATE.INT,
    [CharType.SPACE]: STATE.END,
    [CharType.SIGN]: STATE.END,
    [CharType.ERROR]: STATE.END,
  },
  [STATE.END]: {
    [CharType.INT]: STATE.END,
    [CharType.SPACE]: STATE.END,
    [CharType.SIGN]: STATE.END,
    [CharType.ERROR]: STATE.END,
  }
};
const INT_MIN = -Math.pow(2, 31);
const INT_MAX = Math.pow(2, 31) - 1;
function strToInt(str: string): number {
  let sign;
  let val: string[] = [];
  let state: { [key in CharType]?: STATE } = stateTree[STATE.ENTRY];
  let currentState: STATE = STATE.ENTRY;
  for (let c of str) {
    const typ = getCharType(c);
    if (!state[typ]) {
      return 0;
    }
    currentState = state[typ]!;
    state = stateTree[state[typ]!];
    if (currentState == STATE.SIGN) {
      sign = c;
    } else if (currentState == STATE.INT) {
      val.push(c);
    }
  }
  if (currentState == STATE.INT || currentState == STATE.END) {
    let v = Number(val.join(''));
    if (sign == '-') {
      v = -v;
      return v < INT_MIN ? INT_MIN : v;
    } else {
      return v > INT_MAX ? INT_MAX : v;
    }
  }
  return 0;
};

let res = strToInt('-4193 with words');
console.log('res:', res);
res = strToInt('  -9128347233 2   ');
console.log('res:', res);
