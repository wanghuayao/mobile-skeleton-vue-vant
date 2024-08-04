import { setupWorker } from 'msw/browser'
import { AuthHandlers } from './AuthHandlers'

export const worker = setupWorker(...AuthHandlers)
