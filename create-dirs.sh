#!/bin/bash

DIRS=("fundamentos" "front-end" "back-end" "ciencia-da-computacao")
SUB_DIRS_FUN=("secao-01-unix-e-shell" "secao-02-git-github-e-internet" "secao-03-introducao-a-html-e-css")


for dirs in "${DIRS[@]}";do
    mkdir -pv "$dirs"
done

for sub_dirs in "${SUB_DIRS_FUN[@]}";do
    mkdir -pv "${DIRS[0]}/$sub_dirs"
done
