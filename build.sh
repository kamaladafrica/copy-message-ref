#!/bin/sh
WORK_DIR=$PWD
cd ${0%/*}
mkdir -p dist
cd src
zip -r ../dist/copy-message-ref@kamaladafrica.xpi ./*
cd $WORK_DIR