// https://docs.cedarpolicy.com/json-est.html


export enum Effect {
  PERMIT = 'permit',
  FORBID = 'forbid',
}

export interface entity {
  type: string;
  id: string;
}

export enum ScopeOperator {
  EQUALS = '==',
  IN = 'in',
  ALL = 'all',
}

export enum Kind {
  WHEN = 'when',
  UNLESS = 'unless',
}

export enum Slot {
  PRINCIPAL = '?principal',
  RESOURCE = '?resource',
}

export interface Principal {
  op: ScopeOperator;
  entity?: entity | undefined;
  slot?: Slot | undefined;
}

export interface Action {
  op: ScopeOperator;
  action: string;
}

export interface Resource {
  op: ScopeOperator;
  entity?: entity | undefined;
  slot: Slot | undefined;
}

export interface ESTExpr {
  thing: string;
}

export interface Condition {
  kind: Kind;
  body: ESTExpr;
}

export interface Annotations {
  kind: Kind;
  conditions: Condition[];
}


export interface Policy {
  effect: Effect;
  principal?: Principal | undefined;
  action?: Action | undefined;
  resource?: Resource | undefined;
  conditions?: Condition[] | undefined;
  annotations?: {[key:string]: any};
}