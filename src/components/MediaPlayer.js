import React, { Component } from 'react';
import styled from 'styled-components'

import ReactPlayer from 'react-player'
import Duration from './Duration'

import {
  PlayArrow as PlayIcon,
  PlayCircleFilled as PlayFilledIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  SkipNext as NextIcon,
  SkipPrevious as PreviousIcon,
  Fullscreen as FullscreenIcon,
  VolumeDown,
  VolumeUp,
  VolumeMute,
  VolumeOff,
} from '@material-ui/icons'

import {
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core'

const Box = styled.div`
  width: 100%;
  max-width: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Player = styled.div`
  width: 100%;
  height: 360px;
  margin-top: 20px;
  margin-bottom: 20px;
  background: #f1f1f1;
`

const Controls = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`

const SongBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
  transition: width 0.5s ease-in;
  @media (min-width: 460px) {
    width: 300px;
  }
`

const Volume = styled.div`
  transform: rotate(270deg);
  height: 15px;
  width: 15px;
`

const SongList = ({songs, handleLoad}) => (
  <List>
    {
      songs.map((song, key) => (
        <ListItem button onClick={() => handleLoad(song.url)} key={key}>
          <ListItemText primary={song.title} secondary={song.artist} />
            <ListItemSecondaryAction>
            <IconButton aria-label="Play" onClick={() => handleLoad(song.url)} >
              <PlayFilledIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))
    }
  </List>
)

class MediaPlayer extends Component {
  state = {
    url: 'https://soundcloud.com/mike-weitzenhoffer/if-i-aint-got-you',
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    track: 0,
  }
  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false,
    })
  }
  next = () => {
    this.setState({ track: this.state.track + 1})
  }
  previous = () => {
    if (this.state.track === 0) {
      return;
    }
    this.setState({ track: this.state.track - 1})
  }
  playPause = () => {
    this.setState({ playing: !this.state.playing })
  }
  stop = () => {
    this.setState({ playing: false })
  }
  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }
  toggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }
  togglePIP = () => {
    this.setState({ pip: !this.state.pip })
  }
  onPlay = () => {
    console.log('onPlay')
    this.setState({ playing: true })
  }
  onEnablePIP = () => {
    console.log('onEnablePIP')
    this.setState({ pip: true })
  }
  onDisablePIP = () => {
    console.log('onDisablePIP')
    this.setState({ pip: false })
  }
  onPause = () => {
    console.log('onPause')
    this.setState({ playing: false })
  }
  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }
  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }
  onSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }
  onProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }
  onEnded = () => {
    console.log('onEnded')
    this.setState({ playing: this.state.loop })
  }
  onDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration })
  }
  onClickFullscreen = () => {
    // screenfull.request(findDOMNode(this.player))
    console.log('nothing')
  }
  renderLoadButton = (url, label) => {
    return (
      <button onClick={() => this.load(url)}>
        {label}
      </button>
    )
  }
  ref = player => {
    this.player = player
  }

  render () {
    const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = this.state
    const SEPARATOR = ' · '

    const songInfo = [
      {title: 'If I Ain\'t Got You', artist:"Alicia Keys", url:'https://soundcloud.com/mike-weitzenhoffer/if-i-aint-got-you'},
      {title: 'Before He Cheats', artist:"Carrie Underwood", url:'https://soundcloud.com/mike-weitzenhoffer/before-he-cheats'},
      {title: 'Honesty', artist:"Billy Joel", url:'https://soundcloud.com/mike-weitzenhoffer/honesty'},
      {title: 'When I Was Your Man', artist:"Bruno Mars", url:'https://soundcloud.com/mike-weitzenhoffer/when-i-was-your-man'},
      {title: 'Lay Me Down', artist:"Sam Smith", url:'https://soundcloud.com/mike-weitzenhoffer/lay-me-down'},
      {title: 'Moondance', artist:"Van Morrison", url:'https://soundcloud.com/mike-weitzenhoffer/Moondance'},
      {title: 'Free Bird (Improvised)', artist:"Lynyrd Skynyrd", url:'https://soundcloud.com/mike-weitzenhoffer/free-bird-improvised-lynyrd-skynrd'},
      {title: 'Just the Way You Are', artist:"Billy Joel", url:'https://soundcloud.com/mike-weitzenhoffer/just-the-way-you-are-billy-joel'},
      {title: 'Your Song', artist:"Elton John", url:'https://soundcloud.com/mike-weitzenhoffer/your-song-elton-john'},
      {title: 'Michelle', artist:"The Beatles", url:'https://soundcloud.com/mike-weitzenhoffer/michelle-beatles'},
      {title: 'You Light Up My Life', artist:"Debby Boone", url:'https://soundcloud.com/mike-weitzenhoffer/you-light-up-my-life'}
    ];

    return (
      <Box>
        <Player>
          <ReactPlayer
            ref={this.ref}
            className='react-player'
            width='100%'
            height='100%'
            url={url}
            pip={pip}
            playing={playing}
            controls={controls}
            light={light}
            loop={loop}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            onReady={this.onReady}
            onStart={() => console.log('onStart')}
            onPlay={this.onPlay}
            onEnablePIP={this.onEnablePIP}
            onDisablePIP={this.onDisablePIP}
            onPause={this.onPause}
            onBuffer={() => console.log('onBuffer')}
            onSeek={e => console.log('onSeek', e)}
            onEnded={this.onEnded}
            onError={e => console.log('onError', e)}
            onProgress={this.onProgress}
            onDuration={this.onDuration}
          />
        </Player>
        <Controls>
          <IconButton onClick={this.stop}><PreviousIcon /></IconButton>
          <IconButton onClick={this.stop}><StopIcon /></IconButton>
          <IconButton onClick={this.playPause}>{playing ? <PauseIcon /> : <PlayIcon />}</IconButton>
          <IconButton onClick={this.stop}> <NextIcon /> </IconButton>
          <IconButton>
            <VolumeUp />
          </IconButton>
          {/* <Volume>
            <input type='range' min={0} max={1} step='any' value={volume} onChange={this.setVolume} />
          </Volume> */}
          {/* <IconButton onClick={this.onClickFullscreen}><FullscreenIcon /></IconButton> */}
          {/* {ReactPlayer.canEnablePIP(url) &&
            <button onClick={this.togglePIP}>{pip ? 'Disable PiP' : 'Enable PiP'}</button> */}
        </Controls>
        {/* <Controls>
          <p>Seek</p>
            <input
              type='range' min={0} max={1} step='any'
              value={played}
              onMouseDown={this.onSeekMouseDown}
              onChange={this.onSeekChange}
              onMouseUp={this.onSeekMouseUp}
            />
          <p>Volume</p>
          <p>Played</p>
            <progress max={1} value={played} />
          <p>Loaded</p>
            <progress max={1} value={loaded} />
        </Controls> */}
        <SongBox>
          <h2>SoundCloud</h2>
          <SongList songs={songInfo} handleLoad={this.load} />
        </SongBox>
      </Box>
    )
  }
}

export default MediaPlayer
