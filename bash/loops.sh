#!/bin/bash

i=0
while [ $i -lt 10 ]; do
  echo $i
  sleep 0.1
  i=$(($i + 1))
done
