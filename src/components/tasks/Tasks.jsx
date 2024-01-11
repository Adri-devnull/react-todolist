import Task from '../task/Task';

const Tasks = ({
	tasks,
	setTasks,
	filteredTasks,
	completeTask,
	deleteTask
}) => {
	return (
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
	);
};

export default Tasks;
