import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='redes-sociais'>
                <img src='../../public/imagens/fb.png' alt='Facebook' />
                <img src='../../public/imagens/tw.png' alt='Twitter' />
                <img src='../../public/imagens/ig.png' alt='Instagram' />
            </div>
                
            <div className='logo'>
                <img src='%PUBLIC_URL%/imagens/logo.png' alt='Instagram' />
            </div>
                
            <div className='texto'>
                <p>
                    Desenvolvido por Alura.
                </p>
            </div>
        </footer>
    )
}

export default Rodape