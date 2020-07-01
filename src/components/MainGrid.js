import React, { Component } from 'react';
import { Grid, Paper, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert'

import RecipeReviewCard from '../components/RecipeReviewCard';
import PolitifactParser from '../components/PolitifactParser';

class MainGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            realDataTitle: null,
            realDataLink: null,
            fakeDataTitle: null,
            fakeDataLink: null,

            rng: null,
            successOpen: false,
            errorOpen: false,
            
            correctScore: 0,
            incorrectScore: 0,

            counter: 0
        }
    }

    setData = (realTitle, realLink, fakeTitle, fakeLink) => {
        this.setState({
            realDataTitle: realTitle,
            realDataLink: realLink,
            fakeDataTitle: fakeTitle,
            fakeDataLink: fakeLink,
        })
    }

    handleClose = (event, reason) => {
        if(reason === 'clickaway') {
            return;
        }
        this.setState({successOpen: false})
        this.setState({errorOpen: false})
    }
    openSuccessSnackbar = () => {
        this.setState({successOpen: true})
    }
    openErrorSnackbar = () => {
        this.setState({errorOpen: true})
    }

    onFakeButtonPress = (isFake) => {
        // remove previous snackbar
        this.setState({errorOpen: false})
        this.setState({successOpen: false})
        // update score
        if (isFake === false) {
            // wrong answer
            let newScore = this.state.incorrectScore + 1
            this.setState({incorrectScore: newScore})
            // Error snackbar
            this.openErrorSnackbar()
        } else if(isFake === true) {
            // right answer
            let newScore = this.state.correctScore + 1
            this.setState({correctScore: newScore})
            // Success snackbar
            this.openSuccessSnackbar()
        }

        // reset rng var
        this.randomizeCard()
        //reload PolitifactParser
        this.setState({counter: this.state.counter + 1})
    }
    randomizeCard = () => {
        // randomize number between 1 and 2
        let number = Math.floor((Math.random() * 2) + 1)
        this.setState({rng: number})
    }

    componentDidMount() {
        this.randomizeCard()
    }

    render() {
        return(
            <div style={{flexGrow: 1, display: 'flex'}}>
                <PolitifactParser data={this.setData.bind(this)} counter={this.state.counter} />
                <Grid container spacing={3} align="center" justify="center" direction="row" style={{padding: 20}} >
                    <Grid item xs={6}>
                        <Paper elevation={3} style={{padding: 5, maxWidth: 600}}>
                            <h4>Correct: {this.state.correctScore}</h4>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper elevation={3} style={{padding: 5, maxWidth: 600}}>
                            <h4>Incorrect: {this.state.incorrectScore}</h4>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} style={{}}>
                        <RecipeReviewCard 
                        title={this.state.rng === 1 ? this.state.realDataTitle : this.state.fakeDataTitle}
                        url={this.state.rng === 1 ? this.state.realDataLink : this.state.fakeDataLink}
                        isFake={this.state.rng === 1 ? false : true}
                        onAnswer={this.onFakeButtonPress.bind(this)}
                        />
                    </Grid>
                    <Grid item xs={6} style={{}} >
                        <RecipeReviewCard 
                        title={this.state.rng === 1 ? this.state.fakeDataTitle : this.state.realDataTitle}
                        url={this.state.rng === 1 ? this.state.fakeDataLink : this.state.realDataLink}
                        isFake={this.state.rng === 1 ? true : false}
                        onAnswer={this.onFakeButtonPress.bind(this)}
                        />
                    </Grid>
                </Grid>

                <Snackbar open={this.state.successOpen} autoHideDuration={6000} onClose={this.handleClose}>
                    <MuiAlert elevation={6} variant="filled" onClose={this.handleClose} severity={"success"}>
                        Correct!
                    </MuiAlert>
                </Snackbar>
                <Snackbar open={this.state.errorOpen} autoHideDuration={6000} onClose={this.handleClose}>
                    <MuiAlert elevation={6} variant="filled" onClose={this.handleClose} severity={"error"}>
                        Incorrect!
                    </MuiAlert>
                </Snackbar>
            </div>
        );
    }
}

export default MainGrid;