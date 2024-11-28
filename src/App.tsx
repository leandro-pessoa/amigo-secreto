// componentes
import { GlobalStyles } from './components/GlobalStyles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultPage from './pages/DefaultPage'
import Participants from './pages/Participants'
import Draw from './pages/Draw'
import NotFound from './pages/NotFound'
import { Provider } from 'react-redux'
import { setupStore } from './app/store'

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={setupStore()}>
                <GlobalStyles />
                <Routes>
                    <Route path='/' element={<DefaultPage />}>
                        <Route index element={<Participants />} />
                        <Route path='sortear' element={<Draw />} />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </Provider>
        </BrowserRouter>
    )
}

export default App
