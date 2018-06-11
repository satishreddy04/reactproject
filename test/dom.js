// Here we are setting up the Pseudo broswer environment for react
/* React Componenet  React components need some kind of artificial browser environment, 
because they render HTML in the browser’s DOM. Since the tests are not executed in a real browser,
 you need to setup the minimal environment for the component tests yourself. 
 That’s why you need to install jsdom   */

import { JSDOM } from 'jsdom';

const { window } = new JSDOM('<!doctype html><html><body></body></html');

function copyProps(src, target) {
	const props = Object.getOwnPropertyNames(src)
		.filter(prop => typeof target[prop] === 'undefined')
		.reduce(
			(result, prop) => ({
				...result,
				[prop]: Object.getOwnPropertyDescriptor(src, prop)
			}),
			{}
		);
	Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
	userAgent: 'node.js'
};

copyProps(window, global);
