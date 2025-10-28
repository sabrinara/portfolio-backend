
export interface IAchievement {
  title: string;
  details: string;
  image?: string;
  type: "contest" | "course";
  date?: Date;
}
