import { FILTERS } from '../../constants/filters';
import { StyledContainersFilter, StyledSpanFilter } from './styles';

const Filters = ({ setFilter }) => {
	return (
		<StyledContainersFilter>
			<StyledSpanFilter onClick={() => setFilter(FILTERS.ALL)}>
				All
			</StyledSpanFilter>
			<StyledSpanFilter onClick={() => setFilter(FILTERS.ACTIVE)}>
				Active
			</StyledSpanFilter>
			<StyledSpanFilter onClick={() => setFilter(FILTERS.COMPLETED)}>
				Completed
			</StyledSpanFilter>
		</StyledContainersFilter>
	);
};

export default Filters;
