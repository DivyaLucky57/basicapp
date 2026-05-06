
import {users} from "../data"

export const  initial={
    users:users,
    sort:"asc",
    search:""

}


export function tablereducer(state,action){
    switch(action.type){
        case "searching":
            return {...state,search:action.payload }
       
       case "sort":
        return {...state, sort:action.payload}
        default:
            return state            

    }

}