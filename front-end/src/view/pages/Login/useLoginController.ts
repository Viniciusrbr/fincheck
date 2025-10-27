import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

const schema = z.object({
  email: z.email('O email é obrigatório').nonempty('O email é obrigatório'),
  password: z
    .string()
    .nonempty('A senha é obrigatória')
    .min(8, 'A senha deve ter pelo menos 8 caracteres'),
})

type formData = z.infer<typeof schema>

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  })

  const handleSubmit = hookFormHandleSubmit((data) => {
    console.log(data)
  })

  return { handleSubmit, register, errors }
}
