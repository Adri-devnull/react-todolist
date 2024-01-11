import Filters from './components/filters/Filters';
import Form from './components/form/Form';
import Main from './components/main/Main';
import Tasks from './components/tasks/Tasks';
import { FILTERS } from './constants/filters';
import { useState } from 'react';

const App = () => {
	const [tasks, setTasks] = useState([]);
	const [filter, setFilter] = useState(FILTERS.ALL);

	const filteredTasks = filterTasks(filter, tasks);
	return (
		<Main>
			<Form tasks={tasks} setTasks={setTasks} />
			<Tasks
				tasks={tasks}
				setTasks={setTasks}
				filteredTasks={filteredTasks}
				completeTask={completeTask}
				deleteTask={deleteTask}
			/>
			<Filters setFilter={setFilter} />
		</Main>
	);
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

const filterActiveTasks = tasks => {
	return tasks.filter(task => !task.completed);
};

const filterCompletedTasks = tasks => {
	return tasks.filter(task => task.completed);
};

const filterTasks = (filterActive, tasks) => {
	switch (filterActive) {
		case FILTERS.ACTIVE:
			return filterActiveTasks(tasks);
		case FILTERS.COMPLETED:
			return filterCompletedTasks(tasks);
		case FILTERS.ALL:
			return [...tasks];
	}
};

export default App;
