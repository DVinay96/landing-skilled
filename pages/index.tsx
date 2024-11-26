import React from 'react';
import styled from 'styled-components';

const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #00416B;
    color: white;
    background-image: url('/images/homeBG.jpg');
    background-size: cover;
    background-position: center;
`;

const Header = styled.h1`
    font-size: 3rem;
    color: #EA0029;
`;

const SubHeader = styled.h2`
    font-size: 2rem;
    color: white;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 1.2rem;
    color: #00416B;
    background-color: #EA0029;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background-color: #d10024;
    }
`;

const MidContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 1rem;
    background-color: #00416B;
    color: white;

    @media (max-width: 768px) {
        padding: 2rem 1rem;
    }
`;

const CardSection = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
    padding: 1rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const Card = styled.div`
    background-color: white;
    color: #00416B;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
`;

const CardTitle = styled.h3`
    font-size: 1.8rem;
    margin-bottom: 1rem;
`;

const CardDescription = styled.p`
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    color: #333;
`;

const CardButton = styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: #00416B;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #003056;
    }
`;

const HomePage: React.FC = () => {
    return (
        <>
        <TopContainer>
            <Header>Bienvenido a Skilled</Header>
            <SubHeader>Proyectos Industriales</SubHeader>
            <Button>Contáctanos</Button>
        </TopContainer>
        <MidContainer>
                <CardSection>
                    <Card>
                        <CardTitle>Instalaciones Eléctricas Industriales</CardTitle>
                        <CardDescription>
                            Realizamos instalaciones eléctricas seguras y eficientes, adaptadas a las necesidades de proyectos industriales y comerciales.
                        </CardDescription>
                        <CardButton>Solicita tu Cotización</CardButton>
                    </Card>
                    <Card>
                        <CardTitle>Suministro De Materiales Eléctricos</CardTitle>
                        <CardDescription>
                            Proveemos materiales eléctricos de alta calidad para proyectos industriales y comerciales, garantizando disponibilidad, eficiencia y cumplimiento con las normativas vigentes.
                        </CardDescription>
                        <CardButton>Solicita tu Cotización</CardButton>
                    </Card>
                    <Card>
                        <CardTitle>Proyectos Llave en Mano</CardTitle>
                        <CardDescription>
                            Gestionamos tu proyecto completo, desde el diseño hasta la entrega final, asegurando calidad, cumplimiento y resultados listos para operar. Nos encargamos de cada detalle para que tú te enfoques en lo importante.
                        </CardDescription>
                        <CardButton>Solicita tu Cotización</CardButton>
                    </Card>
                </CardSection>
            </MidContainer>

        </>

    );
};

export default HomePage;