import React, { useCallback, useMemo } from 'react'
import { guestGroups } from '../assets/data/static/guests'
export interface State {
    guests: any[]
}

const initialState = {
    guests: guestGroups,
}

type Action = {
    type: 'SET_GUESTS'
    payload: any
}

export const GuestContext = React.createContext<State | any>(initialState)

function guestReducer(state: State, action: Action) {
    switch (action.type) {
        case 'SET_GUESTS': {
            return {
                ...state,
                guests: action.payload,
            }
        }
    }
}

export const GuestProvider: React.FC<{ children: React.ReactNode }> = (
    props
) => {
    const [state, dispatch] = React.useReducer(guestReducer, initialState)
    const { guests } = state

    const handleChangeStatus = useCallback(
        (groupId: number, guestId: number, field: string, value: number) => {
            const newGroup = [...guests]
            const newGuest = newGroup[groupId]['guests'][guestId]
            newGuest[field] = value
            dispatch({
                type: 'SET_GUESTS',
                payload: newGroup,
            })
        },
        [guests]
    )

    const handleDeleteGroup = useCallback(
        (groupId: number) => {
            let newGroups = [...guests]
            newGroups = newGroups.filter((group) => group.id !== groupId)
            dispatch({
                type: 'SET_GUESTS',
                payload: newGroups,
            })
        },
        [guests]
    )

    const handleDeleteGuest = (groupId: number, guestId: React.Key) => {
        const newGroups = [...guests]
        newGroups[groupId]['guests'].splice(guestId, 1)
        dispatch({
            type: 'SET_GUESTS',
            payload: newGroups,
        })
    }
    const value = useMemo(
        () => ({
            ...state,
            handleChangeStatus,
            handleDeleteGroup,
            handleDeleteGuest,
        }),
        [state]
    )
    return <GuestContext.Provider value={value} {...props} />
}

export const useGuest = () => {
    const context = React.useContext(GuestContext)
    if (context === undefined) {
        throw new Error('useGuest must be used within a GuestProvider')
    }
    return context
}

const ManagedGuestContext: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return <GuestProvider>{children}</GuestProvider>
}

export default ManagedGuestContext
