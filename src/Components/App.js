import React, {Component} from 'react';
import '../Sources/App.css';
import {connect} from 'react-redux';
import TaskList from './taskList';
import * as myTask from '../Actions/action';

class App extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: "",
            startTime: "",
            endTime: "",
            search: ""
        };
        this.addTask = this.addTask.bind(this);
    }


    addTask() {
        let id = '_' + Math.random().toString(36).substr(2, 9);
        let task = this.state.inputValue;
        let startTime = this.state.startTime;
        let endTime = this.state.endTime;
        myTask.addTask(startTime, endTime, task,id);
        this.state.inputValue = "";
        this.state.startTime = "";
        this.state.endTime = "";
        let inputTask = document.getElementById("addInput").focus();
        let add = new Audio(require('../Sources/add.wav')).play();
    }

    render() {
        return (
            <div>
                {/*HEADER*/}
                <div className="myHeader">
                    <div className="logo"><h2><i>ToDo.......</i></h2></div>
                    <div className="divSearch">
                        <input type="search"
                               className="searchInput"
                               placeholder="Пошук задачі"
                               value={this.state.search}
                               onChange={(e) => this.setState({search: e.target.value})}
                        />
                    </div>
                </div>
                {/*ADD_IMPORT*/}
                <div className="addTaskBlock">
                    <div className="addLabel" onClick={()=>{document.getElementById("addInput").focus()}}>
                        <h1><b>Додати нове завдання</b></h1>
                    </div>
                    <form className="divAdd" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" className="addInput" id="addInput" placeholder="Введіть завдання"
                               value={this.state.inputValue}
                               onChange={(e) => this.setState({inputValue: e.target.value})}
                        />
                        <input className="timeInput" type="time"
                               value={this.state.startTime}
                               onChange={(e) => this.setState({startTime: e.target.value})}
                        />
                        <input className="timeInput" type="time"
                               value={this.state.endTime}
                               onChange={(e) => this.setState({endTime: e.target.value})}
                        />
                        <button type="submit" onClick={this.addTask}>Додати</button>
                    </form>
                </div>
                {/*INFO_BLOCK*/}
                <div id="infoBlock" className="infoBlock">
                    <TaskList search={this.state.search}/>
                </div>
                {/*FOOTER*/}
                <div className="">
                </div>
            </div>
        );
    }
}

export default connect(store => ({store: store}))(App);
