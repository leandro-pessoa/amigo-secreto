// tipagens externas
import { IParticipant } from '@/interfaces/IParticipant'

// busca os participantes do local storage
export const participants = (): IParticipant[] => {
    const getStorage = localStorage.getItem('participants')
    return getStorage !== null ? JSON.parse(getStorage) : []
}
