// funções
import { useAppDispatch } from '@/app/hooks'

// componentes
import Modal from '..'

// actions
import { emptyList, reloadToBeDrawn } from '@/app/reducers/drawReducer'
import { toggleModalDisplay } from '@/app/reducers/appReducer'

const ReloadDraw = () => {
    // states globais
    const dispatch = useAppDispatch()

    // handle
    const reloadHandle = () => {
        dispatch(emptyList())
        dispatch(reloadToBeDrawn())
        dispatch(toggleModalDisplay(false))
    }

    return (
        <Modal
            title='Reiniciar sorteio'
            acceptTxt='Sim'
            cancelTxt='Não'
            func={() => reloadHandle()}
        >
            <p data-testid='reload-draw-modal'>Deseja reiniciar o sorteio?</p>
        </Modal>
    )
}

export default ReloadDraw
