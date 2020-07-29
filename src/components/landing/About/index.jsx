import React from "react"

import { Wrapper, Flex, RoundedContainer } from "./styles"
import { Container } from "components/common"
import Img from "gatsby-image"

export const About = ({img}) => {
    return (
        <Wrapper as={Container} id="#about">
            <Flex>
                <RoundedContainer>
                    <Img fixed={img} />
                </RoundedContainer>

                <h2>Who am I?</h2>
                <p>
                A skilled, inspired and versatile graphic designer with a record of imaginative and groundbreaking solutions. Motivated and dedicated 3D Designer with a demonstrated capacity to create high-quality projects, including animations. Having the artistic expertise and technique needed to cooperate closely with designers to create content that stimulates visually. Omar is well-proven in the implementation of projects from start to finish, ensuring that all research is successful, relevant, and completed in approved time frames. Can collaborate with editors, copywriters, designers, other makers, project executives, developers and advertisers as part of a team.
                </p>
            </Flex>
        </Wrapper>
    )
}