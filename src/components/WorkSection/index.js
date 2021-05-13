import React from 'react';
import {
	WorkContainer,
	Title,
	Content,
	Divider,
	ContentWrapper,
} from "./WorkSection.styles.jsx";
import Card from '../Card/index.js';
import { cardObjOne, cardObjTwo, cardObjThree, cardObjFour, cardObjFive, cardObjSix } from '../../assests/CardData.js';

function WorkSection()
{
    return (
		<>
			<WorkContainer id="work">
				<Title>Works</Title>
				<ContentWrapper>
					<Content>
						<Card {...cardObjOne} />
						<Card {...cardObjTwo} />
						<Card {...cardObjThree} />
					</Content>
					<Divider />
					<Content>
						<Card {...cardObjFour} />
						<Card {...cardObjFive} />
						<Card {...cardObjSix} />
					</Content>
				</ContentWrapper>
			</WorkContainer>
		</>
	);
}

export default WorkSection;