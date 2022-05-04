

export function FormLogin() {
    return (
        <form>
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
        </form>
    )
}