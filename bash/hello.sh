#!/bin/bash

echo "Hello world!"
echo "Current working directory:"
pwd
echo ''

myname="Viktor"
echo "My name is $myname."
echo ''

mood="awesome"
echo "Linux is $mood"
echo "JavaScript is $mood"
echo "Typescript is $mood"
echo ''

files=$(ls)
echo "Contents of this directory:"
echo $files

now=$(date)
echo "Current date & time:"
echo $now
