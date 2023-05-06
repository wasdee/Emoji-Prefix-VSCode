interface Emoji {
	readonly emoji: any;
	readonly description: any;
}

let EmojiLog: Array<Emoji> = [
	{
		emoji: '🌟ADD:',
		description: 'Add something entirely new.',
	},
	{
		emoji: '💡IMPROVE:',
		description: 'Improve piece of code like refactoring.',
	},
	{
		emoji: '🐛FIX:',
		description: 'Fix a bug — need I say more?',
	},
	{
		emoji: '📝NOTE:',
		description: 'Anything documentation related.',
	},
	{
		emoji: '🚀RELEASE:',
		description: 'Release a new version.',
	},
	{
		emoji: '🤖TEST:',
		description: 'Testing related commits.',
	},
	{
		emoji: '⚠️BREAK:',
		description: 'Change that breaks previous versions.',
	},
];
export default EmojiLog;
