Test Cosmo
==========

-   This package also requires a copy of the `rpc_zmq` source code.  Move into the `src` directory and clone a copy from github:

    $ cd src  
    $ git clone git@github.com:lzkelley/rpc_zmq.git

-   The NPM modules must be installed before usage:

    $ cd test-cosmo
    $ npm install .

-   Run with:

    $ npm start


Building / Distribution
-----------------------
-   Package python api layer using pyinstaller,

    $ pyinstaller pyapi.py --distpath . -F
    $ rm -r build/
    $ rm pyapi.spec


Resources
---------
-   https://github.com/fyears/electron-python-example
-   https://medium.com/how-to-electron/a-complete-guide-to-packaging-your-electron-app-1bdc717d739f
-   https://www.electron.build/configuration/configuration
-   https://www.npmjs.com/package/fix-path
