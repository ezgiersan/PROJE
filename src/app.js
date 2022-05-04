var listItemObject = {
    listCounter: 'Öneri sayısı',
    data: [],
  }
  
  //list clear
  let clearList = function () {
    listItemObject.data = []
    formTutorial()
  }
  
  //onSubmit
  function formOnSubmit(event) {
    event.preventDefault()
    var formInputData = event.target.elements.formInput.value
    if (formInputData) {
      listItemObject.data.push(formInputData)
      formTutorial()
    }
  }
  
  function formTutorial() {
    var form = (
      <div className="todoList_form bg-dark text-white" >

        <form onSubmit={formOnSubmit}>
          <div className="oneriler row" >
            <div className="oneri_left col-md-6" >
              <input type="text" className="form-control" name="formInput" />
              
              <button
                className="btn btn-warning mr-3"
                style={{ fontSize: '.8rem' }}
                type="submit">
                Gönder
              </button>
              <button
                onClick={clearList}
                className="todoList_del btn btn-danger"
                style={{ fontSize: '.8rem' }}>
                Temizle
              </button>
            </div>
  
            <div className="oneri_sag col-md-6">
            <p style={{fontSize:'1rem'}}>
          {listItemObject.listCounter} : {listItemObject.data.length}
            </p>
          
          <ul style={{fontSize:'1rem'}}>
            {listItemObject.data.map((temp) => {
              return  <li key={temp.toString()}> {temp} </li>
            })}
          </ul>
        
            </div>
          </div>
        </form>
      </div>
    )
    ReactDOM.render(form, document.getElementById("todolistId"))
  }
  
  formTutorial()