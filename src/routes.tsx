import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PaginaBase } from "./components/paginaBase";
import { Home } from "./components/paginaHome";
import { PaginaProduto } from "./components/paginaProduto";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="*"
                    element={
                        <PaginaBase >
                            <Routes>
                                <Route index element={<Home />} />
                                <Route path='produto/:id' element={<PaginaProduto />} />
                            </Routes>
                        </PaginaBase>
                    }
                >
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
