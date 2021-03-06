import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class TableBody extends Component {
	renderCell = (item, column) => {
		if (column.content) return column.content(item);
		if (column.path === 'title')
			return <Link to={`/movies/${item._id}`}>{_.get(item, column.path)}</Link>;
		return _.get(item, column.path);
	};

	createKey = (item, column) => {
		return item._id + (column.label || column.key);
	};

	render() {
		const { data, columns } = this.props;
		return (
			<>
				<tbody>
					{data.map(item => (
						<tr key={item._id}>
							{columns.map(column => (
								<td key={this.createKey(item, column)}>
									{this.renderCell(item, column)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</>
		);
	}
}

export default TableBody;
