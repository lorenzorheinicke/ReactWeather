var React = require('React');

var About = React.createClass({
  render: function(){
    return (
      <div>
        <h1 className="text-center">About page</h1>
        <p>This is a weather application build on React.</p>
        <p>Here are some of the tools I used:</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the javascript framework used.
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = About;
