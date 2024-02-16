import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/main'
import Header from './components/Header'
import ArticlePage from './pages/product'
import { StoreProvider } from './store/store'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
    return (
        <>
            <Provider store={store}>
                <StoreProvider>
                    <BrowserRouter>
                        <Header />
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route
                                path="/product/:id"
                                element={<ArticlePage />}
                            />
                        </Routes>
                    </BrowserRouter>
                </StoreProvider>
            </Provider>
        </>
    )
}

export default App
