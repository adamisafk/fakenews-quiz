import React, { Component } from 'react';

import CenteredTabs from '../components/CenteredTabs';
import MainGrid from '../components/MainGrid';

export class SiteLayout extends Component {
    render() {
        return (
            <div>
                <CenteredTabs></CenteredTabs>
                <MainGrid />
            </div>
        )
    }
}

export default SiteLayout
