import { eventEmitter } from 'components/emitter';

let currentlyHightlighted;

const findByTargetName = (name, htmlCollection) => {
	const children = Array.from(htmlCollection);
	if (children.length) {
		return children.find(x => (x.innerText === name)).children[0];	
	}
};

export const highlight = (mood, parent, colour, isOnLoad) => {
	const node = findByTargetName(mood, parent);
	if (isOnLoad) {
		node.style.backgroundColor = colour;
		currentlyHightlighted = node;
	} else {
		eventEmitter.emit('deHighlight', currentlyHightlighted);
		const node = findByTargetName(mood, parent);
		node.style.backgroundColor = colour;
		currentlyHightlighted = node;
	}
};
