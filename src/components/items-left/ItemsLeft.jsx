import { StyledItemsLeft, StyledSpan } from './styles';

const ItemsLeft = ({ length }) => {
	return (
		<StyledItemsLeft>
			<StyledSpan> {length} Items Left</StyledSpan>
			<StyledSpan>Delete item</StyledSpan>
		</StyledItemsLeft>
	);
};

export default ItemsLeft;
