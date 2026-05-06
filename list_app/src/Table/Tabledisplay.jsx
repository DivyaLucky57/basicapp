import { useEffect, useCallback, useMemo, useRef, useReducer } from "react";
import { initial, tablereducer } from "../reducer/tablereducer";
import "./Tabledisplay.css"




export default function TableRedering() {
    const [state, dispatch] = useReducer(tablereducer, initial)
    function searching(e) {
        dispatch({ type: "searching", payload: e.target.value })
        console.log("what is the taregt value issssssssss", e.target.value)

    }

    

    const process_data = state.users.filter(user => {
        const search = state.search?.toLowerCase() || "";


        return user?.name?.toLowerCase().includes(search) 
    });





    return (
        <div className="main_layout">
            <label> serach
                <input
                    value={state.search}
                    onChange={(e) => searching(e)}
                />
            </label>

            <table className="main_table" style={{ borderCollapse: "collapse" }}>
                <thead>
                    <tr >
                        <th style={{ border: "1px solid black" }}>name</th>
                        <th style={{ border: "1px solid black" }} >role</th>
                        <th style={{ border: "1px solid black" }}>age</th>
                    </tr>

                </thead>
                <tbody>

                    {
                        process_data?.map(y => (
                            <tr key={y.id}>
                                <td style={{ border: "1px solid black" }} >{y.name}</td>
                                <td style={{ border: "1px solid black" }} >{y.role}</td>
                                <td style={{ border: "1px solid black" }} >{y.age}</td>
                            </tr>
                        )
                        )
                    }
                </tbody>

            </table >
        </div>

    );
}