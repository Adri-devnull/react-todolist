import { useState } from 'react';
import { v4 } from 'uuid';
import {
	StyledCenteredForm,
	StyledContainers,
	StyledForm,
	StyledInput,
	StyledLabel,
	StyledSpan
} from './styles';
import Task from '../task/Task';

const Form = () => {
	const [tasks, setTasks] = useState([]);

	return (
		<StyledCenteredForm>
			<StyledForm onSubmit={event => handleSubmit(event, tasks, setTasks)}>
				<h1>TO DO LIST</h1>
				<StyledContainers>
					<StyledLabel htmlFor='input'></StyledLabel>
					<StyledInput
						type='text'
						name='todo'
						placeholder='Create a new to do...'
						id='input'
					/>
				</StyledContainers>
				<div>
					<div>
						{tasks.map(tsk => (
							<Task
								key={tsk.id}
								id={tsk.id}
								job={tsk.job}
								action={() => completeTask(tsk.id, tasks, setTasks)}
								completed={tsk.completed}
							/>
						))}
					</div>
					<StyledContainers>
						<StyledSpan>{tasks.length} items left</StyledSpan>
						<StyledSpan>Clear completed</StyledSpan>
					</StyledContainers>
				</div>
				<StyledContainers>
					<StyledSpan>All</StyledSpan>
					<StyledSpan>Active</StyledSpan>
					<StyledSpan>Completed</StyledSpan>
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

const completeTask = (id, tasks, setTasks) => {
	const tasksUpdated = tasks.map(tsk => {
		if (tsk.id === id) {
			tsk.completed = !tsk.completed;
		}
		return tsk;
	});

	setTasks(tasksUpdated);
};

export default Form;
