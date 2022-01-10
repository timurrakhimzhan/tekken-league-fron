import {styled} from "../../themes";
import Container from "../../shared/Container";

export const MatchInfoContainerStyled = styled(Container, {
	flex: 1,
	maxWidth: '500px',
	position: 'relative'
});


export const BackIconWrapperStyled = styled('div', {
	position: 'absolute',
	'& svg': {
		display: 'block'
	},
	left: '$lg',
	top: '$lg',
});