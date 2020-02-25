import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as deepmerge from 'deepmerge'
import RuntimeModule from './runtimeModule'
import '../src/global.scss'

const defaultAppConfig = {
  app: {
    rootId: 'ice-container',
  },
  router: {
    type: 'hash',
  }
}

function createApp(customConfig) {
  const appConfig = deepmerge(defaultAppConfig, customConfig)
  const runtime = new RuntimeModule(appConfig)
  
  runtime.loadModlues([require('/Users/yitian/Documents/IDEAWorkspaces/IceWorkspaces/my-ice-start/node_modules/build-plugin-ice-core/lib/module.js'),require('/Users/yitian/Documents/IDEAWorkspaces/IceWorkspaces/my-ice-start/node_modules/build-plugin-ice-router/lib/module.js'),require('/Users/yitian/Documents/IDEAWorkspaces/IceWorkspaces/my-ice-start/node_modules/build-plugin-ice-store/lib/module.js'),require('/Users/yitian/Documents/IDEAWorkspaces/IceWorkspaces/my-ice-start/node_modules/build-plugin-ice-logger/lib/module.js'),require('/Users/yitian/Documents/IDEAWorkspaces/IceWorkspaces/my-ice-start/node_modules/build-plugin-ice-request/lib/module.js'),require('/Users/yitian/Documents/IDEAWorkspaces/IceWorkspaces/my-ice-start/node_modules/build-plugin-icestark/lib/module.js'),])
  

  renderApp(runtime).catch(err => {
    console.log('renderApp error:', err)
  })
}

function renderApp(runtime) {
  const { appConfig, modifyDOMRender } = runtime
  const { rootId, mountNode } = appConfig.app
  const appMountNode = mountNode || document.getElementById(rootId)
  const AppProvider = runtime.composeAppProvider();
  const AppRouter = runtime.getAppRouter();
  
  function App() {
    const appContent = (
      <AppRouter />
    );
    return AppProvider ? <AppProvider>{appContent}</AppProvider> : appContent;
  }

  if (modifyDOMRender) {
    return modifyDOMRender({ App, appMountNode })
  } else {
    return new Promise(resolve => {
      ReactDOM.render(<App />, appMountNode, () => {
        resolve()
      })
    })
  }
}

export { createApp }
