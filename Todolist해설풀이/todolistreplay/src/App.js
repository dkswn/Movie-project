import "./App.css"
import {useState} from "react";
import uuid from "react-uuid";

function App(){

    const [todos, setTodos] = useState([
        {
            id:uuid(),
            title:"제목1",
            content:"내용1",
            isDone:false,
        },
          {
             id:uuid(),
            title:"제목1",
            content:"내용1",
            isDone:true,
        },
          {
             id:uuid(),
            title:"제목1",
            content:"내용1",
            isDone:false,
        },
          {
              id:uuid(),
            title:"제목1",
            content:"내용1",
            isDone:false,
        },
    ]);
    const [title, setTitle]= useState("");
    const [contents, setContents] = useState("");
    return (
        <div>
            <header
             style={{
                    backgroundColor: "#f7e9c3",
                    padding: "10px",
            }}>
                헤더입니다
            </header>
            <main
            style={{
                backgroundColor:"#d9f7c3",
                padding:"10px",
            }}>
                <form onSubmit={(event)=>{
                    event.preventDefault();
                    const NewTodo = {
                        id: uuid(),
                        title: title,
                        content: contents,
                        isDone:false,
                    };
                    setTodos([...todos,NewTodo])  // todos객체를 NewTodo에 넣음
                    // form 태그안에는 default값으로 submit이 들어가 있음
                }}>
                      <div>
                <input value={title} onChange={(event) => {
                    setTitle(event.target.value);
                }}/>
                <input value={contents} onChange={(event) => {
                    setContents(event.target.value);
                }}/>
                <button type="submit">입력</button>
                </div>
                </form>

                <div>
                    <h1>리스트영역</h1>
                    <h2>할일 목록</h2>
                      {
                       todos.filter((todo) => {
                           return todo.isDone === false
                       }).map((todo) =>{
                            return (
                                <div key={todo.id}  style={{
                                    border: '1px solid black',
                                    margin: '10px',
                                    paddingLeft: '10px',
                                    paddingBottom: "20px",
                                }}>
                                    <p>{todo.id}</p>
                                    <h3>{todo.title}</h3>
                                    <p>{todo.contents}</p>
                                    <p>완료여부 : {todo.isDone.toString()}</p>
                                     <button
                                         onClick={()=>{
                                         const complateTodos = todos.map((item)=>{
                                             if(item.id === todo.id) {
                                                 return {
                                                     ...item,isDone: !item.isDone
                                                 }
                                             } else {
                                                 return item;
                                             }
                                         });
                                         setTodos(complateTodos);
                                     }}
                                     >완료</button>
                                    <button onClick={()=>{
                                        const deleteTodos = todos.filter(item =>{
                                            return item.id !== todo.id;
                                        });
                                        setTodos(deleteTodos);
                                    }}>삭제</button>
                                </div>
                            );
                        })}
                    <h3>완료된 목록</h3>
                      {
                        todos.filter((todo) =>{
                            return todo.isDone === true;
                            }).map((todo) => {
                            return (
                                <div key={todo.id}  style={{
                                    border: '1px solid black',
                                    margin: '10px',
                                    paddingLeft: '10px',
                                     paddingBottom: "20px",
                                }}>
                                    <p>{todo.id}</p>
                                    <h3>{todo.title}</h3>
                                    <p>{todo.contents}</p>
                                    <p>완료여부 : {todo.isDone.toString()}</p>
                                    <button>완료</button>
                                    <button>돌아가기</button>
                                     <button onClick={()=>{
                                        const deleteTodos = todos.filter(item =>{
                                            return item.id !== todo.id
                                        })
                                        setTodos(deleteTodos);
                                    }}>삭제</button>
                                </div>
                            );
                       })}
                </div>
            </main>
            <footer
            style={{
                backgroundColor: "#c3e9f7",
                padding:"10px",
            }}
            >
                푸터입니다.
            </footer>
        </div>
    )
}
export default App;