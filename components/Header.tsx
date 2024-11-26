import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;

    img {
        max-height: 60px;
    }
`;

const NavLinks = styled.nav`
    display: flex;
    gap: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        margin-top: 1rem;
        width: 100%;
    }
`;

const NavLink = styled.a`
    font-family: 'Familiar Pro', sans-serif;
    color: #00416B;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: color 0.3s ease, transform 0.2s ease;

    &:hover {
        color: #EA0029;
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`;

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Logo>
                <NavLink href='/'>
                    <Image src="/images/skilledlogo.png" alt="Logo" width={150} height={60} />
                </NavLink>
            </Logo>
            <NavLinks>
                <NavLink href="/">Inicio</NavLink>
                <NavLink href="/nosotros">Nosotros</NavLink>
                <NavLink href="#contact">Contacto</NavLink>
                <NavLink href="#services">Servicios</NavLink>
            </NavLinks>
        </HeaderContainer>
    );
};

export default Header;
