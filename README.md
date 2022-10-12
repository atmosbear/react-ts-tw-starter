# How do I use this thing?
It's not bad, I promise! Just run these commands in the terminal while in the folder. 
Don't be afraid to make a mistake, you can always re-clone this!
### To install:
> `npm install`
### To run:
> `npm start`
### To test (with hot reloading):
> `npm test`
### To test once (without hot reloading):
> `npm test-once`

------------
# FAQ
### Q: Why?
A: Because I felt it would be nice to optimize the structure to my liking instead of relying on create react app; CRA is just so bloated. Typescript already adds an extra 60 MB, I don't need all the dependencies that I won't use! For example, I don't enjoy the slowness of rollup, so Vite is just incredible.

### Q: How do I make my own version of this with different dependencies and stuff because I don't want to use all of this?
A: Instead of running `npm install vite vitest tailwindcss...` etc, run `npm install whatever-you-want-to-add`!

### Q: How do I make tests with vitest?
For one, the file must end with .test.ts or .test.tsx. And for the rest, you should check it out on their github!

### Q: How did you make this?

# HOW I CREATED MY OWN VERSION OF REACT SO THAT I COULD STOP RELYING ON CRA (aka how I created this repo)
1. open a new blank folder in VSC
2. run `npm init` and follow the prompt
3. create an index html:

~~~~~~~~~~~INDEX.HTML~~~~~~~~~
	<!DOCTYPE html>

	<head>
		<script type="module" src="Start.tsx"></script>
		<title>Template</title>
	</head>

	<body>
		<div id="root"></div>
	</body>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
4. and a Start.tsx (or whatever you named your SRC within the index.html):
~~~~~~~~~~~Start.tsx~~~~~~~~~~~
	/* eslint-disable */
	import {createRoot} from "react-dom/client"
	import React from "react"
	export default function Start(): JSX.Element {
		return (
			<div className="bg-blue-600">Hello!</div>
		)
	}
	const root = createRoot(document.getElementById("root"))
	root.render(<Start></Start>)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
5. run the install command. The last two are dependencies of tailwind. You can modify anything you'd like!: <br><br>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	npm install --save react react-dom vite vitest typescript tailwindcss eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin @types/react @types/react-dom postcss autoprefixer
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 6. create the tailwind.config.cjs and postcss.config.cjs with the command `npx tailwindcss init -p`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

7. and edit tailwind.config.js by doing this instead of the empty content array:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  "content: [
    "./index.html",
    "./WHEREVERYOUPUTYOURSOURCES/**/*.{js,ts,jsx,tsx}",
  ],"
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

8. create a CSS file for your Start:
~~~~~~~~~~~Start.css~~~~~~~~~~~~~~
	@import 'tailwindcss/base';
	@import 'tailwindcss/components';
	@import 'tailwindcss/utilities';
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
9. in package.json's scripts section, add 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
"start": "vite dev", "test": "npx vitest", "run once": "npx vitest run"
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

10. TS needs a config file; create it:
~~~~~~~~~~~tsconfig.json~~~~~~~~~~~
	{
		"compilerOptions": {
			"strictNullChecks": true,
			"esModuleInterop": true,
			"alwaysStrict": true,
			"jsx": "react",
			"allowJs": false
		},
		"include": [
			"**/*.ts",
			"**/*.tsx",
			"**/*.js",
			"**/*.jsx"
		],
		"exclude": [
			"./node_modules"
		]
	}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
11. and lastly, we need a super big .eslintrc file! I love strict rules, so :)
~~~~~~~~~~~.eslintrc~~~~~~~~~~~.
	{
		"root": true,
		"extends": [],
		"plugins": [
			"@typescript-eslint/eslint-plugin"
		],
		"parser": "@typescript-eslint/parser",
		"parserOptions": {
			"env": {
				"es6": true
			},
			"ecmaFeatures": {
				"jsx": true
			},
			"sourceType": "module",
			"ecmaVersion": 2022,
			"tsconfigRootDir": ".",
			"project": [
				"tsconfig.json"
			]
		},
		"rules": {
			"@typescript-eslint/explicit-function-return-type": "off",
			"no-restricted-imports": "off",
			"prefer-template": "off",
			"no-console": "off",
			"semi": "off",
			"complexity": "off",
			"max-classes-per-file": "off",
			"no-alert": "off",
			"no-loop-func": "error",
			"no-magic-numbers": "error",
			"symbol-description": "error",
			"prefer-destructuring": "error",
			"no-useless-constructor": "error",
			"prefer-rest-params": "error",
			"prefer-spread": "error",
			"arrow-body-style": "error",
			"arrow-parens": ["error","always"],
			"arrow-spacing": ["error",{"before": true,"after": true}],
			"constructor-super": "error",
			"generator-star-spacing": "error",
			"no-class-assign": "error",
			"no-confusing-arrow": "error",
			"no-const-assign": "error",
			"no-dupe-class-members": "error",
			"no-duplicate-imports": "off",
			"no-new-symbol": "error",
			"no-this-before-super": "error",
			"no-useless-computed-key": "error",
			"no-useless-rename": "error",
			"no-var": "error",
			"object-shorthand": ["error","always"],
			"prefer-arrow-callback": "error",
			"prefer-const": "error",
			"require-yield": "error",
			"rest-spread-spacing": ["error","never"],
			"sort-imports": ["error",{"ignoreCase": true,"ignoreDeclarationSort": false,"ignoreMemberSort": false,"memberSyntaxSortOrder": ["all","multiple","single","none"],
					"allowSeparatedGroups": false}],
			"template-curly-spacing": ["error","never"],
			"yield-star-spacing": "error",
			"for-direction": "error",
			"getter-return": "error",
			"no-async-promise-executor": "error",
			"no-await-in-loop": "error",
			"no-compare-neg-zero": "error",
			"no-cond-assign": "error",
			"no-constant-condition": "error",
			"no-control-regex": "error",
			"no-debugger": "error",
			"no-dupe-args": "error",
			"no-dupe-else-if": "error",
			"no-dupe-keys": "error",
			"no-duplicate-case": "error",
			"no-empty": "error",
			"no-empty-character-class": "error",
			"no-ex-assign": "error",
			"no-extra-boolean-cast": ["error",{"enforceForLogicalOperands": true}],
			"no-extra-parens": "error",
			"no-extra-semi": "error",
			"no-func-assign": "error",
			"no-import-assign": "error",
			"no-inner-declarations": "error",
			"no-invalid-regexp": "error",
			"no-irregular-whitespace": "error",
			"no-loss-of-precision": "error",
			"no-misleading-character-class": "error",
			"no-obj-calls": "error",
			"no-promise-executor-return": "error",
			"no-prototype-builtins": "error",
			"no-regex-spaces": "error",
			"no-setter-return": "error",
			"no-sparse-arrays": "error",
			"no-template-curly-in-string": "error",
			"no-unexpected-multiline": "error",
			"no-unreachable": "error",
			"no-unreachable-loop": "error",
			"no-unsafe-finally": "error",
			"no-unsafe-negation": "error",
			"no-useless-backreference": "error",
			"require-atomic-updates": "error",
			"use-isnan": "error",
			"valid-typeof": "error",
			"accessor-pairs": ["error",{"setWithoutGet": true,"enforceForClassMembers": true}],
			"array-callback-return": "error",
			"block-scoped-var": "error",
			"class-methods-use-this": "error",
			"consistent-return": "error",
			"curly": "error",
			"default-case": "error",
			"default-case-last": "error",
			"default-param-last": "error",
			"dot-location": ["error","property"],
			"dot-notation": "error",
			"eqeqeq": "error",
			"grouped-accessor-pairs": ["error","setBeforeGet"],
			"guard-for-in": "error",
			"no-caller": "error",
			"no-case-declarations": "error",
			"no-constructor-return": "error",
			"no-div-regex": "error",
			"no-else-return": "error",
			"no-empty-function": "error",
			"no-empty-pattern": "error",
			"no-eq-null": "error",
			"no-eval": "error",
			"no-extend-native": "error",
			"no-extra-bind": "error",
			"no-extra-label": "error",
			"no-fallthrough": "error",
			"no-floating-decimal": "error",
			"no-global-assign": "error",
			"no-implicit-coercion": "error",
			"no-implicit-globals": "off",
			"no-implied-eval": "error",
			"no-invalid-this": "error",
			"no-iterator": "error",
			"no-labels": "error",
			"no-lone-blocks": "error",
			"no-multi-spaces": "error",
			"no-new": "error",
			"no-new-func": "error",
			"no-new-wrappers": "error",
			"no-octal": "error",
			"no-octal-escape": "error",
			"no-param-reassign": "error",
			"no-proto": "error",
			"no-redeclare": "error",
			"no-shadow": "error",
			"no-restricted-properties": "error",
			"no-return-assign": "error",
			"no-return-await": "error",
			"no-script-url": "error",
			"no-self-assign": "error",
			"no-self-compare": "error",
			"no-sequences": "error",
			"no-throw-literal": "error",
			"no-unmodified-loop-condition": "error",
			"no-unused-expressions": "warn",
			"no-unused-labels": "warn",
			"no-unused-vars": "warn",
			"no-useless-call": "error",
			"no-useless-catch": "error",
			"no-useless-concat": "error",
			"no-useless-escape": "error",
			"no-useless-return": "error",
			"no-void": "error",
			"no-warning-comments": "error",
			"no-with": "error",
			"no-multi-str": "error",
			"prefer-named-capture-group": "error",
			"prefer-promise-reject-errors": "error",
			"prefer-regex-literals": "error",
			"radix": "error",
			"require-await": "error",
			"require-unicode-regexp": "error",
			"vars-on-top": "off",
			"wrap-iife": "error",
			"yoda": "error",
			"strict": "off",
			"init-declarations": "off",
			"no-delete-var": "off",
			"no-label-var": "off",
			"no-restricted-globals": "error",
			"no-shadow-restricted-names": "error",
			"no-undef": "off",
			"no-undef-init": "error",
			"no-undefined": "error",
			"no-use-before-define": "error",
			"array-bracket-newline": "error",
			"array-bracket-spacing": "error",
			"array-element-newline": "off",
			"block-spacing": "error",
			"brace-style": "error",
			"camelcase": "error",
			"capitalized-comments": ["off","always"],
			"comma-dangle": ["error","always-multiline"],
			"comma-spacing": "error",
			"comma-style": "error",
			"computed-property-spacing": "error",
			"consistent-this": "error",
			"eol-last": "error",
			"func-call-spacing": "error",
			"func-name-matching": "error",
			"func-names": "error",
			"func-style": ["error","declaration"],
			"function-call-argument-newline": ["error","never"],
			"function-paren-newline": ["error","never"],
			"id-denylist": "error",
			"id-length": "error",
			"id-match": "error",
			"implicit-arrow-linebreak": "error",
			"indent": "off",
			"key-spacing": "error",
			"keyword-spacing": "error",
			"line-comment-position": "off",
			"linebreak-style": "error",
			"lines-around-comment": "off",
			"lines-between-class-members": "error",
			"max-depth": "off",
			"max-len": "off",
			"max-lines": "off",
			"max-lines-per-function": "off",
			"max-nested-callbacks": "off",
			"max-params": "off",
			"max-statements": "off",
			"max-statements-per-line": "off",
			"multiline-comment-style": "off",
			"multiline-ternary": "error",
			"new-cap": "error",
			"new-parens": "error",
			"newline-per-chained-call": "error",
			"no-array-constructor": "error",
			"no-bitwise": "error",
			"no-continue": "error",
			"no-inline-comments": "off",
			"no-lonely-if": "error",
			"no-mixed-operators": "error",
			"no-mixed-spaces-and-tabs": "error",
			"no-multi-assign": "error",
			"no-multiple-empty-lines": "error",
			"no-negated-condition": "off",
			"no-nested-ternary": "error",
			"no-new-object": "error",
			"no-plusplus": "error",
			"no-restricted-syntax": "error",
			"no-tabs": "off",
			"no-ternary": "off",
			"no-trailing-spaces": "error",
			"no-underscore-dangle": "error",
			"no-unneeded-ternary": "error",
			"no-whitespace-before-property": "error",
			"nonblock-statement-body-position": "off",
			"object-curly-newline": "off",
			"object-curly-spacing": "off",
			"object-property-newline": "off",
			"one-var": "off",
			"one-var-declaration-per-line": "off",
			"operator-assignment": "off",
			"operator-linebreak": "off",
			"padded-blocks": "off",
			"padding-line-between-statements": "off",
			"prefer-exponentiation-operator": "off",
			"prefer-object-spread": "off",
			"quote-props": "off",
			"quotes": ["error","double"],
			"semi-spacing": "off",
			"semi-style": "off",
			"sort-keys": "off",
			"sort-vars": "off",
			"space-before-blocks": "off",
			"space-before-function-paren": ["error","never"],
			"space-in-parens": "error",
			"space-infix-ops": "error",
			"space-unary-ops": "error",
			"spaced-comment": ["off","always"],
			"jsx-quotes": ["error","prefer-double"],
			"switch-colon-spacing": "error",
			"template-tag-spacing": "error",
			"unicode-bom": "off",
			"wrap-regex": "error"
		},
		"overrides": [{"files": ["*.ts","*.mts","*.cts","*.tsx"],
				"excludedFiles": [],
				"rules": {
					"@typescript-eslint/typedef": ["error", {"arrayDestructuring": true, "arrowParameter": true,
							"memberVariableDeclaration": true,
							"objectDestructuring": true,
							"parameter": true,
							"propertyDeclaration": true,
							"variableDeclaration": true,
							"variableDeclarationIgnoreFunction": true}],
					"@typescript-eslint/explicit-function-return-type": "error",
					"@typescript-eslint/adjacent-overload-signatures": "error",
					"@typescript-eslint/ts-comment": "off",
					"@typescript-eslint/ban-types": "error",
					"@typescript-eslint/ban-tslint-comment": "error",
					"@typescript-eslint/class-literal-property-style": "warn",
					"@typescript-eslint/consistent-generic-constructors": ["error","type-annotation"],
					"@typescript-eslint/consistent-indexed-object-style": ["error","record"],
					"@typescript-eslint/consistent-type-assertions": ["error",{"assertionStyle": "as","objectLiteralTypeAssertions": "never"}],
					"@typescript-eslint/array-type": ["error",{"default": "array"}],
					"@typescript-eslint/consistent-type-definitions": ["error","type"],
					"@typescript-eslint/consistent-type-exports": ["error",{"fixMixedExportsWithInlineTypeSpecifier": true}],
					"@typescript-eslint/await-thenable": "error",
					"@typescript-eslint/consistent-type-imports": ["error",{"prefer": "type-imports","disallowTypeAnnotations": true}],
					"@typescript-eslint/explicit-member-accessibility": "error",
					"@typescript-eslint/explicit-module-boundary-types": "error",
					"@typescript-eslint/member-ordering": "error",
					"@typescript-eslint/method-signature-style": ["error","property"],
					"@typescript-eslint/naming-convention": "off",
					"@typescript-eslint/no-base-to-string": "error",
					"@typescript-eslint/no-confusing-non-null-assertion": "error",
					"@typescript-eslint/no-confusing-void-expression": "error",
					"@typescript-eslint/no-duplicate-enum-values": "error",
					"@typescript-eslint/no-dynamic-delete": "error",
					"@typescript-eslint/no-empty-interface": "error",
					"@typescript-eslint/no-explicit-any": "error",
					"@typescript-eslint/no-extra-non-null-assertion": "error",
					"@typescript-eslint/no-extraneous-class": "error",
					"@typescript-eslint/no-floating-promises": "error",
					"@typescript-eslint/no-for-in-array": "error",
					"@typescript-eslint/no-inferrable-types": "off",
					"@typescript-eslint/no-invalid-void-type": "error",
					"@typescript-eslint/no-meaningless-void-operator": "error",
					"@typescript-eslint/no-misused-new": "error",
					"@typescript-eslint/no-misused-promises": "error",
					"@typescript-eslint/no-namespace": "error",
					"@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
					"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
					"@typescript-eslint/no-non-null-assertion": "error",
					"@typescript-eslint/no-redundant-type-constituents": "error",
					"@typescript-eslint/no-require-imports": "error",
					"@typescript-eslint/no-this-alias": "error",
					"@typescript-eslint/no-type-alias": "error",
					"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
					"@typescript-eslint/no-unnecessary-condition": "error",
					"@typescript-eslint/no-unnecessary-qualifier": "error",
					"@typescript-eslint/no-unnecessary-type-arguments": "error",
					"@typescript-eslint/no-unnecessary-type-assertion": "error",
					"@typescript-eslint/no-unnecessary-type-constraint": "error",
					"@typescript-eslint/no-unsafe-argument": "error",
					"@typescript-eslint/no-unsafe-assignment": "error",
					"@typescript-eslint/no-unsafe-call": "error",
					"@typescript-eslint/no-unsafe-member-access": "error",
					"@typescript-eslint/no-unsafe-return": "error",
					"@typescript-eslint/no-useless-empty-export": "warn",
					"@typescript-eslint/no-var-requires": "error",
					"@typescript-eslint/non-nullable-type-assertion-style": "warn",
					"@typescript-eslint/parameter-properties": ["error",{"allow": ["readonly","private","protected","public","private readonly","protected readonly","public readonly"],"prefer": "parameter-property"}],
					"@typescript-eslint/prefer-as-const": "error",
					"@typescript-eslint/prefer-enum-initializers": "warn",
					"@typescript-eslint/prefer-for-of": "error",
					"@typescript-eslint/prefer-function-type": "off",
					"@typescript-eslint/prefer-includes": "error",
					"@typescript-eslint/prefer-literal-enum-member": "error",
					"@typescript-eslint/prefer-namespace-keyword": "error",
					"@typescript-eslint/prefer-nullish-coalescing": "error",
					"@typescript-eslint/prefer-optional-chain": "error",
					"@typescript-eslint/prefer-readonly": "error",
					"@typescript-eslint/prefer-readonly-parameter-types": "error",
					"@typescript-eslint/prefer-reduce-type-parameter": "error",
					"@typescript-eslint/prefer-regexp-exec": "error",
					"@typescript-eslint/prefer-return-this-type": "error",
					"@typescript-eslint/prefer-string-starts-ends-with": "error",
					"@typescript-eslint/prefer-ts-expect-error": "off",
					"@typescript-eslint/promise-function-async": "error",
					"@typescript-eslint/require-array-sort-compare": "error",
					"@typescript-eslint/restrict-plus-operands": "error",
					"@typescript-eslint/restrict-template-expressions": "error",
					"@typescript-eslint/sort-type-union-intersection-members": "error",
					"@typescript-eslint/strict-boolean-expressions": "error",
					"@typescript-eslint/switch-exhaustiveness-check": "error",
					"@typescript-eslint/triple-slash-reference": "warn",
					"@typescript-eslint/unbound-method": "error",
					"@typescript-eslint/unified-signatures": "error",
					"default-param-last": "off",
					"@typescript-eslint/default-param-last": "warn",
					"dot-notation": "off",
					"@typescript-eslint/dot-notation": "warn",
					"init-declarations": "off",
					"@typescript-eslint/init-declarations": "warn",
					"no-array-constructor": "off",
					"@typescript-eslint/no-array-constructor": "error",
					"no-dupe-class-members": "off",
					"@typescript-eslint/no-dupe-class-members": "error",
					"no-empty-function": "off",
					"@typescript-eslint/no-empty-function": "error",
					"no-extra-semi": "off",
					"@typescript-eslint/no-extra-semi": "error",
					"no-implied-eval": "off",
					"@typescript-eslint/no-implied-eval": "error",
					"no-invalid-this": "off",
					"@typescript-eslint/no-invalid-this": "warn",
					"no-loop-func": "off",
					"@typescript-eslint/no-loop-func": "warn",
					"no-loss-of-precision": "off",
					"@typescript-eslint/no-loss-of-precision": "error",
					"no-magic-numbers": "off",
					"@typescript-eslint/no-magic-numbers": "error",
					"no-redeclare": "off",
					"@typescript-eslint/no-redeclare": "error",
					"no-restricted-imports": "off",
					"@typescript-eslint/no-restricted-imports": "error",
					"no-shadow": "off",
					"@typescript-eslint/no-shadow": "error",
					"no-throw-literal": "off",
					"@typescript-eslint/no-throw-literal": "error",
					"no-unused-expressions": "off",
					"@typescript-eslint/no-unused-expressions": "warn",
					"no-unused-vars": "off",
					"@typescript-eslint/no-unused-vars": "warn",
					"no-use-before-define": "off",
					"@typescript-eslint/no-use-before-define": "warn",
					"no-useless-constructor": "off",
					"@typescript-eslint/no-useless-constructor": "warn",
					"require-await": "off",
					"@typescript-eslint/require-await": "error",
					"no-return-await": "off",
					"@typescript-eslint/return-await": "warn",
					"indent": "off",
					"brace-style": "off",
					"comma-dangle": "off",
					"comma-spacing": "off",
					"func-call-spacing": "off",
					"no-extra-parens": "off",
					"keyword-spacing": "off",
					"lines-between-class-members": "off",
					"object-curly-spacing": "off",
					"padding-line-between-statements": "off",
					"quotes": "off",
					"space-before-blocks": "off",
					"semi": "off",
					"space-infix-ops": "off",
					"space-before-function-paren": "off",
					"@typescript-eslint/padding-line-between-statements": "off",
					"@typescript-eslint/semi": "off",
					"@typescript-eslint/space-before-blocks": "off",
					"@typescript-eslint/quotes": ["error","double"],
					"@typescript-eslint/object-curly-spacing": "error",
					"@typescript-eslint/member-delimiter-style": "error",
					"@typescript-eslint/lines-between-class-members": "error",
					"@typescript-eslint/no-extra-parens": "error",
					"@typescript-eslint/keyword-spacing": "error",
					"@typescript-eslint/indent": "off",
					"@typescript-eslint/brace-style": "error",
					"@typescript-eslint/comma-dangle": ["error","always-multiline"],
					"@typescript-eslint/comma-spacing": "error",
					"@typescript-eslint/func-call-spacing": "error",
					"@typescript-eslint/space-before-function-paren": ["error","never"],
					"@typescript-eslint/space-infix-ops": "error",
					"@typescript-eslint/type-annotation-spacing": ["warn",{"before": false,"after": true}]
				}
			}
		]
	}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
12. run `npm start`
Done!
