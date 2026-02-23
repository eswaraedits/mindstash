import zod from 'zod'
export const userValidation = zod.object({
    username:zod.string().trim().min(5,{message:"username should atleast contain 5 charecters"}),
    password:zod.string().min(6)
})
