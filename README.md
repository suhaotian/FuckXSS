# FuckXSS
A react component **fuck XSS** wrap with DOMPurity 


## Usage

```shell
npm i dompurity --save
```

```js
import React from 'react'
import ReactDOM from 'react-dom'

import FuckXSS from './index'

class Demo extends React.Component {
  
  render(){
    return (
      <FuckXSS 
        className="content"  
        html={'<h1>hello moto!</h1>'}
      />
    )
  }
}

ReactDOM.render(document.getElementById('demo'), <Demo />)
```
