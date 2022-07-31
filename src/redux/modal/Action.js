import { HIDE_GROUP_MODAL, HIDE_MODAL, HIDE_SUBTASK_MODAL, HIDE_TASK_MODAL, SHOW_GROUP_MODAL, SHOW_SUBTASK_MODAL, SHOW_TASK_MODAL } from "./Types"

export const showGroupMod = () => {
    return {
        type:SHOW_GROUP_MODAL,
        payload:1
    }
}

export const hideGroupMod = () => {
    return {
        type:HIDE_GROUP_MODAL
    }
}

export const showTaskMod = () => {
    return {
        type:SHOW_TASK_MODAL,
        payload:3
    }
}

export const hideTaskMod = () => {
    return {
        type:HIDE_TASK_MODAL
    }
}

export const showSubtaskMod = () => {
    return {
        type:SHOW_SUBTASK_MODAL,
        payload:2
    }
}

export const hideSubtaskMod = () => {
    return {
        type:HIDE_SUBTASK_MODAL
    }
}

export const hideModal = () => {
    return {
        type:HIDE_MODAL
    }
}