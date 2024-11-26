import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding: 2rem 1rem;
    background-color: white;
    color: #00416B;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1.5rem;
    }
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media (max-width: 768px) {
        align-items: center;
    }
`;

const FooterLink = styled.a`
    color:  #00416B;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
        color: #EA0029;
    }
`;

const FooterTitle = styled.h4`
    margin-bottom: 1rem;
    font-size: 1.2rem;
    color: #EA0029;
`;

const FooterInfo = styled.p`
    font-size: 0.9rem;
    line-height: 1.5;
    color:  #00416B;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <Section>
                <FooterTitle>Important Links</FooterTitle>
                <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
                <FooterLink href="/disclaimer">Disclaimer</FooterLink>
            </Section>
            <Section>
                <FooterTitle>About Our Company</FooterTitle>
                <FooterInfo>1234 Street Name</FooterInfo>
                <FooterInfo>City, State, 12345</FooterInfo>
                <FooterInfo>Email: info@company.com</FooterInfo>
                <FooterInfo>Phone: (123) 456-7890</FooterInfo>
            </Section>
        </FooterContainer>
    );
};

export default Footer;
