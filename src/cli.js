import readlineSync from 'readline-sync';
export default function sayHey() {
	const username = readlineSync.question('*** May I have your name, stranger? ');
	return (`*** Well, Hello, ${username}`);
};