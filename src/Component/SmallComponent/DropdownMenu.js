import React, { Component } from 'react';
import { Select } from 'antd';

const Option = Select.Option;

class DropdownMenu extends Component {
    render() {
        return(
            <div>
                <Select defaultValue={this.props.defaultValue} onChange={this.handleChange} style={{ marginLeft: "1%" }}>
                    <Option key={1} value={this.props.option1}>{this.props.option1}</Option>
                    <Option key={2} value={this.props.option2}>{this.props.option2}</Option>
                    <Option key={3} value={this.props.option3}>{this.props.option3}</Option>
                    <Option key={4} value={this.props.option4}>{this.props.option4}</Option>
                </Select>
            </div>
        );
    }
}

export default DropdownMenu;