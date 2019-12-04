import { ADD_TASK, DELETE_TASK, COMPLETE_TASK } from './actions.Types';

export function addTask(payload) {
  return { type: ADD_TASK, payload };
}

export function deleteTask(payload) {
  return { type: DELETE_TASK, payload };
}

export function completeTask(payload) {
  return { type: COMPLETE_TASK, payload };
}
