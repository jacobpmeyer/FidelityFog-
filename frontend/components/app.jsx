import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import SplashContainer from './splash/splash_container'
import Modal from './modal/modal'
import UserDiscoverContainer from './user_discover/user_discover_container'
import UploadContainer from './upload/upload_container'

const App = () => {
  return (
    <div >
      <Modal />
      <Switch>
        <AuthRoute path="/splash" component={SplashContainer} />
        <ProtectedRoute path="/discover" component={UserDiscoverContainer} />
        <ProtectedRoute path="/upload" component={UploadContainer} />
        <AuthRoute path="/" component={SplashContainer} />
        <Redirect to="/" />
      </Switch>


    </div>
  )
}


export default App