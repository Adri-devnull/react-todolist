import { StyledContainersClear, StyledSpan } from './styles';

const ClearCompletedTasks = ({ tasks, setTasks }) => {
	return (
		<div>
			<StyledContainersClear>
				<StyledSpan>{tasks.length} items left</StyledSpan>
				<StyledSpan onClick={() => clearCompletedTasks(tasks, setTasks)}>
					Clear completed
				</StyledSpan>
			</StyledContainersClear>
		</div>
	);
};

const clearCompletedTasks = (tasks, setTasks) => {
	const undeletedTasks = tasks.filter(task => !task.completed);
	setTasks(undeletedTasks);
};

export default ClearCompletedTasks;
