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

# for i in 10 9 8 7 6 5 4 3 2 1 0; do
for i in {10..0}; do
  echo $i
  sleep 0.1
done

for file in logfiles/*.log; do
  tar -czvf $file.tar.gz $file
done
