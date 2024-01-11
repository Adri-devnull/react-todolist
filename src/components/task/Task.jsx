import {
	StyledButtonDelete,
	StyledInput,
	StyledLabel,
	StyledTask
} from './styles';

const Task = ({ id, job, action, completed, actionDelete }) => {
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
			<StyledButtonDelete type='button' onClick={actionDelete}>
				X
			</StyledButtonDelete>
		</StyledTask>
	);
};

export default Task;
