var React = require('React');
var {Link} = require('react-router');

var Examples = React.createClass({
  render: function(){
    return (
      <div>
        <h1 className="text-center">Examples Page</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
          <li>
            <Link to="/?location=Bredasdorp">Bredasdorp</Link>
          </li>
          <li>
            <Link to="/?location=Stellenbosch">Stellenbosch</Link>
          </li>
        </ol>
      </div>
    );
  }
});

module.exports = Examples;
