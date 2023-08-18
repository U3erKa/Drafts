#!/bin/bash

mynum=300

if [ $mynum -eq 200 ]; then
  echo "The first condition is true"
elif [ $mynum -eq 300 ]; then
  echo "The other condition is true"
else
  echo "The condition is false"
fi

if [ ! $mynum -eq 200 ]; then
  echo "The first negative condition is true"
elif [ $mynum -ne 300 ]; then
  echo "The other negative condition is true"
fi

if [ -f ./hello.sh ]; then
  echo "File ./hello.sh exists"
else
  echo "File ./hello.sh does not exist"
fi

my_command=htop

if command -v $my_command ; then
  echo "$my_command is found, running..."
elif [ -f $(which htop) ]; then
  echo "$my_command found elsewhere, running..."
  my_command=$(which htop)
else
  echo "$my_command not found, installing..."
  sudo apt update && sudo apt install -y $my_command
  my_command=$(which htop)
fi

$my_command
