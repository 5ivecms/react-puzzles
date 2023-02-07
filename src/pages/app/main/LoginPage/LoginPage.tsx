import { Box, Button, FormControl, TextField, Typography } from '@mui/material'
import type { FC } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { ACCESS_CODE, ACCESS_TOKEN_KEY } from '../../../../core/config/access.config'
import { baseBrowseRoutes } from '../../../../core/config/routes.config'
import { setIsAuth } from '../../../../core/store/auth/slice'
import { useAppDispatch } from '../../../../core/store/store'
import type { AuthFields } from '../../../../core/types'
import { MainLayout } from '../../../../layouts'
import { formControl } from './style.sx'

const LoginPage: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AuthFields>({ mode: 'onChange' })

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onSubmit: SubmitHandler<AuthFields> = ({ code }): void => {
    // eslint-disable-next-line no-console

    if (Number(code) !== ACCESS_CODE) {
      setError('code', { message: 'Не верный код доступа' })
      return
    }
    localStorage.setItem(ACCESS_TOKEN_KEY, String(code))
    dispatch(setIsAuth({ isAuth: true }))
    navigate(baseBrowseRoutes.index())
  }

  return (
    <MainLayout>
      <Box sx={{ margin: '50px auto 0', maxWidth: 340 }}>
        <Typography sx={{ mb: 1 }} textAlign="center" variant="h4">
          Получить доступ
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl sx={formControl} fullWidth>
            <TextField
              {...register('code', { required: { message: 'Поле не может быть пустым', value: true } })}
              autoComplete="false"
              error={Boolean(errors.code?.message)}
              helperText={<>{errors.code?.message}</>}
              label="Телефон"
              placeholder="79998887766"
              type="text"
              variant="outlined"
              fullWidth
            />
          </FormControl>
          <Button size="large" type="submit" variant="contained" fullWidth>
            Войти
          </Button>
        </form>
      </Box>
    </MainLayout>
  )
}

export default LoginPage
