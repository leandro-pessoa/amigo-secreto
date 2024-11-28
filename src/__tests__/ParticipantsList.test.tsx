// funções e tipagens
import { render, screen } from '@testing-library/react'
import { participants } from '@/utils/participants'

// states globais
import { selectParticipants } from '@/app/reducers/participantReducer'

// componentes
import ReduxProvider from '@/components/ReduxProvider'
import PaticipantsList from '../pages/Participants/ParticipantsList'

vi.mock('@/app/reducers/participantReducer', async (importOriginal) => {
    const actual = await importOriginal()
    return {
        ...(actual as object),
        selectParticipants: vi.fn(),
    }
})

describe('comportamento do PersonList.tsx', () => {
    beforeEach(() => {
        vi.mocked(selectParticipants).mockReturnValue(participants())
    })
    test('a lista deve inicializar com os valores do localStoarage', () => {
        render(
            <ReduxProvider>
                <PaticipantsList />
            </ReduxProvider>,
        )

        const items = screen.queryAllByRole('listitem')

        expect(items).toHaveLength(participants().length)
    })
})

describe('uma lista preenchida de participantes', () => {
    const participantes = [
        { id: '1', name: 'Leandro' },
        { id: '2', name: 'Lucas' },
    ]
    beforeEach(() => {
        vi.mocked(selectParticipants).mockReturnValue(participantes)
    })

    test('deve ser renderizada com os elementos', () => {
        render(
            <ReduxProvider>
                <PaticipantsList />
            </ReduxProvider>,
        )

        const items = screen.queryAllByRole('listitem')

        expect(items).toHaveLength(participantes.length)
    })
})
