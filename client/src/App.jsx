import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectRoutes from './components/auth/ProtectRoutes';
import { LayoutLoader } from './components/layout/Loaders';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Chat = lazy(() => import('./pages/Chat'));
const Groups = lazy(() => import('./pages/Groups'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

let user = true;

const App = () => {
    return (
        <Router>
            <Suspense fallback={<LayoutLoader/>}>
                <Routes>
                    {/* Public Route - Accessible without authentication */}
                    <Route path="/login" element={
                      <ProtectRoutes user={!user} redirect="/">
                        <Login />
                      </ProtectRoutes>
                    } />

                    {/* Protected Routes - Require Authentication */}
                    <Route element={<ProtectRoutes user={ user } />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<h1>About</h1>} />
                        <Route path="/chat/:chatId" element={<Chat />} />
                        <Route path="/groups" element={<Groups />} />
                    </Route>

                    <Route path="*" element={<PageNotFound/>} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;
