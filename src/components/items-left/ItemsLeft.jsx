import { StyledItemsLeft, StyledSpan } from './styles';

const ItemsLeft = ({ length, action }) => {
	return (
		<StyledItemsLeft>
			<StyledSpan> {length} Items Left</StyledSpan>
			<StyledSpan onClick={action}>Delete item</StyledSpan>
		</StyledItemsLeft>
	);
};

export default ItemsLeft;
