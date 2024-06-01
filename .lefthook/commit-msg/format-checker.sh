#!/bin/bash

INPUT_FILE=$1
START_LINE=`head -n1 $INPUT_FILE`
PATTERN="^(Jira)-[[:digit:]]+: "
if ! [[ "$START_LINE" =~ $PATTERN ]]; then
  echo "Unsupported format, see example: Jira-123: Hello World"
  exit 1
fi