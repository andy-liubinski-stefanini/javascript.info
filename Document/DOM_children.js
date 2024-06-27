// Look at this page:
/*
<html>
  <body>
    <div>Users:</div>
    <ul>
      <li>John</li>
      <li>Pete</li>
    </ul>
  </body>
</html>;
*/
// For each of the following, give at least one way of how to access them:

//     The <div> DOM node?
const divElement = document.getElementsByTagName("div");
//     The <ul> DOM node?
const unorderedList = document.querySelector("ul");
//     The second <li> (with Pete)?
const secondLi = document.querySelector("ul > li:nth-child(2)");
