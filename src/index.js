import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

import './style.scss';

const title = 'My new react project fromdasd scratch ';

ReactDOM.render(
	<div>
		{title}

		<button type="button" className="btn btn-danger">
			Hello
		</button>
	</div>,

	document.getElementById('app'),
);

module.hot.accept();
