import { Routes, Route, Navigate} from 'react-router-dom';
import Container from '@mui/material/Container';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import AppBar from 'components/AppBar/AppBar';
import Footer from "components/Footer/Footer"
import authOperations from 'redux/auth/auth-operations';
import { authSelectors } from 'redux/auth';
import Loader from 'components/Loader/Loader';


const HomePage = lazy(() => import('pages/HomePage/HomePage' /* webpackChunkName: "home-page"*/))
const DragonsPage = lazy(() => import('pages/DragonsPage/DragonsPage' /* webpackChunkName: "dragons-page"*/))
const DragonInfoPage = lazy(() => import('pages/DragonInfoPage/DragonInfoPage' /* webpackChunkName: "dragons-info-page"*/))
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage' /* webpackChunkName: "register-page"*/))
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage' /* webpackChunkName: "login-page"*/))
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage' /* webpackChunkName: "notFound-page"*/))

export default function App() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    const isFetchingCurrentUser = (authSelectors.getIsFetchingCurrentUser)

    useEffect(() => {
        dispatch(authOperations.fetchCurrentUser())
    }, [dispatch])

    return (
        isFetchingCurrentUser && (
            <Suspense fallback={<Loader/>}>

            <Container fixed>
                <AppBar/>
                <Routes>
                    <Route index path="/" element={isLoggedIn ? <Navigate to="/dragons"/> : <HomePage/>}/>
                    <Route index path="/dragons" element={isLoggedIn ? <DragonsPage/> : <HomePage/>}/>
                    <Route path="/dragons/:dragonId" element={isLoggedIn ? <DragonInfoPage/> : <HomePage/>}/>
                    <Route path="/register" element={isLoggedIn ? <Navigate to="/dragons"/> : <RegisterPage/>}/>
                    <Route path="/login" element={isLoggedIn ? <Navigate to="/dragons"/> : <LoginPage/>}/>
                    <Route path='*' element={isLoggedIn ? <Navigate to="/dragons"/> : <NotFoundPage/>}/>
                </Routes>
                <Footer />
            </Container>
        </Suspense>
        )
    )
} 