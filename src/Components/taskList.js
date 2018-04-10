import React, {Component} from 'react';
import '../Sources/App.css';
import {connect} from 'react-redux';
import * as myTask from '../Actions/action';

class TaskList extends Component {

    searchList() {
        let sList = this.props.store.my_task.filter((val) => {
            let mTask = val.task;
            return mTask.indexOf(this.props.search) !== -1;
        });
        return sList
    }

    chekedTask(id) {
        myTask.changeStatus(id);
        let chek = new Audio(require('../Sources/ok.wav')).play();
    }

    upTask(index) {
        myTask.upTask(index);

    }

    downTask(index) {
        myTask.downTask(index);

    }

    deleteTask(id) {
        myTask.deleteTask(id);
        let del = new Audio(require('../Sources/delete.wav')).play();
    }

    content() {
        let listTask = this.props.search === "" ? this.props.store.my_task : this.searchList();
        return listTask.map((value, index) =>
            <div key={index} className="taskElements">
                <div className="taskDiv" onClick={() => this.chekedTask(value.id)}>
                    {listTask[index].startTime === "" && listTask[index].endTime === "" ?
                        <div className={String(listTask[index].check)}>{value.task}</div> :
                        listTask[index].startTime === "" ?
                            <div className={String(listTask[index].check)}>{value.task} (до {value.endTime}) </div> :
                            listTask[index].endTime === "" ?
                                <div
                                    className={String(listTask[index].check)}>{value.task} (від {value.startTime}) </div> :
                                <div
                                    className={String(listTask[index].check)}>{value.task} ({value.startTime}-{value.endTime}) </div>
                    }
                </div>

                {this.props.search === "" ? (
                        <div className="buttonDiv">
                            <div className="upButton" onClick={() => this.upTask(index)}>&#x2191;</div>
                            <div className="downButton" onClick={() => this.downTask(index)}>&#x2193;</div>
                            <div className="deleteButton" onClick={() => this.deleteTask(value.id)}>&#10007;</div>
                        </div>) :
                    (<div className="buttonDel">
                        <div className="deleteButton" onClick={() => this.deleteTask(value.id)}>&#10007;</div>
                    </div>)
                }


            </div>
        );
    }

    render() {
        return this.content();
    }
}

export default connect(store => ({store: store}))(TaskList);