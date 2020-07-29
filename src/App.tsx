import React, { Suspense, lazy } from 'react'

import GlobalStyles from 'styles/global'

const Main = lazy(() => import('components/Main'))

const App = () => (
  <Suspense fallback={<div>Carregando...</div>}>
    <GlobalStyles />
    <Main />
  </Suspense>
)

export default App
