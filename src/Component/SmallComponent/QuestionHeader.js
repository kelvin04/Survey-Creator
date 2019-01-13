import React, { Component } from 'react';
import { Select, Button } from 'antd';

const Option = Select.Option;

class QuestionHeader extends Component {
    state = { question: [] }

    handleChange = (value) => {
        this.props.sendQuestionType(value)
    }

    render() {
        return(
            <div style={{ marginBottom: "15px" }}>
                Question 1
                <Select defaultValue="Select Question" onChange={this.handleChange} style={{ marginLeft: "1%" }}>
                    <Option key={1} value="ShortAnwer">Short Answer</Option>
                    <Option key={2} value="MultipleAnswer">Multiple Answer</Option>
                    <Option key={3} value="YesNoQuestion">Yes - No Question</Option>
                    <Option key={4} value="CheckboxQuestion">Checkbox Question</Option>
                </Select>
                <div style={{ float: "right" }}>
                    <Button icon="caret-down" />
                    <Button icon="caret-up" style={{ marginLeft: "5px" }} />
                    <Button icon="close" style={{ marginLeft: "20px" }} />
                </div>
            </div>
        );
    }
}

export default QuestionHeader;