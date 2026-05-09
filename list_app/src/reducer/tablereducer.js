import { users } from "../data";

if (!localStorage.getItem("users")) {
   localStorage.setItem(
      "users",
      JSON.stringify(users)
   );
}

export const initial = {
   users: JSON.parse(localStorage.getItem("users")),
   sort: "asc",
   search: ""
}


export function tablereducer(state,action){
    switch(action.type){
        case "searching":
            return {...state,search:action.payload }
       
       case "sort":
        return {...state, sort:action.payload}
        case "add":
            return {...state, users:[...state.users,action.payload]}
        case "delete":
            return {...state,users:action.payload}    
        default:
            return state            

    }

}