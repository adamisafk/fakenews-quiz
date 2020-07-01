import React, { Component } from 'react';

import CenteredTabs from '../components/CenteredTabs';
import MainGrid from '../components/MainGrid';
import { Alert } from '@material-ui/lab';
import { Collapse, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'

export class SiteLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        }
    }
    closeAlert = () => {
        //setState({isOpen: false})
        this.setState({isOpen: false})
    }

    render() {
        return (
            <div>
                <CenteredTabs></CenteredTabs>

                <Collapse in={this.state.isOpen}>
                    <Alert 
                    severity="info"
                    action={
                        <IconButton aria-label="close" color="inherit" size="small" onClick={this.closeAlert}>
                            <CloseIcon></CloseIcon>
                        </IconButton>
                    }
                    >
                            This website is under construction. Expanding the card at the bottom will allow you to read it. 
                            If it doesn't work you will need to open the article link externally. If the link doesn't exist anymore you'll need to guess from the title.
                    </Alert>
                </Collapse>

                <Typography variant="h2" gutterBottom style={{marginTop: 50}}>
                    WHICH ONE IS FAKE NEWS?
                </Typography>

                <MainGrid />
            </div>
        )
    }
}

export default SiteLayout
