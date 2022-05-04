"use strict";

var listItemObject = {
  listCounter: 'Öneri sayısı',
  data: []
}; //list clear

var clearList = function clearList() {
  listItemObject.data = [];
  formTutorial();
}; //onSubmit


function formOnSubmit(event) {
  event.preventDefault();
  var formInputData = event.target.elements.formInput.value;

  if (formInputData) {
    listItemObject.data.push(formInputData);
    formTutorial();
  }
}

function formTutorial() {
  var form = /*#__PURE__*/React.createElement("div", {
    className: "todoList_form bg-dark text-white"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: formOnSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "oneriler row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "oneri_left col-md-6"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    name: "formInput"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-warning mr-3",
    style: {
      fontSize: '.8rem'
    },
    type: "submit"
  }, "G\xF6nder"), /*#__PURE__*/React.createElement("button", {
    onClick: clearList,
    className: "todoList_del btn btn-danger",
    style: {
      fontSize: '.8rem'
    }
  }, "Temizle")), /*#__PURE__*/React.createElement("div", {
    className: "oneri_sag col-md-6"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem'
    }
  }, listItemObject.listCounter, " : ", listItemObject.data.length), /*#__PURE__*/React.createElement("ul", {
    style: {
      fontSize: '1rem'
    }
  }, listItemObject.data.map(function (temp) {
    return /*#__PURE__*/React.createElement("li", {
      key: temp.toString()
    }, " ", temp, " ");
  }))))));
  ReactDOM.render(form, document.getElementById("todolistId"));
}

formTutorial();
