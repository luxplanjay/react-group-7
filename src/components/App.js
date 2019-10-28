import React, { Component } from 'react';
import Profile from './Profile';
import Toggle from './Toggle';
// import Statistics from './Statistics';

// import WithBorder from './WithBorder';

const statisticalData = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggle>
          {(on, toggle) => (
            <>
              <button type="button" onClick={toggle}>
                {on ? 'Hide' : 'Show'}
              </button>
              {on && (
                <Profile
                  avatar="https://s3.amazonaws.com/uifaces/faces/twitter/michaelcomiskey/128.jpg"
                  name="Poly"
                />
              )}
            </>
          )}
        </Toggle>

        <Toggle>
          {(on, toggle) => (
            <>
              <input type="checkbox" onChange={toggle} checked={on} />

              {on && (
                <Profile
                  avatar="https://s3.amazonaws.com/uifaces/faces/twitter/michaelcomiskey/128.jpg"
                  name="Poly"
                />
              )}
            </>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
