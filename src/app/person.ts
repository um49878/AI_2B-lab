export interface Person {
  firstName?: string;
  lastName?: string;
  reward?: number;
  wantedFor?: string;
  lastAddress:{
    city?: string;
    street?: string;
    zip?: string;
  }
}
