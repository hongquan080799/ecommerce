import { writable } from "svelte/store"
import type { User } from "../types/User"

export const hidden = writable(true)
export const userInfo = writable<User>(undefined)