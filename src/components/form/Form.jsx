import { v4 } from 'uuid';
import {
	StyledCenteredForm,
	StyledContainers,
	StyledForm,
	StyledInput,
	StyledLabel,
	StyledTitle
} from './styles';

const Form = ({ tasks, setTasks }) => {
	return (
		<StyledCenteredForm>
			<StyledForm onSubmit={event => handleSubmit(event, tasks, setTasks)}>
				<StyledTitle>TO DO LIST</StyledTitle>
				<StyledContainers>
					<StyledLabel htmlFor='input'></StyledLabel>
					<StyledInput
						type='text'
						name='todo'
						placeholder='Create a new to do...'
						id='input'
					/>
				</StyledContainers>
			</StyledForm>
		</StyledCenteredForm>
	);
};

const handleSubmit = (event, tasks, setTasks) => {
	event.preventDefault();
	const value = event.target.todo.value;
	if (value !== '') {
		const newTask = {
			id: v4(),
			job: value,
			completed: false
		};
		setTasks([...tasks, newTask]);
		event.target.reset();
	}
};

export default Form;
