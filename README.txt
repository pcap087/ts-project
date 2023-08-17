1) Copiar y pegar en el archivo .gitignore. => https://www.toptal.com/developers/gitignore

2) Crear el archivo .editorconfig con lo siguiente:

	# Editor configuration, see https://editorconfig.org
	root = true

	[*]
	charset = utf-8
	indent_style = space
	indent_size = 2
	insert_final_newline = true
	trim_trailing_whitespace = true

	[*.ts]
	quote_type = single

	[*.md]
	max_line_length = off
	trim_trailing_whitespace = false

3)  En consola ejecutar lo siguiente:

	npm install typescript --save-dev
	o npm install typescript -D

	npx tsc --version (para saber la version de ts)


Compilación de archivos TypeScript desde Node.js
Para realizar el proceso de transpilación en Node.js, ejecutemos lo siguiente en la terminal:

npx tsc archivo_typescript.ts


Veamos el TSConfig.json
npx tsc --init

Podemos dejar un watch para que se ejecute cada vez que se modifique un archivo:
    npx tsc --watch

Si quieres detener el “watch” para que tus archivos no estén monitoreados, presiona:
    "Ctrl + S" luego confirma con "s" y enter.
    o ctrl + c
