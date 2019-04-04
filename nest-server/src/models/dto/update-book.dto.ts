export class UpdateBookDto {
    readonly name: string;
    readonly description: string;
    readonly authors: any[];
    readonly type: any;
    readonly outOfLibrary: boolean;
}
