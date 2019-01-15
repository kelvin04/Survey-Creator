import React, { Component } from 'react';
import { Select } from 'antd';

const Option = Select.Option;

class QuestionHeader extends Component {
    state = { question: [] }

    handleChange = (value) => {
        this.props.sendQuestionType(value)
    }

    render() {
        return(
            <div style={{ marginBottom: "15px" }}>
                <Select defaultValue="Select Question" onChange={this.handleChange}>
                    <Option key={1} value="ShortAnwer">Short Answer</Option>
                    <Option key={2} value="MultipleAnswer">Multiple Answer</Option>
                    <Option key={3} value="YesNoQuestion">Yes - No Question</Option>
                    <Option key={4} value="CheckboxQuestion">Checkbox Question</Option>
                </Select>
            </div>
        );
    }
}

export default QuestionHeader;