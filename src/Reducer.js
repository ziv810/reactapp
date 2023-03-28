
let id = 0;

export default function reducer(state = [], action) {


    switch (action.type) {

        case 'addpost':

            return [...state, {

                id: ++id,
                name: action.payload.name,
                body: action.payload.body
            }]

        case 'editpost':

            let temp = [...state]

            temp.forEach((val) => {
                if (val.id == action.payload.id) {
                    val.body = action.payload.body
                }
            })
            return [...temp]


        case 'deletpost':

            return state.filter((val) => (
                val.id != action.payload.id
            ))



        default: return state
    }

}