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

    $ pyinstaller pyapi.py --distpath . -F; rm -r build/; rm pyapi.spec

-   Installed astropy with:

    $ pip install git+https://github.com/astropy/astropy.git@v3.0rc1
    
    -   `pyinstaller` will build successfully with this, but it won't work with an error: https://github.com/astropy/astropy/issues/7052#issuecomment-356107406
    
    -   Also use the approach from: https://github.com/maartenbreddels/frozen_astropy/blob/8e40dd9318301d9dece9f1b438e432fb65a71e4b/frozen_astropy.py#L3-L29

Resources
---------
-   https://github.com/fyears/electron-python-example
-   https://medium.com/how-to-electron/a-complete-guide-to-packaging-your-electron-app-1bdc717d739f
-   https://www.electron.build/configuration/configuration
-   https://www.npmjs.com/package/fix-path
