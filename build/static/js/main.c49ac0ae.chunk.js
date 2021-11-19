(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={heading:"App_heading__27IO1"}},19:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(11),c=n.n(r),o=n(13),s=n(12),i=n(3),l=n(4),u=n(6),d=n(5),h=n(21),m=n(2),b=n.n(m),p=n(0),j=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:t.props.name,number:t.props.number},t}return Object(l.a)(n,[{key:"render",value:function(){console.log(this.props);var t=this.state,e=t.name,n=t.number;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{className:b.a.form,children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("h3",{children:"Name"}),Object(p.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:e,required:!0,onChange:this.props.onChangeInputHandler,className:b.a.input})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("h3",{children:"Tel. number "}),Object(p.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:n,required:!0,onChange:this.props.onChangeInputHandler,className:b.a.input})]}),Object(p.jsx)("button",{type:"button",className:b.a.button,onClick:this.props.addContactHandler,children:"Add Contact"})]})})}}]),n}(a.Component),f=n(7),C=n.n(f);var g=function(t){var e=t.filteredContacts,n=t.deleteContact;return Object(p.jsx)("ul",{className:C.a.list,children:e.map((function(t){return Object(p.jsxs)("li",{className:C.a.item,children:[t.name," : ",t.number,Object(p.jsx)("button",{onClick:function(){return n(t.id)},className:C.a.button,children:" Delete "})]},t.id)}))})},O=n(8),_=n.n(O);function x(t){var e=t.filter,n=t.handleFilterChange;return Object(p.jsxs)("label",{className:_.a.label,children:[Object(p.jsx)("h3",{className:_.a.heading,children:"Find contacts by name"}),Object(p.jsx)("input",{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",autoComplete:"off",onChange:n,value:e,className:_.a.input})]})}var v=n(10),A=n.n(v),y=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.onChangeInputHandler=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(s.a)({},a,r))},t.addContactHandler=function(e){t.dublicateAlert(t.state.name)||t.setState((function(e){return{contacts:[{name:t.state.name,id:Object(h.a)(),number:t.state.number}].concat(Object(o.a)(e.contacts))}}))},t.handleFilterChange=function(e){t.setState({filter:e.target.value})},t.dublicateAlert=function(e){if(t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})))return alert("".concat(e," is already in contacts")),!0},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("componentDidMount"),console.log(this.state.contacts),console.log(this.state.filter);var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this,e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{className:A.a.heading,children:"PhoneBook"}),Object(p.jsx)(j,{onChangeInputHandler:this.onChangeInputHandler,addContactHandler:this.addContactHandler,dublicateAlert:this.dublicateAlert,name:this.state.name,number:this.state.number}),Object(p.jsx)("h3",{className:A.a.heading,children:"Contacts"}),Object(p.jsx)(x,{filter:this.state.filter,handleFilterChange:this.handleFilterChange}),Object(p.jsx)(g,{filteredContacts:e,deleteContact:this.deleteContact})]})}}]),n}(a.Component);c.a.render(Object(p.jsx)(y,{}),document.querySelector("#root"))},2:function(t,e,n){t.exports={form:"ContactForm_form__1IGe4",button:"ContactForm_button__1q4nu",input:"ContactForm_input__6xfCy"}},7:function(t,e,n){t.exports={list:"ContactList_list__2BDpJ",item:"ContactList_item__3UdQB",button:"ContactList_button__2HJph"}},8:function(t,e,n){t.exports={heading:"Filter_heading__3Lp4Z",input:"Filter_input__1curm",label:"Filter_label__1YoBo"}}},[[19,1,2]]]);
//# sourceMappingURL=main.c49ac0ae.chunk.js.map