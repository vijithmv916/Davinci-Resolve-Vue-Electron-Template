# Davinci-Resolve-Vue-Electron-Template
---------------------------------------


<div style="display:flex; justify-content: center; align-content: center">

<img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png" width="100px"/>
<h1 style="padding-top: 30px">+</h1>
<img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Electron_Software_Framework_Logo.svg" width="100px"/>
<h1 style="padding-top: 30px">+</h1>
<img src="https://vitejs.dev/logo-with-shadow.png" width="100px"/>

</div>

---
This repo make to simplify the development process for building the giving the davinci resolve workflow integration plugin
usually the plugin only using common js, here we using the webpack
make you own canges according to your needs.

using vite and vue js addon to the repository
### setup and install using this command

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build for production

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
# how to build the plugin
```bash
npm run resolve
```

please change the output location in the `webpack.config.js` before doing the above command.
