export enum Intent {
  PERMIT = 'permit',
  FORBID = 'forbid',
}

export enum Condition {
  WHEN = 'when',
  UNLESS = 'unless',
}

export enum Operator {
  LIKE = 'LIKE',
  EQUALS = '==',
  NOT_EQUALS = '!=',
  LESS_THAN = '<',
  LESS_THAN_EQUALS = '<',
  IN = 'in'
  // Add All the operators
}

export enum ConditionOperator {
  AND = '&&',
  OR = '||',
}

export interface Entity {
  type: string;
  eid: string;
}


export interface Scope {
  intent: Intent;
  principal?: {
    operator: Operator;
    entity: Entity | Entity[];
  };
  action?: {
    operator: Operator;
    action: string | string[];
  };
  resource?: {
    operator: Operator;
    entity: Entity;
  };
}

export interface Conditions {
  type: Conditions;
  clause: string[];
  operator?: ConditionOperator;
}


// const myScope: Scope = {
//   intent: Intent.PERMIT,
//   principal: {
//     operator: Operator.EQUALS,
//     entity: {
//       type: 'user',
//       eid: 'bob',
//     },
//   },
//   action: {
//     operator: Operator.IN,
//     action: ['list', 'view'],
//   },
//   resource: {
//     operator: Operator.EQUALS,
//     entity: {
//       type: 'Album',
//       eid: 'Holidays'
//     }
//   }
// };