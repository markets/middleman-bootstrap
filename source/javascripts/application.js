import { RalixApp } from 'ralix'
import * as bootstrap from 'bootstrap'

import AppCtrl from './controllers/app'

const App = new RalixApp({
  routes: {
    '/.*': AppCtrl
  },
})

App.start()
