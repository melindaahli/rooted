export type TaskStatus = "pending" | "completed";
export type TaskType =
  | "temperature"
  | "humidity"
  | "light"
  | "moisture";
  
export interface Task {
    id: string;
    plantId: string;
    title: TaskType;
    status: TaskStatus;
    message: string;
}