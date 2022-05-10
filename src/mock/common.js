const getRandom = (min, max) => Math.floor( Math.random() * (max + 1 - min) + min );

const generateId = () => Date.now() + parseInt(Math.random() * 1000, 10);

export { getRandom, generateId };
