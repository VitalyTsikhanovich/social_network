import react from 'react'
import {ActionsType, UsersType} from "../redux/users-reducer";


export let updateObjectInArray = (items: Array<UsersType>, itemId: string, objPropName: [], newObjProps: ActionsType )=>{
   return  items.map(u => {
        // @ts-ignore
       if (u[objPropName] === itemId) {
            return   {...u, ...newObjProps}

        }
        return u
    })
}