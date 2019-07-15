import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {Bar, Line} from 'react-chartjs-2';
import { NativeSelect, Typography, Input } from '@material-ui/core';

let datasetValues = [1.5, 3.0, 8.0, 8.1, 5.6, 5.5, 10.0, 2.3, 4.5, 3.4, 10.4, 10.9];

@inject('store')
@observer
class CurrencyChart extends Component {
    state = {
       chartType: "line"
    }
    
    handleChange = event => {
      this.setState({ chartType: event.target.value });
    };
    

  render() {
		const { store: { currency: { rows } } } = this.props;

		let data = {
			labels: ['60', '55', '50', '45', '40', '35', '30', '25', '20', '15', '10', '5'],
			datasets: [
				{
					label: 'Currency dataset for US Dollar compared to Euro',
					backgroundColor: 'rgba(63,81,181,0.2)',
					borderColor: 'rgba(63,81,181,1)',
					borderWidth: 1,
					hoverBackgroundColor: 'rgba(63,81,181,0.4)',
					hoverBorderColor: 'rgba(63,81,181,1)',
					data: datasetValues
				}
			]
		};

		datasetValues.splice(0, 1);
		datasetValues.push(rows[0].now);

    return (
      <div style={{marginTop: 10}}>
				<div>
					<Typography variant="h4">Currency Chart</Typography>
					<NativeSelect
						style={{marginLeft: 5}}
						value={this.state.age}
						onChange={this.handleChange}
						input={<Input name="age" id="age-native-helper" />}
					>
            <option value="line">Line</option>
            <option value="bar">Bar</option>
          </NativeSelect>
				</div>

				<div>
					{this.state.chartType === "line" && (
						<Line
							redraw
							data={data}
							width={100}
							height={200}
							options={{
								maintainAspectRatio: false
							}}
						/>
					)}
				
				{this.state.chartType === "bar" && (
					<Bar
						redraw
						data={data}
						width={100}
						height={200}
						options={{
							maintainAspectRatio: false
						}}
					/> 
				)}
			 </div>
      </div>
    );
  }
}

export default CurrencyChart;