// src/types/user.types.ts
export interface User {
  id: string
  username: string
  email: string
  isActive: boolean
  profile?: string
  googleId?: string | null
  avatarUrl?: string | null
}

export interface CreateUserPayload {
  username: string
  email: string
  password: string
}
