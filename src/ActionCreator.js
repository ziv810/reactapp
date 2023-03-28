import { type } from "@testing-library/user-event/dist/type"


export function addpost(name, body) {

    return {

        type: 'addpost',
        payload: {
            name,
            body
        }
    }
}


export function editpost(id, body) {

    return {
        type: 'editpost',
        payload: {
            id,
            body
        }
    }
}


export const deletPost = (id) => {

    return {
        type: 'deletpost',
        payload: {
            id
        }
    }
}