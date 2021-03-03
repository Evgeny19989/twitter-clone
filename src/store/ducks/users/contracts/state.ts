import { LoadingStatus } from "../../tweets/contracts/state";
import { User } from "../../user/contracts/state";

export interface UsersState {
    items: User[];
    LoadingStatus: LoadingStatus;
}
