import { IParticipant } from '@/interfaces/IParticipant'

const setStorage = (value: IParticipant | IParticipant[]) => {
    localStorage.setItem('participants', JSON.stringify(value))
}

export default setStorage
