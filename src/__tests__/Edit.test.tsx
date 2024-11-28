// funções
import { screen, render, fireEvent } from '@testing-library/react'

// states globais
import { selectParticipants } from '@/app/reducers/participantReducer'

// componentes
import Edit from '../components/Modal/Edit'
import ReduxProvider from '@/components/ReduxProvider'
import { ToastContainer } from 'react-toastify'

vi.mock('@/app/reducers/participantReducer', async (importOriginal) => {
    const actual = await importOriginal()
    return {
        ...(actual as object),
        selectParticipants: vi.fn(),
    }
})

describe('o input de edição deve', () => {
    beforeEach(() => {
        vi.mocked(selectParticipants).mockReturnValue([
            { id: '1', name: 'Leandr' },
        ])
    })

    test('estar inicialmente vazio', () => {
        render(
            <ReduxProvider>
                <Edit />
            </ReduxProvider>,
        )

        const input = screen.getByPlaceholderText('Digite aqui')

        expect(input).toHaveValue('')
    })

    test('estar preenchido e com 3 ou mais caracteres para ser aceito', async () => {
        render(
            <ReduxProvider>
                <ToastContainer />
                <Edit />
            </ReduxProvider>,
        )

        const input = screen.getByPlaceholderText('Digite aqui')
        const button = screen.getByTestId('action-btn')
        fireEvent.change(input, {
            target: {
                value: 'aa',
            },
        })
        fireEvent.click(button)

        expect(
            await screen.findByText('Um nome deve conter 3 ou mais letras.'),
        ).toBeInTheDocument()
    })
})

// describe('a acao de edicao e composta', () => {
//     test('pelo button que engatilha a acao', () => {
//         render(
//             <ReduxProvider>
//                 <ToastContainer />
//                 <Edit />
//             </ReduxProvider>
//         )

//         const button = screen.getByTestId('edit-btn')

//     })
// })
