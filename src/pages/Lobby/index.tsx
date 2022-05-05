import Link from "next/link"
import styles from './styles.module.scss'


export default function Lobby() {
    return (
        <Link href="/Lobby">
            <section className={styles.Container}>
                <div className={styles.Content}>
                    <h2>Horários agendados</h2>
                    <p className={styles.Res}>Hoje | Dia 06 | Segunda feira</p>

                    <h3>Atendimento a seguir</h3>
                    <div className={styles.Pessoa}>
                        <p>Leonardo Minatti</p>
                        <p>08:00</p>
                    </div>
                    <table>
                        <tr>
                            <th className={styles.Title}>Horário</th>
                            <th className={styles.Title}>Cliente</th>
                            <th className={styles.Title}>Serviço</th>
                        </tr>
                        <tr>
                            <td className={styles.Hors}>08:30</td>
                            <td className={styles.Name}>Cleiton Souza</td>
                            <td className={styles.Services}>Hidratação</td>
                        </tr>
                        <tr>
                            <td className={styles.Hors}>11:00</td>
                            <td className={styles.Name}>Rosangela</td>
                            <td className={styles.Services}>Luzes</td>
                        </tr>
                        <tr>
                            <td className={styles.Hors}>13:00</td>
                            <td className={styles.Name}>Robson</td>
                            <td className={styles.Services}>Pedicure</td>
                        </tr>
                    </table>
                </div>
            </section>
        </Link >
    )
}