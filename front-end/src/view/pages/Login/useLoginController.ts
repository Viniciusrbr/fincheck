import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import z from 'zod'

import { useAuth } from '../../../app/hooks/useAuth'
import { authService } from '../../../app/services/authService'
import type { SigninParams } from '../../../app/services/authService/signin'

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
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  })

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: SigninParams) => {
      return authService.signin(data)
    },
  })

  const { signin } = useAuth()

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data)

      signin(accessToken)
    } catch {
      toast.error('Credenciais inválidas!')
    }
  })
  return { handleSubmit, register, isPending, errors }
}
