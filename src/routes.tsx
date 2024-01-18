import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { PaginaBase } from "./components/paginaBase";
import { Home } from "./components/paginaHome";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PaginaBase>
                            <Outlet />
                        </PaginaBase>
                    }
                >
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
