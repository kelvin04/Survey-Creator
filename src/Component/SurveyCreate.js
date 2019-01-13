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
        this.state = { selectedQuestion: ''};
    }

    state = { questionList: [] }
    
    renderQuestionType = () => {
        const { selectedQuestion } = this.state;
        switch (selectedQuestion) {
            case 'ShortAnwer':
                return <ShortAnswer />;
            case 'MultipleAnswer':
                return <MultipleChoice />;
            case 'YesNoQuestion':
                return <YesOrNoChoice />;
            case 'CheckboxQuestion':
                return <CheckboxChoice />;
            default:
                return <h2>Choose a question type</h2>
        }
    }

    getQuestionType(data) {
        this.setState({ selectedQuestion: data });
    }

    onButtonSave = () => {
        console.log(this.state.question);
    }

    render() {
        console.log(this.state.selectedQuestion)
        return(
            <div style={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px" }}>
                <Button type="primary" style={{ float: "right" }}>Save</Button>
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
                        <div style={{ marginBottom: "10px" }}>
                            <p style={{ marginBottom: "5px" }}>Level 1</p>
                            <DropdownMenu 
                                defaultValue={'Pilih Pulau'}
                                option1={'Pulau Jawa'}
                                option2={'Pulau Sumatera'}
                                option3={'Pulau Kalimantan'}
                            />
                        </div>
                    </Col>
                    <Col xs={{ span: 12, offset: 1 }} sm={{ span: 6, offset: 1 }} md={{ span: 2, offset: 2 }}>
                        <div style={{ marginBottom: "10px" }}>
                            <p style={{ marginBottom: "5px" }}>Level 2</p>
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
                        <div style={{ marginBottom: "10px" }}>
                            <p style={{ marginBottom: "5px" }}>Level 3</p>
                            <DropdownMenu />
                        </div>
                    </Col>
                    <Col xs={{ span: 12, offset: 1 }} sm={{ span: 6, offset: 1 }} md={{ span: 2, offset: 2 }}>
                        <div style={{ marginBottom: "10px" }}>
                            <p style={{ marginBottom: "5px" }}>Level 4</p>
                            <DropdownMenu />
                        </div>
                    </Col>
                    <Col xs={{ span: 12, offset: 1 }} sm={{ span: 6, offset: 1 }} md={{ span: 2, offset: 2 }}>
                    <div style={{ marginBottom: "10px" }}>
                            <p style={{ marginBottom: "5px" }}>Level 5</p>
                            <DropdownMenu />
                        </div>
                    </Col>
                </Row>
                
                <div style={{ padding: "15px", border: "solid black 1px", borderRadius: "8px", marginBottom: "20px" }}>
                    <QuestionHeader sendQuestionType={this.getQuestionType} />
                    {this.renderQuestionType()}
                </div>
            </div>
        );
    }
}

export default SurveyCreate;