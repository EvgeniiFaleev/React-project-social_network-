import {DispatchType, ThunkType} from "./root-reducer";

export {store} from "./store";
export type AppThunkType<ReturnType = void> = ThunkType<ReturnType>;
export type TDispatch = DispatchType;