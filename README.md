[![Stories in Ready](https://badge.waffle.io/federicoiosue/omni-notes-desktop.png?label=ready&title=Ready)](https://waffle.io/federicoiosue/omni-notes-desktop)
# Omni Notes Desktop

![](etc/img1.png "Notes' list")

This is the official desktop counterpart of the Android open-source note-taking app [Omni Notes](https://github.com/federicoiosue/Omni-Notes).
It's built on top [Electron](http://electron.atom.io) and [AngularJS](https://angularjs.org) technologies.

## Compatibility

The application is cross-platform and runs on Linux, Windows and Mac.

It currently has no backend and just uses JSONs to store and read data. So, **no sync is supported**, if you want to keep data updated through different platforms you have to use third-party synchronization applications.

## Development

### Environment
To download all the needed dependencies for the application to run, listed into the _package.json_ file use the command: ```npm install angular```

### Build
[Electron Packager](https://github.com/electron-userland/electron-packager) is needed to build the project into executable binary.
```
sudo npm install electron-packager -g
```

After that simply run ```electron-packager .``` command from inside the project app to build for your platform.

## Developed with love and passion by
* Federico Iosue - [Website](http://www.iosue.it/federico)

## License
The application is licensed under [GPL3](LICENSE.md) so, if you want to use it fully or any part of it you **have to** release the source code.
