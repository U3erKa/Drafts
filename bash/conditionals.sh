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

command=/usr/bin/htop

if [ -f $command ]; then
  echo "$command is found, running..."
elif [ -f $(which htop) ]; then
  echo "$command found elsewhere, running..."
  command=$(which htop)
else
  echo "$command not found, installing..."
  sudo apt update && sudo apt install -y htop
  command=$(which htop)
fi

$command
