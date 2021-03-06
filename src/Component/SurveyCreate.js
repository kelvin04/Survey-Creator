import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import DropdownMenu from './SmallComponent/DropdownMenu';
import QuestionHeader from './SmallComponent/QuestionHeader';
import MultipleChoice from './MultipleChoice';
import CheckboxChoice from './CheckboxChoice';
import YesOrNoChoice from './YesOrNoChoice';
import ShortAnswer from './ShortAnswer';

class SurveyCreate extends Component {
    constructor() {
        super();
        this.getQuestionType = this.getQuestionType.bind(this);
        this.getQuestionValue = this.getQuestionValue.bind(this);
        this.getAnswerValue = this.getAnswerValue.bind(this);
        this.state = { 
            selectedQuestion: '', 
            getQuestionValue: '', 
            questionList: [],
            answerList: []
        };
    }

    getQuestionType = (data) => {
        this.setState({ selectedQuestion: data });
    }

    getQuestionValue = (data) => {
        this.setState({ getQuestionValue: data });
        if(data) {
            this.state.questionList.push(data);
        }
    }

    getAnswerValue = (data) => {
        this.setState({ getQuestionType: data });
        if(data) {
            this.state.answerList.push(data);
        }
    }

    onMoveQuestionDown = (oldIndex) => {
        const { questionList, answerList } = this.state;
        const newIndex = oldIndex + 1;
        if (oldIndex !== questionList.length-1 && newIndex >= questionList.length) {
            var k = newIndex - questionList.length;
            while ((k--) + 1) {
                questionList.push(undefined);
            }
        }
        questionList.splice(newIndex, 0, questionList.splice(oldIndex, 1)[0]);
        answerList.splice(newIndex, 0, answerList.splice(oldIndex, 1)[0]);
        this.forceUpdate();
    }

    onMoveQuestionUp = (oldIndex) => {
        const { questionList, answerList } = this.state;
        const newIndex = oldIndex -1;
        if (oldIndex !== 0 && newIndex >= questionList.length) {
            var k = newIndex - questionList.length;
            while ((k--) + 1) {
                questionList.push(undefined);
            }
        }
        questionList.splice(newIndex, 0, questionList.splice(oldIndex, 1)[0]);
        answerList.splice(newIndex, 0, answerList.splice(oldIndex, 1)[0]);
        this.forceUpdate();
    }

    onDeleteQuestion = (value) => {
        this.state.questionList.splice(value, 1);
        this.forceUpdate();
    }

    renderQuestionType = () => {
        const { selectedQuestion } = this.state;
        switch (selectedQuestion) {
            case 'ShortAnwer':
                return <ShortAnswer 
                    sendQuestionValue={this.getQuestionValue}
                    sendAnswerValue={this.getAnswerValue}
                />;
            case 'MultipleAnswer':
                return <MultipleChoice 
                    sendQuestionValue={this.getQuestionValue} 
                    sendAnswerValue={this.getAnswerValue}
                />;
            case 'YesNoQuestion':
                return <YesOrNoChoice />;
            case 'CheckboxQuestion':
                return <CheckboxChoice />;
            default:
                return <h2>Choose a question type</h2>
        }
    }

    renderQuestionList = () => {
        return (
            <div>
                {this.state.questionList.map((question, index1) =>
                  <div className='questionListContainer' key={index1}>
                    <h2>Question {index1+1}</h2>
                    <p>{question}</p>
                    <ul>
                        {this.state.answerList[index1].map((answer, index2) =>
                            <li key={index2}>{answer}</li>
                        )}
                    </ul>
                    <div className='topRightCorner'>
                            <Button icon='caret-down' type='primary' onClick={() => this.onMoveQuestionDown(index1)} />
                            <Button icon='caret-up' type='primary' style={{ marginLeft: '5px' }} onClick={() => this.onMoveQuestionUp(index1)} />
                            <Button icon='close' type='danger' style={{ marginLeft: '20px' }} onClick={() => this.onDeleteQuestion(index1)} />
                        </div>
                  </div>
                )}
            </div>
        );

    }

    render() {
        console.log(this.state.questionList);
        console.log(this.state.answerList);
        return(
            <div style={{ margin: '20px' }}>
                <Button type='primary' style={{ float: 'right' }}>Save</Button>
                <h2>Sruvey Title</h2>
                <p>Survey Description</p>
                <DropdownMenu 
                    defaultValue={'Select Target'}
                    option1={'1'}
                    option2={'2'}
                    option3={'3'}
                />
                <br/>
                <Row gutter={16}>
                    <Col xs={{ span: 12, offset: 1 }} sm={{ span: 6, offset: 1 }} md={{ span: 2, offset: 2 }}>
                        <div style={{ marginBottom: '10px' }}>
                            <p style={{ marginBottom: '5px' }}>Level 1</p>
                            <DropdownMenu 
                                defaultValue={'Pilih Pulau'}
                                option1={'Pulau Jawa'}
                                option2={'Pulau Sumatera'}
                                option3={'Pulau Kalimantan'}
                            />
                        </div>
                    </Col>
                    <Col xs={{ span: 12, offset: 1 }} sm={{ span: 6, offset: 1 }} md={{ span: 2, offset: 2 }}>
                        <div style={{ marginBottom: '10px' }}>
                            <p style={{ marginBottom: '5px' }}>Level 2</p>
                            <DropdownMenu
                                defaultValue={'Pilih Provinsi'}
                                option1={'Jawa Barat'}
                                option2={'Jawa Tengah'}
                                option3={'Jawa Timur'}
                                option4={'Sumatera Utara'}
                            />
                        </div>
                    </Col>
                    <Col xs={{ span: 12, offset: 1 }} sm={{ span: 6, offset: 1 }} md={{ span: 2, offset: 2 }}>
                        <div style={{ marginBottom: '10px' }}>
                            <p style={{ marginBottom: '5px' }}>Level 3</p>
                            <DropdownMenu />
                        </div>
                    </Col>
                    <Col xs={{ span: 12, offset: 1 }} sm={{ span: 6, offset: 1 }} md={{ span: 2, offset: 2 }}>
                        <div style={{ marginBottom: '10px' }}>
                            <p style={{ marginBottom: '5px' }}>Level 4</p>
                            <DropdownMenu />
                        </div>
                    </Col>
                    <Col xs={{ span: 12, offset: 1 }} sm={{ span: 6, offset: 1 }} md={{ span: 2, offset: 2 }}>
                    <div style={{ marginBottom: '10px' }}>
                            <p style={{ marginBottom: '5px' }}>Level 5</p>
                            <DropdownMenu />
                        </div>
                    </Col>
                </Row>
                {this.renderQuestionList()}
                <div className='addNewQuestion'>
                    <QuestionHeader sendQuestionType={this.getQuestionType} />
                    {this.renderQuestionType()}
                </div>
            </div>
        );
    }
}

export default SurveyCreate;