import './App.css'

function App() {
 
  return (
<>
<div className="container">
  <Header />
  <TodoList />
  <Modal />
</div>
    </>
  )
}

function Header() {
  return(
  <div className="todoHeader" >
  <h1>Yapılacak Listesi</h1>
  <button id="addTodoBtn">➕</button>
</div>
  )
}

function TodoList() {
  return(
    <div className="todosList" id="todoContainer"> <h3>Yapılacak İşler - <span class="activeTodoCount">0</span></h3></div>

  )}

function Modal() {

 return(
<dialog id="modal">
  <h2 className="modelAddNew">Todo Ekle</h2>
  <h2 className="modelEdit"></h2>
 <form  method="dialog" autocomplete="off" id="todoForm">
  <input required type="text" name="name" placeholder="yeni bir görev ekle"/>
  <AddBtn/>
  <Edit/>
  <VazgecBtn/>
  <input type="hidden" value={""} /> 
 </form>
</dialog>
 ) 
}


function AddBtn() {

return(
  <button className="modelAddNew">Ekle</button> 
)
}

function Edit() {

return(
  <button  className="modelEdit">Düzenle</button>
)
}

function VazgecBtn() {
  return(
    <button className="exit" type="button" onclick="todoForm.reset();modal.close();">Vazgeç</button>
  )
}
export default App
