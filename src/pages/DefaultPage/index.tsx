// componentes
import Header from '@/components/Header'
import { StyledMain } from './styles'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Footer from '@/components/Footer'
import RenderModal from '@/components/Modal/RenderModal'
import ScrollToTop from '@/components/ScrollToTop'

// estilos dos toastify
import 'react-toastify/dist/ReactToastify.css'

const DefaultPage = () => {
    return (
        <>
            <ToastContainer />
            <ScrollToTop />
            <Header />
            <StyledMain>
                <Outlet />
                <RenderModal />
            </StyledMain>
            <Footer />
        </>
    )
}

export default DefaultPage
