import Link from 'next/link'
import styles from './styles.module.scss'

export function FormLogin() {
    return (
        <form className={styles.FormLogin}>
            <h2>Login</h2>
            <input
                type="text"
                name="cpf"
                placeholder="Digite seu cpf"
            />

            <input
                type="password"
                name="password"
                placeholder="Digite sua senha"
            />

            <button type='submit'>Entrar</button>

            <Link
                href="/FormCadastro"
            ><a>Realizar novo cadastro</a></Link>

        </form>
    )
}