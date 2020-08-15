import React, {Component} from 'react';
import {withStyles, fade} from '@material-ui/core/styles';
import logo from './logo.svg';
import Counter from './Counter';
import Journal from './Journal'; 
import FAQ from './FAQ';
import './App.css';
import styles from "./styles/appstyles";

class App extends Component {
  constructor(props) {
    super(props);
    const savedJournals = JSON.parse(window.localStorage.getItem("journals")) // get the previously saved file of "journals"
    this.state = {
        journals: savedJournals || []
    }
    this.saveJournal = this.saveJournal.bind(this);
}
  saveJournal(newJournal){
    this.setState({journals: [...this.state.journals, newJournal]}, this.syncLocalStorage, function(){
      console.log(this.state.journals);
    }) // ... is for appending the previous items in the array
}
  syncLocalStorage(){
    window.localStorage.setItem("journals", JSON.stringify(this.state.journals)) // update the "journals" file, uses stringify since JSON does not accept any type other than strings.
}
  render() {
    const {classes} = this.props;
    return (
        <div className={classes.App}>
          {/*<Counter count = {1} name = "Chrisbry"/>*/}
          <Journal addNewJournal={this.saveJournal}/>
          <div className={classes.journalList}>
            {this.state.journals.map(journal => ( // 'journal => (codes)' means that for every journal, it does this code.
              <div className= {classes.journalBox}>
                <h1>Journal</h1>
                <h3>date: {journal.date}</h3>
                <h3>highlights: {journal.highlights}</h3>
                <h3>mood: {journal.mood}</h3>
                </div>
            ))}
            <FAQ />
          </div>
        </div>
      );
    }

}
export default withStyles(styles)(App);