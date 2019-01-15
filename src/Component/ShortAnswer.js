import React, { Component } from 'react';
import { Input, Button } from 'antd';

const { TextArea } = Input;

class ShortAnswer extends Component {
    state = { question: '' }

    onInputQuestion= (e) => {
        this.setState({ question: e.target.value });
    }

    onButtonSave = () => {
        this.props.sendQuestionValue(this.state.question);
    }

    render() {
        return(
            <div>
                <TextArea autosize placeholder='Input question' onChange={this.onInputQuestion}/>
                <br/><br/>
                <Button type='primary' onClick={() => this.onButtonSave()} >Save</Button>
            </div>
        );
    }
}

export default ShortAnswer;