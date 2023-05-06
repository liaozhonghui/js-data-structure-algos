enum CharType {
  SPACE,
  POINT,
  INT,
  SIGN,
  EXP,
  ERROR
}
enum STATE {
  ENTRY,
  SPACE,
  SIGN,
  INT,
  LEFT_POINT,
  NORMAL_POINT,
  FACT,
  EXP_FLAG,
  EXP_SIGN,
  EXP_VAL,
  END_SPACE,
}
function getCharType(s: string): CharType {
  if (s == ' ') return CharType.SPACE;
  else if (s == '.') return CharType.POINT;
  else if (s >= '0' && s <= '9') return CharType.INT;
  else if (s == '+' || s == '-') return CharType.SIGN;
  else if (s == 'e' || s == 'E') return CharType.EXP;
  else return CharType.ERROR;
}
const stateTree = {
  [STATE.ENTRY]: {
    [CharType.SPACE]: STATE.SPACE,
    [CharType.SIGN]: STATE.SIGN,
    [CharType.POINT]: STATE.LEFT_POINT,
    [CharType.INT]: STATE.INT
  },
  [STATE.SPACE]: {
    [CharType.SPACE]: STATE.SPACE,
    [CharType.SIGN]: STATE.SIGN,
    [CharType.INT]: STATE.INT,
    [CharType.POINT]: STATE.LEFT_POINT
  },
  [STATE.SIGN]: {
    [CharType.INT]: STATE.INT,
    [CharType.POINT]: STATE.LEFT_POINT
  },
  [STATE.INT]: {
    [CharType.INT]: STATE.INT,
    [CharType.POINT]: STATE.NORMAL_POINT,
    [CharType.EXP]: STATE.EXP_FLAG,
    [CharType.SPACE]: STATE.END_SPACE,
  },
  [STATE.LEFT_POINT]: {
    [CharType.INT]: STATE.FACT,
  },
  [STATE.NORMAL_POINT]: {
    [CharType.INT]: STATE.FACT,
    [CharType.EXP]: STATE.EXP_FLAG,
    [CharType.SPACE]: STATE.END_SPACE,
  },
  [STATE.FACT]: {
    [CharType.INT]: STATE.FACT,
    [CharType.EXP]: STATE.EXP_FLAG,
    [CharType.SPACE]: STATE.END_SPACE,
  },
  [STATE.EXP_FLAG]: {
    [CharType.SIGN]: STATE.EXP_SIGN,
    [CharType.INT]: STATE.EXP_VAL
  },
  [STATE.EXP_SIGN]: {
    [CharType.INT]: STATE.EXP_VAL,
  },
  [STATE.EXP_VAL]: {
    [CharType.INT]: STATE.EXP_VAL,
    [CharType.SPACE]: STATE.END_SPACE,
  },
  [STATE.END_SPACE]: {
    [CharType.SPACE]: STATE.END_SPACE,
  }
};

function isNumber(s: string): boolean {
  let state: { [key in CharType]?: STATE } = stateTree[STATE.ENTRY];
  let currentState: STATE = STATE.ENTRY;
  for (const c of s) {
    const typ = getCharType(c);
    if (typ == CharType.ERROR || !state[typ]) {
      return false;
    }
    currentState = state[typ]!;
    state = stateTree[state[typ]!];
  }
  return currentState == STATE.INT || currentState == STATE.NORMAL_POINT || currentState == STATE.FACT || currentState == STATE.EXP_VAL || currentState == STATE.END_SPACE;
};


let res = isNumber("   +3.1415926e+11    ");
console.log('res: ', res);
let res1 = isNumber("     12. ");
console.log('res1: ', res1);

