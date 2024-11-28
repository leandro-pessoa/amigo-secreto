// tipagens externas
import { IParticipant } from '@/interfaces/IParticipant'

// ordena o array de forma crescente ou decrescente
export const sort = (array: IParticipant[], ord: string) => {
    const arrayForSort = [...array]

    if (ord === 'A-Z') {
        const ordenatedParticipants = arrayForSort.sort((a, b) => {
            if (a.name.localeCompare(b.name) > b.name.localeCompare(a.name)) {
                return 1
            }
            if (a.name.localeCompare(b.name) < b.name.localeCompare(b.name)) {
                return -1
            }
            return 0
        })
        return ordenatedParticipants
    }
    if (ord === 'Z-A') {
        const ordenatedParticipants = arrayForSort.sort((a, b) => {
            if (a.name.localeCompare(b.name) < b.name.localeCompare(a.name)) {
                return 1
            }
            if (a.name.localeCompare(b.name) > b.name.localeCompare(b.name)) {
                return -1
            }
            return 0
        })
        return ordenatedParticipants
    }
    return array
}
