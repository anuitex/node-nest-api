// Models
import { Author } from 'app/shared/models';
// Enums
import { BookType } from 'app/shared/enums';

export interface Book {
  id: number;
  name: string;
  description: string;
  authors: Author[];
  type: BookType;
  outOfLibrary: boolean;
}
