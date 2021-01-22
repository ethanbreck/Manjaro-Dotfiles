#!/bin/bash
sudo pacman-db-upgrade && sync
sudo systemctl enable fstrim.timer

sudo pacman -Syyu
sudo pacman -S --needed < packages.txt
pacaur -S --needed < aur-pacs.txt
