export interface statusResponse {
  schedules: { type: string; date: string; process: string }[];
  current_status: string;
}
