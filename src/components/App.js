import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.png';
import Title from './Title';



class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({
            displayBio: !this.state.displayBio
        })
    }

    render() {
        return (
            <div>
                <img src={profile} alt='profile' className='profile' />
                <h1>Hello</h1>
                <p>My name is Ivan.</p>
                <Title />
                <p>I am looking forward to working on meaningful projects!</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Belegrade and I try to take time to code every day.</p>
                            <p>I like eye-catching desings and enhanced with JS, and I think React.Js is awesome.</p>
                            <p>Beside coding I like music as well, along with some other activities.</p>
                            <button onClick={this.toggleDisplayBio}> Show Less </button>
                        </div>
                    ) : (
                            <div>
                                <button onClick={this.toggleDisplayBio}>Read More</button>
                            </div>
                        )
                }
                <Projects />
                <SocialProfiles />
            </div>
        )
    }
}

// const AppWithHeader = () => <Header Component={App} />

export default App;