import React from 'react';
import ReactDOM from 'react-dom';

var DatgulList = React.createClass ({
    render: function () {
        return(
			<div className="datgul_list">
				<table className="datgul_list_table">
					<tbody>
						<tr>
						<th>
							<img src={this.props.content[0]} className="datgul_list_img" />
						</th>
						<td>
							{this.props.content[1]}
						</td>
						<td>
							{this.props.content[2]}
						</td>
						<td>
							{this.props.content[3]}
						</td>
						</tr>
					</tbody>
				</table>
				<br />
				{this.props.content[4]}
			</div>
        );
    }
});

export default DatgulList;