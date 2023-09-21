module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'windows'],
		quotes: ['error', 'single'],
		semi: ['warn', 'always'],
		'eol-last': ['error', 'always'],
		'@typescript-eslint/no-unused-vars': ['warn'],
		'sort-imports': [
			'warn',
			{
				ignoreCase: true,
				ignoreDeclarationSort: true,
			},
		],
	},
};
