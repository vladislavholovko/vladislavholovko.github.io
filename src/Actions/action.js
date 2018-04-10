import {store} from "../index";
import {actionType} from '../Reducers/reducer';

export function addTask(startTime, endTime, task, id) {
    let state = store.getState();
    let mas = state.my_task;
    let checkMas = {id:id, task: task, startTime: startTime, endTime: endTime , check: false};
    mas.push(checkMas);
    store.dispatch({
        type: actionType.MY_TASK,
        payload: mas
    });
    localStorage.setItem('task', JSON.stringify(mas));
}

export function changeStatus(id) {
    let state = store.getState();
    let mas = state.my_task;
    mas.map(value=>{
        if (value.id === id){
            value.check = !value.check
        }
    });
    store.dispatch({
        type: actionType.MY_TASK,
        payload: mas
    });
    localStorage.setItem('task', JSON.stringify(mas));
}

export function deleteTask(id) {
    let state = store.getState();
    let mas = state.my_task;
    let dTask = mas.find((val) => {
        return val.id === id;
    });
    let index = mas.indexOf(dTask);
    mas.splice(index,1);
    store.dispatch({
        type: actionType.MY_TASK,
        payload: mas
    });
    localStorage.setItem('task', JSON.stringify(mas));
}

export function upTask(index) {
    let state = store.getState();
    let mas = state.my_task;
    if (index === 0) {
        let add = new Audio(require('../Sources/error.wav')).play();
    } else {
        let a = mas[index];
        mas[index] = mas[index - 1];
        mas[index - 1] = a;
        store.dispatch({
            type: actionType.MY_TASK,
            payload: mas
        });
        let chek = new Audio(require('../Sources/ap_down.wav')).play();
        localStorage.setItem('task', JSON.stringify(mas));
    }
}

export function downTask(index) {
    let state = store.getState();
    let mas = state.my_task;
    if (index >= mas.length - 1) {
        let add = new Audio(require('../Sources/error.wav')).play();
    } else {
        let a = mas[index];
        mas[index] = mas[index + 1];
        mas[index + 1] = a;
        store.dispatch({
            type: actionType.MY_TASK,
            payload: mas
        });
        let chek = new Audio(require('../Sources/ap_down.wav')).play();
        localStorage.setItem('task', JSON.stringify(mas));
    }
}