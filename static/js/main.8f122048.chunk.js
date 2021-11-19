(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={list:"ContactList_list__1iwXo",item:"ContactList_item__1E9dx",button:"ContactList_button__XSUAL"}},11:function(t,e,n){t.exports={heading:"Filter_heading__2lSXg",input:"Filter_input__1avd6",label:"Filter_label__3YMos"}},15:function(t,e,n){t.exports={heading:"App_heading__1GyyW"}},39:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(8),r=n.n(c),o=n(16),i=n(17),s=n(18),l=n(24),u=n(22),d=n(7),b=n.n(d),j=n(1),h=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{className:b.a.form,children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("h3",{children:"Name"}),Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.props.onChangeInputHandler,className:b.a.input})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("h3",{children:"Tel. number "}),Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.props.onChangeInputHandler,className:b.a.input})]}),Object(j.jsx)("button",{type:"button",className:b.a.button,onClick:this.props.addContactHandler,children:"Add Contact"})]})})}}]),n}(a.Component),f=n(10),p=n.n(f),O=n(5);var m=Object(O.b)((function(t){return{contacts:t.contacts}}),(function(t){return{}}))((function(t){t.contacts;var e=t.filteredContacts,n=t.deleteContact;return Object(j.jsx)("ul",{className:p.a.list,children:e.map((function(t){return Object(j.jsxs)("li",{className:p.a.item,children:[t.name," : ",t.number,Object(j.jsx)("button",{onClick:function(){return n(t.id)},className:p.a.button,children:" Delete "})]},t.id)}))})})),C=n(11),x=n.n(C),_=n(41),g=n(3),v=Object(g.b)("addContact",(function(t,e){return{payload:{name:t,number:e,id:Object(_.a)()}}})),A=Object(g.b)("deleteContact"),y=Object(g.b)("contactsFilter");var F=Object(O.b)((function(t){return{value:t.filter}}),(function(t){return{contactsFilter:function(e){return t(y(e.target.value))}}}))((function(t){t.value;var e=t.contactsFilter;return Object(j.jsxs)("label",{className:x.a.label,children:[Object(j.jsx)("h3",{className:x.a.heading,children:"Find contacts by name"}),Object(j.jsx)("input",{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",autoComplete:"off",onChange:e,className:x.a.input})]})})),N=n(15),k=n.n(N);var w,z=Object(O.b)((function(t){var e=t.contacts,n=t.filter;return{contactsArr:e.contacts,filter:n}}),(function(t){return{addContact:function(e,n){return t(v(e,n))},deleteContact:function(e){return t(A(e))}}}))((function(t){var e=t.addContact,n=t.deleteContact,c=t.contactsArr,r=t.filter,i=Object(a.useState)(""),s=Object(o.a)(i,2),l=s[0],u=s[1],d=Object(a.useState)(""),b=Object(o.a)(d,2),f=b[0],p=b[1],O=function(t){if(c.find((function(e){return e.name.toLowerCase()===t.toLowerCase()})))return alert("".concat(t," is already in contacts")),!0},C=c.length>0?c.filter((function(t){return t.name.toLowerCase().includes(r.toLowerCase())})):[];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:k.a.heading,children:"PhoneBook"}),Object(j.jsx)(h,{onChangeInputHandler:function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":u(a);break;case"number":p(a);break;default:return}},addContactHandler:function(t){O(l)||e(l,f)}}),Object(j.jsx)("h3",{className:k.a.heading,children:"Contacts"}),Object(j.jsx)(F,{}),Object(j.jsx)(m,{filteredContacts:C,deleteContact:n})]})})),L=n(12),S=n(23),Z=n(2),H=n(4),J=n(20),I=n.n(J),q=(n(38),{key:"contacts",storage:I.a}),B=Object(g.c)([],(w={},Object(L.a)(w,v,(function(t,e){var n=e.payload;return[].concat(Object(S.a)(t),[n])})),Object(L.a)(w,A,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),w)),M=Object(g.c)("",Object(L.a)({},y,(function(t,e){return e.payload}))),P=Object(H.g)(q,Object(Z.combineReducers)({contacts:B})),T=Object(g.a)({reducer:{contacts:P,filter:M},middleware:Object(g.d)({serializableCheck:{ignoredActions:[H.a,H.f,H.b,H.c,H.d,H.e]}}),devTools:!1}),X={store:T,persistor:Object(H.h)(T)},R=n(21);r.a.render(Object(j.jsx)(O.a,{store:X.store,children:Object(j.jsx)(R.a,{loading:null,persistor:X.persistor,children:Object(j.jsx)(z,{})})}),document.querySelector("#root"))},7:function(t,e,n){t.exports={form:"ContactForm_form__1PRJS",button:"ContactForm_button__1UAI9",input:"ContactForm_input__3TzFP"}}},[[39,1,2]]]);
//# sourceMappingURL=main.8f122048.chunk.js.map