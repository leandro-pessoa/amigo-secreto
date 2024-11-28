// funções
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { participants } from '@/utils/participants'
import { sort } from '@/utils/sort'

// componentes
import { StyledDiv } from './styles'
import ParticipantItem from './ParticipantItem'
import Filters from './Filters'
import Container from '@/components/Container'
import SubTitle from '@/components/SubTitle'
import ReloadButton from '@/components/ReloadButton'

// actions
import { changeModalType, toggleModalDisplay } from '@/app/reducers/appReducer'
import { setParticipants, showAll } from '@/app/reducers/participantReducer'

// states globais
import { selectParticipants } from '@/app/reducers/participantReducer'
import { selectSelectedOption } from '@/app/reducers/appReducer'

const PaticipantsList = () => {
    // states globais
    const participantsState = useAppSelector(selectParticipants)
    const selectedOption = useAppSelector(selectSelectedOption)
    const dispatch = useAppDispatch()

    const removeAllModalHandle = () => {
        dispatch(changeModalType('removeAll'))
        dispatch(toggleModalDisplay(true))
    }

    const showAllHandle = () => {
        dispatch(showAll())
        dispatch(setParticipants(sort(participants(), selectedOption)))
    }

    return (
        <StyledDiv>
            {participantsState.length >= 1 ? (
                <>
                    <SubTitle>Participantes</SubTitle>
                    <Filters />
                    <Container>
                        <div className='list__btn-container'>
                            {participants().length ===
                            participantsState.length ? (
                                <></>
                            ) : (
                                <ReloadButton
                                    onClick={() => showAllHandle()}
                                    size={26}
                                    className='btn-container__show-all'
                                />
                            )}
                            <button
                                onClick={() => removeAllModalHandle()}
                                className='btn-container__remove-all'
                            >
                                Remover todos
                            </button>
                        </div>
                        <ul className='participants__list'>
                            {participantsState.map((participant) => (
                                <ParticipantItem
                                    key={participant.id}
                                    {...participant}
                                />
                            ))}
                        </ul>
                    </Container>
                </>
            ) : (
                <SubTitle>Não há participantes na lista</SubTitle>
            )}
        </StyledDiv>
    )
}

export default PaticipantsList
