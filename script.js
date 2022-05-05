
'use strict';

function Header() {
  return React.createElement(
    "div",
    { "class": "container-fluid" },
    React.createElement(
      "div",
      { "class": "row" },
      React.createElement(
        "div",
        { "class": "col-6 col-md-10" },
        React.createElement(
          "div",
          { "class": "dropdown" },
          React.createElement(
            "button",
            { "class": "btn btn-secondary dropdown-toggle", type: "button", id: "dropdownMenuButton1", "data-bs-toggle": "dropdown", "aria-expanded": "false" },
            "Dropdown button"
          ),
          React.createElement(
            "ul",
            { "class": "dropdown-menu", "aria-labelledby": "dropdownMenuButton1" },
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { "class": "dropdown-item", href: "#" },
                "Action"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { "class": "dropdown-item", href: "#" },
                "Another action"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { "class": "dropdown-item", href: "#" },
                "Something else here"
              )
            )
          )
        )
      ),
      React.createElement(
        "div",
        { "class": "col-6 col-md-2" },
        React.createElement(
          "button",
          { "class": "btn btn-sm" },
          "\u0412\u043E\u0439\u0442\u0438"
        ),
        React.createElement(
          "button",
          { "class": "btn btn-sm btn-primary" },
          "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
        )
      )
    )
  );
}
var domContainer = document.getElementById("root");
ReactDOM.render(React.createElement(Header, null), domContainer);