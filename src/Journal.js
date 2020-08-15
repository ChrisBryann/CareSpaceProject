import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Journal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            highlights: "",
            mood: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        console.log(e.target.value);
        this.setState({[e.target.name]: e.target.value}) //updates the value that is written in the form
    }
    handleSubmit() {
        const newJournal = {
            date: this.state.date,
            highlights: this.state.highlights,
            mood: this.state.mood
        }
        this.props.addNewJournal(newJournal);
        this.setState({date: "", highlights:"", mood: ""});
    }

    render() {
        return (
            <div>
                <form onSubmit= {this.handleSubmit}>
                    {/*today's date*/}
                    <TextField required id="standard-required" name="date" label="Date" placeholder="MM/DD/YYYY" value={this.state.date} onChange={this.handleChange}/>
                    {/*highlights*/}
                    <TextField required id="standard-required" name="highlights" label="Highlight" placeholder="How's your day?" value={this.state.highlights} onChange={this.handleChange}/>
                    {/*mood*/}
                    <TextField required id="standard-required" name="mood" label="Mood" placeholder="How are you feeling?" value = {this.state.mood} onChange={this.handleChange}/>
                    <Button variant="contained" color= "primary" type="submit">Submit</Button>
                </form>
                
            </div>
        )
    }
}
export default Journal;