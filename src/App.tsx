import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { store } from './store'
import { Provider } from 'react-redux'
import MainPage from './pages/main'
import Header from './components/Header'
import ArticlePage from './pages/product'

function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/product/:id" element={<ArticlePage />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    )
}

export default App
