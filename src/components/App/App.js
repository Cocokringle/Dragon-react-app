import { Routes, Route } from 'react-router-dom';
import Container from '../Container/Container'
import { useEffect, Suspense, lazy } from 'react';
import AppBar from 'components/AppBar/AppBar';
import Footer from "components/Footer/Footer"

const HomePage = lazy(() => import('pages/HomePage/HomePage' /* webpackChunkName: "home-page"*/))
const DragonsPage = lazy(() => import('pages/DragonsPage/DragonsPage' /* webpackChunkName: "dragons-page"*/))
const DragonInfoPage = lazy(() => import('pages/DragonInfoPage/DragonInfoPage' /* webpackChunkName: "dragons-info-page"*/))
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage' /* webpackChunkName: "notFound-page"*/))

export default function App() {
    return (
        <Suspense fallback={'тут будет лоадер'}>
            <Container>
                <AppBar/>
                <Routes>
                    <Route index path="/" element={<HomePage/>}></Route>
                    <Route index path="/dragons" element={<DragonsPage />}></Route>
                    <Route path="/dragons/:dragonId" element={<DragonInfoPage />}></Route>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
                <Footer />
            </Container>
        </Suspense>
    )
} 