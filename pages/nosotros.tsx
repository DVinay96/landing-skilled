import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 2rem;
    background-color: #00416B;
    color: white;
    line-height: 1.6;
`;

const Section = styled.section`
    margin-bottom: 3rem;
    padding: 1.5rem;
    border-radius: 10px;
    background-color: #003056;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    &:last-of-type {
        margin-bottom: 0;
    }
`;

const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #EA0029;
    text-align: center;
`;

const Subtitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #FFFFFF;
    text-align: center;
`;

const Paragraph = styled.p`
    font-size: 1.2rem;
    color: #d0d0d0;
`;

const TeamGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 1rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const TeamMember = styled.div`
    text-align: center;
    padding: 1rem;
    background-color: white;
    color: #00416B;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    img {
        width: 100%;
        max-width: 150px;
        height: auto;
        border-radius: 50%;
        margin-bottom: 1rem;
    }
`;

const AchievementsList = styled.ul`
    list-style-type: disc;
    padding-left: 2rem;
    margin-top: 1rem;

    li {
        margin-bottom: 0.5rem;
    }
`;

const FAQList = styled.ul`
    list-style-type: none;
    padding-left: 0;
    margin-top: 1rem;

    li {
        margin-bottom: 1rem;

        strong {
            color: #EA0029;
        }
    }
`;

const FAQItem = styled.div`
    margin-bottom: 1rem;
`;

const nosotros: React.FC = () => {
    return (
        <Container>
            {/* First Section: Company Story */}
            <Section>
                <Title>About Us</Title>
                <Subtitle>Our Story</Subtitle>
                <Paragraph>
                    Our company was founded in [Year] with the mission to provide exceptional services and products to our clients. Over the years, we have grown and evolved, but our commitment to quality and customer satisfaction has remained unchanged.
                </Paragraph>
            </Section>

            {/* Second Section: Mission and Vision */}
            <Section>
                <Subtitle>Mission and Vision</Subtitle>
                <Paragraph>
                    <strong>Mission:</strong> To deliver innovative solutions that meet the needs of our clients and exceed their expectations.
                </Paragraph>
                <Paragraph>
                    <strong>Vision:</strong> To be a leader in our industry, recognized for our commitment to excellence and our ability to adapt to the changing needs of the market.
                </Paragraph>
            </Section>

            {/* Third Section: Team Profiles */}
            <Section>
                <Subtitle>Our Team</Subtitle>
                <TeamGrid>
                    <TeamMember>
                        <img src="team-member-1.jpg" alt="Team Member 1" />
                        <Paragraph>Team Member 1 - Position</Paragraph>
                    </TeamMember>
                    <TeamMember>
                        <img src="team-member-2.jpg" alt="Team Member 2" />
                        <Paragraph>Team Member 2 - Position</Paragraph>
                    </TeamMember>
                </TeamGrid>
            </Section>

            {/* Fourth Section: Achievements and Clients */}
            <Section>
                <Subtitle>Achievements and Clients</Subtitle>
                <AchievementsList>
                    <li>Award for Best Service in [Year]</li>
                    <li>Recognized as a top company in [Industry]</li>
                </AchievementsList>
                <Paragraph>
                    We are proud to work with a diverse range of clients, including [Client 1], [Client 2], and [Client 3].
                </Paragraph>
            </Section>

            {/* Fifth Section: FAQ */}
            <Section>
                <Subtitle>Frequently Asked Questions</Subtitle>
                <FAQList>
                    <FAQItem>
                        <strong>Q: What services do you offer?</strong>
                        <Paragraph>
                            A: We offer a wide range of services including [Service 1], [Service 2], and [Service 3].
                        </Paragraph>
                    </FAQItem>
                    <FAQItem>
                        <strong>Q: How can I contact you?</strong>
                        <Paragraph>
                            A: You can contact us via email at [Email] or by phone at [Phone Number].
                        </Paragraph>
                    </FAQItem>
                </FAQList>
            </Section>
        </Container>
    );
};

export default nosotros;
