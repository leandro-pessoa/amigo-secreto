// funções
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { error, success } from '@/utils/feedbacks'

// componentes
import Button from '@/components/Button'

// actions
import {
    addParticipant,
    removeDrawnParticipant,
} from '@/app/reducers/drawReducer'
import { changeModalType, toggleModalDisplay } from '@/app/reducers/appReducer'

// states globais
import { selectToBeDrawn } from '@/app/reducers/drawReducer'
import { selectParticipants } from '@/app/reducers/participantReducer'

// ícones
import { MdCasino } from 'react-icons/md'

const DrawBtn = () => {
    // states globais
    const dispatch = useAppDispatch()
    const toBeDrawn = useAppSelector(selectToBeDrawn)
    const participantsState = useAppSelector(selectParticipants)

    // constantes
    const insuficient = participantsState.length <= 1 || !participantsState

    // realiza todo o mecanismo de sorteio
    const shuffle = () => {
        // caso não haja participantes na lista ou não tenha 2 ou mais participantes
        if (insuficient) {
            error('Adicione pelo menos dois participantes para sortear.')
            return
        }

        // caso todos os participantes já foram sorteados e o usuário tente sortear sem reiniciar
        if (toBeDrawn.length === 0) {
            error('Todos os participantes já foram sorteados.')
            return
        }

        // abre o modal
        dispatch(changeModalType('drawn'))
        dispatch(toggleModalDisplay(true))

        // constantes utilizadas
        const index = Math.floor(Math.random() * toBeDrawn.length)
        const drawParticipant = toBeDrawn[index]

        // retira o elemento sorteado da lista
        dispatch(removeDrawnParticipant(drawParticipant.id))

        // adiciona o elemento sorteado à lista de sorteados
        dispatch(addParticipant(drawParticipant))

        // ao sortear o último participante
        if (toBeDrawn.length === 1) {
            success('Todos os participantes foram sorteados!')
        }
    }

    return (
        <Button onClick={() => shuffle()}>
            <MdCasino size={30} />
            Sortear
        </Button>
    )
}

export default DrawBtn
