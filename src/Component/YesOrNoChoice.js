import React, { Component } from 'react';
import { Radio, Input, Button } from 'antd';

const { TextArea } = Input;
const RadioGroup = Radio.Group;

class YesOrNoChoice extends Component {
    state = { value: 1 }

    onInputQuestion= (e) => {
        this.setState({ question: e.target.value });
    }

    onChooseAnswer = (e) => {
        this.setState({ value: e.target.value });
    }

    onButtonSave = () => {
        console.log(this.state.question);
    }

    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };

        return(
            <div>
                <TextArea autosize placeholder='Input question' onChange={this.onInputQuestion} style={{ marginBottom: '10px' }} />
                <RadioGroup onChange={this.onChooseAnswer} value={this.state.value}>
                    <Radio style={radioStyle} value={"Yes"}>Yes</Radio>
                    <Radio style={radioStyle} value={"No"}>No</Radio>
                </RadioGroup>
                <br/><br/>
                <Button type='primary' onClick={() => this.onButtonSave()} >Save</Button>
            </div>
        );
    }
}

export default YesOrNoChoice;