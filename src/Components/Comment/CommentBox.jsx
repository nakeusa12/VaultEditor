import {useState} from 'react';
import "./testing.css"
import TimeAgo from 'react-timeago'

const data = [
  {
    id: 1,
    title: "Learn HTML and CSS",
    name: "Lalex",
    oldtime: "2 years ago",
    image: "https://avatars3.githubusercontent.com/u/6748866?v=3&s=460"
  },
  {
    id: 2,
    title: "Learn JavaScript",
    name: "Miya",
    oldtime: "5 years ago",
    image: "https://avatars3.githubusercontent.com/u/6748866?v=3&s=460"
  },
  {
    id: 3,
    title: "Learn React",
    name: "Yuhai",
    oldtime: "2 months ago",
    image: "https://avatars3.githubusercontent.com/u/6748866?v=3&s=460"
  },
  {
    id: 4,
    title: "Become a Web Developer",
    name: "Kiwaw",
    oldtime: "2 seconds ago",
    image: "https://avatars3.githubusercontent.com/u/6748866?v=3&s=460"
  }
];

const CommentBox = () => {
  const [todos, setTodos] = useState(data);

  const handleAddTodo = (todo) => {
    console.log(todos);

    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: new Date().getTime().toString(),
        title: todo,
        name: "You",
        time: new Date(),
        image: "https://avatars1.githubusercontent.com/u/15023006?v=3&u=bdc8742de159693ab4d65da803e53e3a326f936c&s=140"
      }
    ]);

  };

  const handleDeleteTodo = (todo) => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodo) => prevTodo.id !== todo.id)
    );
  };

  return (
    <div className="comment-box">
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
      <AddTodo handleAddTodo={handleAddTodo} />
    </div>
  );
};

const AddTodo = ({ handleAddTodo }) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const text = todo.trim();

    if (!text) {
      return;
    }

    setTodo("");

    handleAddTodo(text);
  };

  return (
      <div className="form-box">
        <img src="https://avatars1.githubusercontent.com/u/15023006?v=3&u=bdc8742de159693ab4d65da803e53e3a326f936c&s=140" className="avatar-form" alt=""/>
        <form className="comment-form" onSubmit={handleClick} >
          <input
            onChange={handleChange}
            type="text"
            placeholder="Message..."
            id="new-todo"
            className="form-control mr-2"
            value={todo}
          />
        </form>
      </div>
  );
};

const TodoList = ({ todos, handleDeleteTodo }) => {

  const handleClick = (todo) => () => {
    handleDeleteTodo(todo);
  };

  return (
      <div className="comment-list">
        <ul id="todos" className="comment">
          {todos.map((todo) => (
            <li
            className="list"
            key={todo.id}
            >
              <img className="avatar" src={todo.image} alt=""/>
              <div className="content">
                <div className="info">
                  <h3>{todo.name}</h3>
                  <span>by <i> {todo.oldtime} <TimeAgo date={todo.time} /> </i></span>
                </div>
                <p>{todo.title}</p>
                <div className="action">                
                  <button>Edit</button>
                  •
                  <button onClick={handleClick(todo)}>Delete</button>
                </div>
              </div>  
            </li>
          ))}
        </ul>
    </div>
  );
};

export default CommentBox