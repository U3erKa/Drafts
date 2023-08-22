#!/bin/bash

package=htop
# package=notexist

sudo apt install $package >> package_install.log

echo "The last command's exit code is $?"

if [ $? -eq 0 ]; then
  echo "Package '$package' installation successful"
else
  echo "'$package' failed to install" >> package_install.log
fi
# caveat: after echo exit code is 0
exit
