#!/bin/bash

i=0
while [ $i -lt 10 ]; do
  echo $i
  sleep 0.1
  i=$(($i + 1))
done

testfile=test.txt

touch $testfile
while [ -f $testfile ]; do
  echo "Temp file exists, waiting..."
  sleep 1
done
echo "Temp file is gone"
