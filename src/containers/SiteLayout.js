import React, { Component } from 'react';
import MaterialUI, { Container, ThemeProvider, createMuiTheme, Grid, Divider } from '@material-ui/core';

import CenteredTabs from '../components/CenteredTabs';
import CenteredGrid from '../components/CenteredGrid';

export class SiteLayout extends Component {
    render() {
        return (
            <div>
                <CenteredTabs></CenteredTabs>
                <CenteredGrid />
            </div>
        )
    }
}

export default SiteLayout
