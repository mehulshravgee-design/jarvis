export interface TaskDirectiveType {
  id?: number;
  title?: string;
  priority?: string;
  isCompleted?: boolean;
  estimatedMinutes?: number;
  dueDate?: Date;
}
