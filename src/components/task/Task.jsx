import { StyledInput, StyledLabel, StyledTask } from './styles';

const Task = ({ id, job, action, completed }) => {
	return (
		<StyledTask>
			<StyledLabel htmlFor={id} $completed={completed}>
				{job}
			</StyledLabel>
			<StyledInput
				checked={completed}
				type='checkbox'
				id={id}
				onChange={action}
			></StyledInput>
			<div>X</div>
		</StyledTask>
	);
};

export default Task;
