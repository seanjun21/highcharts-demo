import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const optionA = {
  title: {
    text: 'Line'
  },
  series: [{
    data: [1, 2, 3]
  }]
}

const optionB = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Bar'
  },
  series: [{
    data: [1, 2, 3]
  }]
}

const optionC = {
  chart: {
    type: 'pie'
  },
  title: {
    text: 'Pie'
  },
  series: [{
    data: [1, 2, 3]
  }]
}

const App = () => <div>
  <HighchartsReact
    highcharts={Highcharts}
    options={optionA}
  />
  <HighchartsReact
    highcharts={Highcharts}
    options={optionB}
  />
  <HighchartsReact
    highcharts={Highcharts}
    options={optionC}
  />
</div>

render(<App />, document.getElementById('root'))
