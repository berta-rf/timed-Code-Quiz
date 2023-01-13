let questions = [
	{
		title: 'Inside which HTML element do we put the JavaScript?',
		choices: {
            a: '<js>',
			b: '<script>',
			c: '<javascript>',
            d: '<scripting>',
        },
        correct: 'b',
	},
	{
		title: 'How do you write "hello World!" in an alert box?',
		choices: {
            a: 'msgBox("hello World!");',
			b: 'alertBox("hello World!");',
			c: 'alert("hello World!");',
            d: 'msg("hello World!");',
        },
        correct: 'c',
	},
	{
		title: 'How do you call a function named "myFunction"?',
		choices: {
			a: 'call function myFunction()',
			b: 'myFunction()',
			c: 'call myFunction()',
        },
        correct: 'b',
	},
    {
		title: 'How to write an IF statement in JavaScript?',
		choices: {
            a: 'if i = 5',
			b: 'if (i === 5)',
			c: 'if i = 5 then',
            d: 'if i == 5 then'
        },
        correct: 'b',
	},
	{
		title: 'How does a WHILE loop start?',
		choices: {
            a: 'while i = 1 to 10',
			b: 'while (i <= 10)',
			c: 'while (i <= 10; i++)',
        },
        correct: 'b',
	},
	{
		title: 'What is the correct JavaScript syntax to change the content of this HTML element "<p id="demo">This is a demonstration`</p>"?',
		choices: {
            a: ' document.getElementByName("p").innerHTML = "Hello World!";',
			b: ' #demo.innerHTML = "Hello World!";',
			c: ' document.getElementById("demo").innerHTML = "Hello World!";',
            d: ' document.getElement("p").innerHTML = "Hello World!";',
        },
        correct: 'c', 
	},
    {
		title: 'What is the correct way to write a JavaScript array?',
		choices: {
            a: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
			b: 'var colors = "red", "green", "blue"',
			c: 'var colors = ["red", "green", "blue"]',
            d: 'var colors = (1:"red", 2:"green", 3:"blue")',
        },
        correct: 'c,'
	},
	{
		title: 'Which event occurs when the user clicks on an HTML element?',
		choices: {
            a: 'onchange',
			b: 'onmouseover',
			c: 'onmouseclick',
            d: 'onclick',
        },
        correct: 'd',
	},
	{
		title: 'What will the following code return: Boolean(10 > 9)',
		choices: {
            a: 'false',
			b: 'NaN',
			c: 'true',
        },
        correct: 'c',
	},
    {
		title: 'How do you find the number with the highest value of x and y?',
		choices: {
            a: 'ceil(x, y)',
			b: 'Math.max(x, y)',
			c: 'Math.ceil(x, y)',
            d: 'top(x, y)'
        },
        correct: 'b',
	},
	{
		title: 'How can you add a comment in a JavaScript?',
		choices: {
            a: '//This is a comment',
			b: '<!--This is a comment-->',
			c: '-This is a comment-',
        },
        correct: 'a',
	},
	{
		title: 'Which function parses a string and returns an integer?',
		choices: {
            a: 'Integer.Parse()',
			b: 'In.Parse()',
			c: 'parseInt()',
            d: 'ParseIt()',
        },
        correct: 'c',
	},
];