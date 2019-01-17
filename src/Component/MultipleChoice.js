import React, { Component } from 'react';
import { Radio, Input, Button } from 'antd';

const { TextArea } = Input;
const RadioGroup = Radio.Group;

const radioStyle = {
    height: '30px',
    lineHeight: '30px',
}

class MultipleChoice extends Component {
    state = { 
        value: '', 
        question: '', 
        answer: '', 
        addAnswer: [] }

    onInputQuestion = (e) => {
        this.setState({ question: e.target.value });
    }

    onInputAnswer = (e) => {
        this.setState({ answer: e.target.value });
    }

    onAddAnswer = async() => {
        const { answer, addAnswer } = this.state;
        if(answer) {
            addAnswer.push(answer);
            this.forceUpdate();
        }
    }

    onDeleteAnswer = (value) => {
        this.state.addAnswer.splice(value, 1);
        this.forceUpdate();
    }

    onChooseAnswer = (e) => {
        this.setState({ value: e.target.value });
    }

    onButtonSave = async() => {
        this.props.sendQuestionValue(this.state.question);
        await this.props.sendAnswerValue(this.state.addAnswer);
        this.setState({ addAnswer: [] })
        console.log('Question = ' + this.state.question);
        console.log('Answer List = ' + this.state.addAnswer);
    }

    renderAnswerList = () => {
        const list = this.state.addAnswer.map((answer, key) => {
            return(
                <div key={key}>
                    <Radio style={radioStyle} value={answer}>{answer}</Radio>
                    <Button size='small' type='danger' shape='circle' icon='close' style={{ float: 'right' }} onClick={() => this.onDeleteAnswer(key)} />
                </div>
            )
        })
        return list;
    }

    render() {
        console.log(this.state.addAnswer)
        return(
            <div>
                <TextArea autosize placeholder='Input question' onChange={this.onInputQuestion} style={{ marginBottom: '10px' }} />
                <RadioGroup onChange={this.onChooseAnswer} value={this.state.value}>
                    {this.renderAnswerList()}
                </RadioGroup>
                <br/>
                <Input placeholder='Input answer' onChange={this.onInputAnswer} style={{ width: 250, marginTop: '10px', marginRight: '10px' }}/>
                <Button type='primary' shape='circle' icon='plus' onClick={() => this.onAddAnswer()} />
                <br/><br/>
                <Button type='primary' onClick={() => this.onButtonSave()} >Save</Button>
            </div>
        );
    }
}

export default MultipleChoice;