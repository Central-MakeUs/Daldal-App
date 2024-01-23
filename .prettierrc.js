module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',

  endOfLine: "auto",
	tabWidth: 2,
	semi: true,
	printWidth: 80,
	jsxSingleQuote: false,
	quoteProp: "as-needed",
	useTabs: true,
	htmlWhitespaceSensitivity: "css",
	embeddedLanguageFormatting: "auto",
	insertPragma: false,
	requirePragma: false,
	vueIndentScriptAndStyle: false,
	overrides: [
		{
			files: ".prettierrc",
			options: { "parser": "json" }
		}
	]
};
