import { useEffect, useCallback, useMemo, useRef, useReducer, useState } from "react";
import { initial, tablereducer } from "../reducer/tablereducer";
import "./Tabledisplay.css"




export default function TableRedering() {
    const [state, dispatch] = useReducer(tablereducer, initial)

    function searching(e) {
        dispatch({ type: "searching", payload: e.target.value })
        console.log("what is the taregt value issssssssss", e.target.value)

    }
    const [formdata, Setformdata] = useState(
        {
            name: "",
            age: "",
            role: ""

        }
    );



    const process_data = state.users.filter(user => {
        const search = state.search?.toLowerCase() || "";


        return user?.name?.toLowerCase().includes(search)
    });

    function formsubmit(e) {
        e.preventDefault();
        dispatch(
            {
                type: "add", payload: formdata
            }
        );

    }
    function deleting(e) {
        e.preventDefault();
        const updatedUsers = state.users.slice(0, -1);
        dispatch(
            {
                type: "delete", payload: updatedUsers
            }
        )


    }

    useEffect(() => {
        localStorage.setItem(
            "users",
            JSON.stringify(state.users)
        );
    }, [state.users]);




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
            <form>
                <label > enter you name
                    <input value={formdata.name}
                        onChange={(e) => {
                            Setformdata(
                                {
                                    ...formdata, name: e.target.value
                                }
                            );
                        }} />

                </label>


                <label> enter age
                    <input
                        value={formdata.age}
                        onChange={(e) => {
                            Setformdata(

                                {
                                    ...formdata, age: e.target.value
                                }
                            );
                        }} />
                </label>
                <label>enter role
                    <input value={formdata.role}
                        onChange={(e) => {
                            Setformdata({ ...formdata, role: e.target.value })
                        }}

                    />

                </label>
                <button type="button" onClick={formsubmit}>add</button>
                <button type="button" onClick={deleting}>delete</button>



            </form>


        </div >

    );
}