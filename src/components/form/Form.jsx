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
	const [filter, setFilter] = useState(['all']);

	const filteredTasks = filterTasks(tasks, filter);
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
						{filteredTasks.map(tsk => (
							<Task
								key={tsk.id}
								id={tsk.id}
								job={tsk.job}
								action={() => completeTask(tsk.id, tasks, setTasks)}
								actionDelete={() => deleteTask(tsk.id, tasks, setTasks)}
								completed={tsk.completed}
							/>
						))}
					</div>
					<StyledContainers>
						<StyledSpan>{tasks.length} items left</StyledSpan>
						<StyledSpan onClick={() => clearCompletedTasks(tasks, setTasks)}>
							Clear completed
						</StyledSpan>
					</StyledContainers>
				</div>
				<StyledContainers>
					<StyledSpan onClick={() => setFilter('all')}>All</StyledSpan>
					<StyledSpan onClick={() => setFilter('active')}>Active</StyledSpan>
					<StyledSpan onClick={() => setFilter('completed')}>
						Completed
					</StyledSpan>
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

const deleteTask = (id, tasks, setTasks) => {
	const remainingTasks = tasks.filter(task => id !== task.id);
	setTasks(remainingTasks);
};

const clearCompletedTasks = (tasks, setTasks) => {
	const undeletedTasks = tasks.filter(task => !task.completed);
	setTasks(undeletedTasks);
};

const filterTasks = (tasks, filter) => {
	return tasks.filter(task => {
		if (filter === 'active') {
			return !task.completed;
		} else if (filter === 'completed') {
			return task.completed;
		}
		return true;
	});
};

// const showActiveTasks = (tasks, setTasks) => {
// 	const activeTasks = tasks.filter(task => !task.completed);
// 	setTasks(activeTasks);
// };

// const showCompletedTasks = (tasks, setTasks) => {
// 	const completedTasks = tasks.filter(task => task.completed);
// 	setTasks(completedTasks);
// };

// const showAllTasks = (tasks, setTasks) => {
// 	const allTasks = tasks.map(task => {
// 		return task;
// 	});
// 	setTasks(allTasks);
// };

// onClick={() => showAllTasks(tasks, setTasks)}
// 	onClick={() => showActiveTasks(tasks, setTasks)}
//  onClick={() => showCompletedTasks(tasks, setTasks)}

export default Form;
