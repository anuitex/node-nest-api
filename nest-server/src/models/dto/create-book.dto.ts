export class CreateBookDto {
    id: string;
    readonly name: string;
    readonly description: string;
    readonly authors: any[];
    readonly type: any;
    readonly outOfLibrary: boolean;
}
