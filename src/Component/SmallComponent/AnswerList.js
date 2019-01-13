import React, { Component } from 'react';
import { Select, Menu, Dropdown, Button, Icon, message } from 'antd';

function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
  }
  
  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }

class AnswerList extends Component {
    render() {
        return(
            <div>
                <Menu onClick={handleMenuClick}>
                    <Menu.Item key="1">{this.props.option1}</Menu.Item>
                    <Menu.Item key="2">{this.props.option2}</Menu.Item>
                    <Menu.Item key="3">{this.props.option3}</Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default AnswerList;