import { connect } from 'react-redux'
import DiscoverTrackItem from './discover_track_item'
import { 
  updateCurrentTrack,
  pauseTrack,
  playTrack
 } from '../../actions/track_ui_actions'

const mSTP = ({ ui }) => {
  return {
    currentTrack: ui.currentTrack,
    playing: ui.playing
  }
}

const mDTP = dispatch => ({
  updateCurrentTrack: track => dispatch(updateCurrentTrack(track)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack())
})

export default connect(mSTP, mDTP)(DiscoverTrackItem)