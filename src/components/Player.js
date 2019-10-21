import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Player.module.css';

export default class Player extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
  };

  playerRef = createRef();

  play = () => {
    this.playerRef.current
      .play()
      .then(() => {
        console.log('Видео запустилось.');
      })
      .catch(error => {
        console.log('Ошибка при запуске видео', error);
      });
  };

  pause = () => {
    this.playerRef.current.pause();
  };

  render() {
    const { source } = this.props;

    return (
      <div className={styles.container}>
        <video className={styles.player} src={source} ref={this.playerRef}>
          <track default kind="captions" srcLang="en" src="" />
          Sorry, your browser does not support embedded videos.
        </video>

        <div className={styles.controls}>
          <button type="button" onClick={this.play}>
            Play
          </button>
          <button type="button" onClick={this.pause}>
            Pause
          </button>
        </div>
      </div>
    );
  }
}
