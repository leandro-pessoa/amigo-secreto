// funções
import { participants } from '@/utils/participants'
import { useAppSelector } from '@/app/hooks'

// states globais
import { selectDrawnList } from '@/app/reducers/drawReducer'

// componentes
import Modal from '..'

const Drawn = () => {
    // states globais
    const drawnList = useAppSelector(selectDrawnList)

    const modalTitle =
        drawnList.length === participants().length
            ? 'E o último sorteado é:'
            : `E o ${drawnList.length}° sorteado é:`

    return (
        <Modal
            title={modalTitle}
            cancelTxt='Ok'
            func={() => {}}
            actionBtnDisplay={false}
        >
            <h3 data-testid='drawn-modal__subtitle'>
                {drawnList.length < 1
                    ? ''
                    : drawnList[drawnList.length - 1].name}
            </h3>
        </Modal>
    )
}

export default Drawn
