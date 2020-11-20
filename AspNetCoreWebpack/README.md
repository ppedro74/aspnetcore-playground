# AspDotNetCoreAngular
ASP.NET CORE Angular App from scratch

## step 3
1. `yarn add typescript ts-loader --dev`
2. `yarn run tsc --init`
3. csproj: added `<TypeScriptCompileBlocked>true</TypeScriptCompileBlocked>`
4. webpack: add new entry for ts script and new html page

## step 2
1. `yarn init`
2. `yarn add webpack webpack-cli webpack-merge clean-webpack-plugin html-webpack-plugin --dev`
3. `yarn add gulp --dev`
4. webpack: configured with 2 x (entries, htmls) 
5. gulp: added gulpfile.js, added webpack-watch task
6. Visual Studio Task Runner Explorer bind wepack-watch task to Project Open
7. asp.net Startup: added StaticFiles, DefaultFiles
8. csproj: added Targets (exec tasks): RunBuildDebug, RunBuildProd

## step 1

visual studio 2019 > new ASP.NET core Web Application > Empty (Template)

1. Uncheck (Configure for HTTPS)
