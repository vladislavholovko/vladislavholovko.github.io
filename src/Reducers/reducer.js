export const actionType = {
    MY_TASK: "MY_TASK"
};

function save() {
    if (localStorage.getItem('task')!==null&&localStorage.getItem('task').length!==2){
        if 	(window.confirm('Існують збержені завдання відкрити їх?')){
            let newList = JSON.parse(localStorage.getItem('task'));
            return newList;
        } else {
            alert("Дані будуть видалені");
            let newList = [];
            localStorage.clear();
            return newList;
        }
    } else {
        let newList = [];
        localStorage.clear();
        return newList;
    }
}

const defaultState = {
    my_task:save()
};

export default function addTask(state=defaultState, action) {
    switch (action.type) {
        case "MY_TASK":
            return{my_task: action.payload};
            break;
        default:
            return state;

    }
}
