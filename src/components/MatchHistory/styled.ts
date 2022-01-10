import {styled} from "../../themes";
import Container from "../../shared/Container";

export const MatchHistoryContainerStyled = styled(Container, {
    flex: 1,
    boxSizing: 'border-box',
    minWidth: '350px',
    variants: {
        desktop: {
            false: {
                maxWidth: '380px',
            }
        }
    }
})
