import * as $ from 'jquery';
declare const window: any;
window.$ = $;
import React    from 'react';
import ReactDOM from 'react-dom';


$(document).ready(doStuff);

function doStuff() {
  ReactDOM.render(
    <App answer={42}/>
    , $('#app')[0]);
}


type Props={answer: number};

class App extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }

  render = () => {
    return (
      <div>
      The answer is {this.props.answer}
      </div>
    );
  }
}

