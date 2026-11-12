export interface CodeSnippetType {
  id?: string;
  title?: string;
  language?: string;
  codeContent?: string;
  lineCount?: number;
  isFavorite?: boolean;
  createdAt?: Date;
}
