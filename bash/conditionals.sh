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
