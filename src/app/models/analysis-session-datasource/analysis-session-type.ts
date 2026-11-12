export interface AnalysisSessionType {
  sessionName?: string;
  toolType?: string;
  queryInput?: string;
  confidenceScore?: number;
  isCompleted?: boolean;
  executedAt?: Date;
}
