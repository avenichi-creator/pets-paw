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
		'plugin:import/typescript',
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
	plugins: ['react', '@typescript-eslint', 'import', 'prettier'],
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
		'import/order': [
			'warn',
			{
				groups: ['external', 'internal', 'sibling', 'parent'],
				pathGroups: [
					{
						pattern: 'app',
						group: 'internal',
					},
					{
						pattern: 'entities/**',
						group: 'internal',
					},
					{
						pattern: 'features/**',
						group: 'internal',
					},
					{
						pattern: 'pages',
						group: 'internal',
					},
					{
						pattern: 'pages/**',
						group: 'internal',
					},
					{
						pattern: 'shared/config',
						group: 'internal',
					},
					{
						pattern: 'shared/ui',
						group: 'internal',
					},
					{
						pattern: 'widgets/**',
						group: 'internal',
					},
				],
				pathGroupsExcludedImportTypes: ['internal'],
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
	},
};
