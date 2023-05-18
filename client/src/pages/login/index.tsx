import {Button, TextField} from '@mui/material'
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {UserAuth} from 'entities/user'
import img from './img/img.png'
import img1 from './img/img_1.png'
import img2 from './img/img_2.png'
import logo from './img/logo.png'
import styles from './styles.module.scss'

const Login = () => {
  const dispatch = useDispatch()
  const [credentials, setCredentials] = useState({login: '', password: ''})
  const [isSubmit, setIsSubmit] = useState(false)

  // TODO: Сделать обработку isError
  const {refetch} = UserAuth(credentials.login, credentials.password, dispatch)

  const onChangeCredentialsHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCredentials((prevState) => ({...prevState, [event.target.name]: event.target.value}))

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isSubmit) return

    setIsSubmit(true)

    refetch().finally(() => setIsSubmit(false))
  }

  return (
    <div className={styles.container}>
      <div className={styles.preview}>
        <div className={styles.previewWrapper}>
          <div>
            <div className={styles.header}>
              Создано чтобы экономить ваше время
            </div>

            <div className={styles.text}>
              “Быть счастливым счастьем других — вот настоящее счастье и земной идеал жизни всякого, кто избирает врачебную профессию.”
              <br />
              <br />
              -Николай Иванович Пирогов
              <div className={styles.subtext}>Выдающийся хирург Российской империи</div>
            </div>

            <img src={img} className={styles.background} alt='background' />
          </div>
          <div className={styles.footer}>
            <img src={img1} alt='img1' className={styles.img1} />
            <div className={styles.aboba}>ABOBA</div>
            <img src={img2} alt='img2' className={styles.img2} />
          </div>
        </div>
      </div>

      <div className={styles.login}>
        <div className={styles.loginWrapper}>
          <div className={styles.header}>
            <img src={logo} alt='logo' className={styles.logo} />
            <h2>Медпапка</h2>
          </div>

          <div className={styles.logInForm}>
            <h2 className={styles.title}>
              Добро пожаловать
            </h2>
            <h4 className={styles.caption}>
              Введите ваши данные
            </h4>
            <form className={styles.form} onSubmit={onSubmitHandler}>
              <TextField
                name='login'
                label='Логин'
                value={credentials.login}
                onChange={onChangeCredentialsHandler}
                type='login'
                fullWidth
              />
              <TextField
                name='password'
                label='Пароль'
                value={credentials.password}
                onChange={onChangeCredentialsHandler}
                type='password'
                fullWidth
              />
              <Button
                variant='contained'
                type='submit'
                className={styles.logInBtn}
                fullWidth
              >
                Вход
              </Button>
            </form>
          </div>

          <div className={styles.copyright}>
            <span className={styles.copyright__text}>© Медпапка {new Date().getFullYear()}</span>
            <span>Условия</span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login