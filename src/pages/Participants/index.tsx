// componentes
import AddForm from '@/pages/Participants/AddForm'
import Title from '@/components/Title'
import PaticipantsList from '@/pages/Participants/ParticipantsList'
import BtnImgContainer from './BtnImgContainer'

const Participants = () => {
    return (
        <>
            <Title>Vamos começar!</Title>
            <AddForm />
            <PaticipantsList />
            <BtnImgContainer />
        </>
    )
}

export default Participants
