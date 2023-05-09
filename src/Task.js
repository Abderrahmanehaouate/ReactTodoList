export 
const Task = (props) => {
    return (
        <div
            className="bg-white shadow-md rounded-md px-4 py-2 mb-2 flex justify-between items-center"
            style={{backgroundColor : props.completed ? "green" : "white"}}
        >
            <h1 className="text-lg font-bold">{props.taskName}</h1>
            <div>
                <button className="bg-blue-500 rounded-md p-2 mr-2"
                onClick={ () => props.completedTask(props.id) }
                >completed</button>
                <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold rounded-md px-4 py-2"
                onClick={() => props.deleteTask(props.id)}
                >
                X
                </button>
            </div>

        </div>
        );
};