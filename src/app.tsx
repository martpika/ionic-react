import { Redirect, Route } from 'react-router-dom';
import { 
  IonApp, 
  IonRouterOutlet, 
  setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Tailwind styles */
import './theme/variables.css'
import './theme/tailwind.css'
import { AccountPage } from './pages/account';
import { FakePage } from './pages/fake';

setupIonicReact();


const App = () => {

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Redirect path='/' to="/account" />
          <Route exact path="/account">
            <AccountPage />
          </Route>
          <Route exact path="/login">
            <FakePage />
          </Route>
          <Route exact path="/toc">
            <FakePage />
          </Route>
          <Route exact path="/privacy-policy">
            <FakePage />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}


export default App