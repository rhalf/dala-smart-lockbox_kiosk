# dsl-kiosk

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# Deployment

export DISPLAY=:0.0
google-chrome --kiosk --app=http://localhost:80 --disable-pinch
systemctl restart nginx
