// funções
import { useAppSelector } from '@/app/hooks'

// componentes
import Edit from '../Edit'
import Remove from '../Remove'
import RemoveAll from '../RemoveAll'
import ReloadDraw from '../ReloadDraw'
import Drawn from '../Drawn'

// states globais
import { selectModalType } from '@/app/reducers/appReducer'

const RenderModal = () => {
    // states globais
    const modalType = useAppSelector(selectModalType)

    return (
        <>
            {modalType === 'edit' && <Edit />}
            {modalType === 'remove' && <Remove />}
            {modalType === 'removeAll' && <RemoveAll />}
            {modalType === 'reloadDraw' && <ReloadDraw />}
            {modalType === 'drawn' && <Drawn />}
        </>
    )
}

export default RenderModal
