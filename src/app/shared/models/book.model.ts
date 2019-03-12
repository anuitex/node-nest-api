// Models
import { Author } from 'app/shared/models';
// Enums
import { BookType } from 'app/shared/enums';

export class Book {
  id: number;
  name: string;
  description: string;
  authors: Author[];
  type: BookType;
  outOfLibrary: boolean;
}
