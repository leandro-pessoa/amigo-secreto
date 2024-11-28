// funções
import { useAppDispatch, useAppSelector } from '@/app/hooks'

// componentes
import { StyledUl } from './styles'
import SubTitle from '@/components/SubTitle'
import ReloadButton from '@/components/ReloadButton'

// actions
import { changeModalType, toggleModalDisplay } from '@/app/reducers/appReducer'

// states globais
import { selectDrawnList } from '@/app/reducers/drawReducer'

const DrawnList = () => {
    // states globais
    const drawnList = useAppSelector(selectDrawnList)
    const dispatch = useAppDispatch()

    const modalHandle = () => {
        dispatch(changeModalType('reloadDraw'))
        dispatch(toggleModalDisplay(true))
    }

    return (
        <>
            {drawnList.length >= 1 ? (
                <>
                    <SubTitle>Sorteados por ordem</SubTitle>
                    <ReloadButton
                        onClick={() => modalHandle()}
                        size={26}
                        className='draw__reload-button'
                    />
                    <StyledUl>
                        {drawnList.map((participant, index) => {
                            return (
                                <li key={participant.id}>
                                    <span>{index++ + 1}°</span>
                                    {participant.name}
                                </li>
                            )
                        })}
                    </StyledUl>
                </>
            ) : (
                <SubTitle>Nenhum participante foi sorteado</SubTitle>
            )}
        </>
    )
}

export default DrawnList
