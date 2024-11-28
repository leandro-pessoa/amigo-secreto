// funções
import { useAppDispatch } from '@/app/hooks'

// componentes
import { StyledDiv } from './styles'
import Overlay from '../Overlay'

// tipagens externas
import { ReactElement } from 'react'

// actions
import { toggleModalDisplay } from '@/app/reducers/appReducer'

// tipagem dos props
interface ModalProps {
    title: ReactElement | ReactElement[] | string
    children: ReactElement | ReactElement[] | string
    cancelTxt: string
    acceptTxt?: string
    func: () => void
    actionBtnDisplay?: boolean
}

const Modal = ({
    title,
    children,
    cancelTxt,
    acceptTxt,
    func,
    actionBtnDisplay = true,
}: ModalProps) => {
    // state
    const dispatch = useAppDispatch()

    return (
        <Overlay>
            <StyledDiv data-testid='modal'>
                <h2>{title}</h2>
                <div className='modal__content-container'>{children}</div>
                <div className='modal__btn-container'>
                    <button
                        onClick={() => dispatch(toggleModalDisplay(false))}
                        className='btn--cancel'
                        data-testid='cancel-btn'
                    >
                        {cancelTxt}
                    </button>
                    {actionBtnDisplay && (
                        <button
                            onClick={() => func()}
                            className='btn--action'
                            data-testid='action-btn'
                        >
                            {acceptTxt}
                        </button>
                    )}
                </div>
            </StyledDiv>
        </Overlay>
    )
}

export default Modal
