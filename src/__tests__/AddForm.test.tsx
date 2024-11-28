// funções
import { fireEvent, render, screen } from '@testing-library/react'

// states globais
import { selectParticipants } from '@/app/reducers/participantReducer'

// componentes
import AddForm from '../pages/Participants/AddForm'
import ReduxProvider from '@/components/ReduxProvider'
import DefaultPage from '@/pages/DefaultPage'
import { ToastContainer } from 'react-toastify'

vi.mock('@/app/reducers/participantReducer', async (importOriginal) => {
    const actual = await importOriginal()
    return {
        ...(actual as object),
        selectParticipants: vi.fn(),
    }
})

describe('comportamento do AddForm.tsx', () => {
    beforeEach(() => {
        vi.mocked(selectParticipants).mockReturnValue([
            { id: '1', name: 'Leandro' },
        ])
    })

    test('nenhum participante pode ser adicionado quando o input estiver vazio', () => {
        render(
            <ReduxProvider>
                <AddForm />
            </ReduxProvider>,
        )

        const input = screen.getByPlaceholderText('Inserir participante')
        const button = screen.getByRole('button')

        fireEvent.change(input, {
            target: {
                value: '',
            },
        })
        fireEvent.click(button)

        expect(button).toBeDisabled()
    })

    test('adicionar um novo participante caso o input esteja preenchido', () => {
        render(
            <ReduxProvider>
                <AddForm />
            </ReduxProvider>,
        )

        const input = screen.getByPlaceholderText('Inserir participante')
        const button = screen.getByRole('button')

        fireEvent.change(input, {
            target: {
                value: 'Lucas',
            },
        })
        fireEvent.click(button)

        expect(selectParticipants).toHaveLength(2)
    })

    test('nomes duplicados não podem ser inseridos na lista', async () => {
        render(
            <ReduxProvider>
                <ToastContainer />
                <AddForm />
                <DefaultPage />
            </ReduxProvider>,
        )

        const input = screen.getByPlaceholderText('Inserir participante')
        const button = screen.getByRole('button')

        fireEvent.change(input, {
            target: {
                value: 'Leandro',
            },
        })
        fireEvent.click(button)

        expect(
            await screen.findByText('O nome Leandro já foi adicionado.'),
        ).toBeInTheDocument()
    })
})
