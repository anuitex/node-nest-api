// Enums
import { UserType } from 'app/shared/enums';

export interface User {
    id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    userRole: UserType | string;
    token?: any;
}
