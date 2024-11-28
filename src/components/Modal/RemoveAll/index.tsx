// funções
import { useAppDispatch } from '@/app/hooks'
import { warning } from '@/utils/feedbacks'
import { useReloadDrawn } from '@/app/hooks/useReloadDrawn'

// componentes
import Modal from '..'

// actions
import { removeAll } from '@/app/reducers/participantReducer'
import { toggleModalDisplay } from '@/app/reducers/appReducer'

const RemoveAll = () => {
    // states globais
    const dispatch = useAppDispatch()

    // constantes
    const reloadDrawn = useReloadDrawn()

    // handle
    const removeAllHandle = () => {
        dispatch(removeAll())
        dispatch(toggleModalDisplay(false))
        warning('Todos os participantes foram deletados!')
        reloadDrawn()
    }

    return (
        <Modal
            cancelTxt='Não'
            acceptTxt='Sim'
            title='Remover todos os participantes'
            func={() => removeAllHandle()}
        >
            <p>Tem certeza que deseja remover todos os participantes?</p>
        </Modal>
    )
}

export default RemoveAll
