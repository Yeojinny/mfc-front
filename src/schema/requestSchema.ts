import { z } from 'zod'

const RequestSchema = z.object({
  title: z.string().min(1, { message: '요청서 이름을 입력해주세요.' }),
  description: z.string().min(1, { message: '요청 내용을 입력해주세요.' }),
  situation: z
    .string()
    .min(1, { message: '코디 상황을 선택해주세요.' })
    .refine((value) => value !== 'none', {
      message: '코디 상황을 선택해주세요.',
    }),
  brandIds: z.array(z.string()).optional(),
  categoryIds: z
    .array(z.string())
    .min(1, { message: '최소한 옵션 1개는 선택되어야 합니다.' }),
  budget: z.number().min(1, { message: '예산을 입력해주세요.' }),
  referenceImageUrls: z.array(z.string()).optional(),
  myImageUrls: z.array(z.string()).optional(),
})

export default RequestSchema
