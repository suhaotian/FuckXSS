# FuckXSS
A react component wrap with DOMPurity 


## Usage

```shell
npm i dompurity --save
```

```jsx
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
