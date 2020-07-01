// Core
import React from 'react';

// Data sets
let politifactReal = require('../data/politifact/politifact_real.json')
let politifactFake = require('../data/politifact/politifact_fake.json')

class PolitifactParser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.counter
        }
    }

    formatFakeNews = () => {
        let dataIsValid = false
        let fakeNewsData

        while(dataIsValid === false) {
            // get new fake news
            let fakeNews = JSON.stringify(politifactFake[Math.floor(Math.random() * politifactFake.length)]);
            // if \\\ is present, reset loop and get new news. otherwise continue.
            if(fakeNews.search('\\\\') <= 0) {
                // continue formatting
                const fakeNewsValues = fakeNews.split('":"') // remove key from values
                fakeNewsData = fakeNewsValues[1].split(',') // split values (id,news_url,title,tweet_id)
                // check to see if pos [1] has a valid link
                if(fakeNewsData[1].includes('http')) {
                    dataIsValid = true
                }
            }
        }
        return fakeNewsData
    }
    formatRealNews = () => {
        let dataIsValid = false
        let realNewsData

        while(dataIsValid === false) {
            // get new real news
            let realNews = JSON.stringify(politifactReal[Math.floor(Math.random() * politifactReal.length)]);
            // if \\\ is present, reset loop and get new news. otherwise continue.
            if(realNews.search('\\\\') <= 0) {
                // continue formatting
                const realNewsValues = realNews.split('":"') // remove key from values
                realNewsData = realNewsValues[1].split(',') // split values (id,news_url,title,tweet_id)
                // check to see if pos [1] has a valid link
                if(realNewsData[1].includes('http')) {
                    dataIsValid = true
                }
            }
        }
        return realNewsData
    }

    getData = () => {
        const realNews = this.formatRealNews();
        const fakeNews = this.formatFakeNews();

        const realTitle = realNews[2]
        const realLink = realNews[1]
        const fakeTitle = fakeNews[2]
        const fakeLink = fakeNews[1]

        this.props.data(realTitle, realLink, fakeTitle, fakeLink);
    }

    componentDidMount() {
        this.getData()
    }
    componentDidUpdate(prevProps) {
        if(this.props.counter !== prevProps.counter) {
            this.getData()
        }
    }

    render() {
        return(
            <div>
            </div>
        )
    }
}

export default PolitifactParser;