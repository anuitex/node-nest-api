// Enums
import { UserType } from 'app/shared/enums';

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    userRole: UserType;
}
