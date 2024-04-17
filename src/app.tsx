import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
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
import { SamplePage } from './pages/sample';
import { InnerTabs } from './pages/tabs/inner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

setupIonicReact();

export const queryClient = new QueryClient()

const App = () => {

  return (
    <QueryClientProvider client={ queryClient }>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Redirect path='/' to="/sample" />
            <Route exact path="/sample">
              <SamplePage />
            </Route>
            <Route path="/inner/:page">
              <InnerTabs />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </QueryClientProvider>
  )
}


export default App