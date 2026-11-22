import { PrismaClient } from '@prisma/client'
import { mockDeep } from 'vitest-mock-extended'

export const prismaClient = mockDeep<PrismaClient>()


// import { vi } from "vitest"

// export const prismaClient: any = {
//             request:{
//                 create: vi.fn(),
//                 delete: vi.fn()
//             }
//         }