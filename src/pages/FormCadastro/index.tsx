import Link from "next/link"
import styles from './styles.module.scss'


export default function FormCadastro() {
    return (
        <Link href="/FormCadastro">


            <form className={styles.FormCadastro}>
                <h2>Cadastrar</h2>
                <input
                    type="text"
                    name="Nome"
                    placeholder="Digite seu nome"
                />
                <input
                    type="text"
                    name="Salao"
                    placeholder="Digite o nome do salão"
                />
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

                <button type='submit'>Cadastrar</button>

                <Link
                    href="/"
                ><a>Realizar novo cadastro</a></Link>

            </form>
        </Link>
    )
}