import { StyledContent } from './components/content/styles';
import Filters from './components/filters/Filters';
import Form from './components/form/Form';
import ItemsLeft from './components/items-left/ItemsLeft';
import Main from './components/main/Main';
import Tasks from './components/tasks/Tasks';
import { FILTERS } from './constants/filters';
import { useState } from 'react';

const App = () => {
	const [tasks, setTasks] = useState([]);
	const [filter, setFilter] = useState(FILTERS.ALL);

	const filteredTasks = filterTasks(filter, tasks);
	const activeTasksCount = filterActiveTasks(tasks).length;
	return (
		<Main>
			<StyledContent>
				<Form tasks={tasks} setTasks={setTasks} />
				<div>
					<Tasks
						tasks={tasks}
						setTasks={setTasks}
						filteredTasks={filteredTasks}
						completeTask={completeTask}
						deleteTask={deleteTask}
					/>

					<ItemsLeft
						length={activeTasksCount}
						action={() => deleteSelectedTasks(tasks, setTasks)}
					></ItemsLeft>
				</div>
				<Filters setFilter={setFilter} />
			</StyledContent>
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

const deleteSelectedTasks = (tasks, setTasks) => {
	const remainingTasks = tasks.filter(task => !task.completed);
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
