const initialState = false

export const clickSideBarReducer = (state=initialState, action) =>{
  switch (action.type){
    case "SET_CLICK":
      return action.payload
      default:
        return state
  }
}