// action creater

export const updateLoader=(value)=>{
    return{
        type:"UPDATE_LOADER",
        value,
    }
    }
    export const updateError=(value)=>{
        return{
            type:"UPDATE_ERROR",
            value,
        }
    }
    export const updateData=(value)=>{
        return{
            type:"UPDATE_DATA",
            value,
        }
    }