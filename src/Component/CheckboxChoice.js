import React, { Component } from 'react';
import { Checkbox, Input, Button } from 'antd';

const { TextArea } = Input;

class CheckboxChoice extends Component {
    state = { question: '', answer: '', answerList: [] }

    onInputQuestion = (e) => {
        this.setState({ question: e.target.value });
    }

    onInputAnswer = (e) => {
        this.setState({ answer: e.target.value });
    }

    onAddAnswer = () => {
        const { answer, answerList } = this.state;
        if(answer) {
            answerList.push(answer);
            this.forceUpdate();
        }
    }

    onDeleteAnswer = (value) => {
        this.state.answerList.splice(value, 1);
        this.forceUpdate();
    }

    onChooseAnswer = (value) => {
        console.log('checked = ', value);
    }

    onButtonSave = () => {
        console.log('Question = ' + this.state.question);
        console.log('Answer List = ' + this.state.answerList);
    }

    renderAnswerList = () => {
        const list = this.state.answerList.map((answer, key) => {
            return(
                <div key={key}>
                    <Checkbox.Group style={{ width: '100%' }} onChange={this.onChooseAnswer}>
                        <Checkbox value={answer}>{answer}</Checkbox>
                        <Button size='small' type='danger' shape='circle' icon='close' onClick={() => this.onDeleteAnswer(key)} />
                        <br/>
                    </Checkbox.Group>
                </div>
                
            )
        })
        return list;
    }

    render() {
        return(
            <div>
                <TextArea autosize placeholder='Input question' onChange={this.onInputQuestion} style={{ marginBottom: '10px' }} />
                {this.renderAnswerList()}
                <Input placeholder='Input answer' onChange={this.onInputAnswer} style={{ width: 250, marginTop: '10px', marginRight: '10px' }}/>
                <Button type='primary' shape='circle' icon='plus' onClick={() => this.onAddAnswer()} />
                <br/><br/>
                <Button type='primary' onClick={() => this.onButtonSave()} >Save</Button>
            </div>
        );
    }
}

export default CheckboxChoice;