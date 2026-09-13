export interface ManusUser {
  id: string;
  email: string;
  name?: string;
}

export interface ManusSession {
  id: string;
  userId: string;
  expiresAt: Date;
}
