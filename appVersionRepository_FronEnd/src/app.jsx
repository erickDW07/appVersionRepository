import { BrowserRouter } from "react-router-dom"
import { RouterApp } from "./router/routerApp"
import { Provider } from "react-redux"
import { store } from "./store/store"


export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <RouterApp />
            </BrowserRouter>
        </Provider>
    )
}