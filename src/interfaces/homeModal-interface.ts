import { Feeling } from "./feeling-interface";

export interface HomeModalInterface {
    setOpenModal(): void,
    feelingSelected: Feeling | undefined
}