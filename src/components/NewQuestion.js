import React from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';

class NewQuestion extends React.Component {
    state = {
        optionOneText:'',
        optionTwoText:''
    }

    handleChange = (e) => {
        const text = e.target.value;
        if(e.target.name === 'optionOneText') {
            this.setState({optionOneText: text})
        }
        if(e.target.name === 'optionTwoText') {
            this.setState({optionTwoText: text})
        }        
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {optionOneText, optionTwoText } = this.state;
        const { dispatch } = this.props;

        dispatch(handleAddQuestion(optionOneText,optionTwoText))

        this.setState({
            optionOneText: '',
            optionTwoText: '',
        })
    }

    render(){
    
    const question1Left = 60 - this.state.optionOneText.length
    const question2Left = 60 - this.state.optionTwoText.length

    return (
        <div className='newQuestion'>
            <header><h2>Create New Question</h2></header>
            <div className='newQuestion-cont'>
                <h2>Complete the Questions:</h2>
                <h3>Would you Rather ...</h3>
                <div className='newQuestion-cont-from'>
                    <form className='newQuestion-cont-from' onSubmit={this.handleSubmit}>
                        <input 
                            type="textfiled" 
                            id="question1" 
                            name="optionOneText" 
                            placeholder="Enter OptionOne Text Here" 
                            value={this.state.optionOneText}
                            onChange={this.handleChange}
                            maxLength={60}
                        />
                        <span>{question1Left}</span>
                        <h3>OR</h3>
                        <input 
                            type="textfiled" 
                            id="question2" 
                            name="optionTwoText" 
                            placeholder="Enter OptionTwo Text Here" 
                            value={this.state.optionTwoText}
                            onChange={this.handleChange}
                            maxLength={60}
                        />
                        <span>{question2Left}</span>
                        <input 
                            className='question-submitBtn' 
                            type='submit' 
                            value='Submit'
                            disabled={this.state.optionOneText === '' || this.state.optionTwoText === ''}
                        />
                    </form>
                </div>
            </div>                 
        </div>
    );
    }
}

export default connect()(NewQuestion);