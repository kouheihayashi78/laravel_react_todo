import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TaskPage from "./pages/tasks";
import LoginPage from "./pages/login";
import HelpPage from "./pages/help";

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">ホーム</Link>
                        </li>
                        <li>
                            <Link to="/help">ヘルプ</Link>
                        </li>
                        <li>
                            <Link to="/login">ログイン</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/help" element={<HelpPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/" element={<TaskPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default Router;
