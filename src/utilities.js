// @flow
import type { Step } from './types';

export const getFirstStep = (steps: Array<Step>, group?: string): Step => Object
  .values(steps)
  .filter(_step => _step.group === group)
  .reduce((a, b) => (!a || a.order > b.order ? b : a), null);

export const getLastStep = (steps: Array<Step>, group: string): Step => Object
  .values(steps)
  .filter(_step => _step.group === group)
  .reduce((a, b) => (!a || a.order < b.order ? b : a), null);

export const getStepNumber = (steps: Array<Step>, step: ?Step): number => step
  && Object
    .values(steps)
    .filter(_step => _step.group === step.group && _step.order <= step.order).length;

export const getPrevStep = (steps: Array<Step>,
  step: ?Step): number => Object
  .values(steps)
  .filter(_step => _step.group === step.group && _step.order < step.order)
  .reduce((a, b) => (!a || a.order < b.order ? b : a), null);

export const getNextStep = (steps: Array<Step>,
  step: ?Step): number => Object
  .values(steps)
  .filter(_step => _step.group === step.group && _step.order > step.order)
  .reduce((a, b) => (!a || a.order > b.order ? b : a), null) || step;
