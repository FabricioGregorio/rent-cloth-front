import { useState } from 'react'
import './index.css'
import { BsInstagram, BsFacebook, BsSearch } from 'react-icons/bs'

function Header() {
    const [dropdownActive, setDropdownActive] = useState(false)
    function lol() {
        setDropdownActive(true)
    }
    return (
        <header id='cabeçalho'>
            <div>
                LOGO
            </div>
            <ol id='lista'>
                <li><a href="/">Início</a></li>
                <li onClick={lol}><a href="/vestidos" onClick={(event) => event.preventDefault()}>Vestidos</a>
                    {(dropdownActive === true) && (
                        <ol>
                            <li>Infantil</li>
                            <li>Noivado</li>
                            <li>Batizado</li>
                        </ol>
                    )}
                </li>
                <li><a href="/ternos">Ternos</a></li>
                <li><a href="/acessorios">Acessórios</a></li>
                <li><a href="/contato">Contato</a></li>
            </ol>
            <div>
                <ol id='redes'>
                    <li><i>
                        <BsSearch />
                    </i>
                    </li>
                    <li><a href="https://www.instagram.com/__miriaaahnoivaas_/" target='_blank'>
                        <i><BsInstagram /></i>
                    </a>
                    </li>
                    <li><a href="https://www.facebook.com/miria.dejesus.73" target='_blank'>
                        <i><BsFacebook /></i>
                    </a>
                    </li>
                </ol>
            </div>
        </header>
    )
}

export default Header