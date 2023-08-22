#!/bin/bash

release_file=/etc/os-release

# if grep -q "debian" $release_file || grep -q "ubuntu" $release_file; then
if command -v apt > /dev/null; then
  # The host is based on Debian
  sudo apt update
  sudo apt dist-upgrade
elif command -v pacman > /dev/null; then
  # The host is based on Arch
  sudo pacman -Syu
fi
