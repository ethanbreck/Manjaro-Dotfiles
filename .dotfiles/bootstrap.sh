#!/bin/bash
sudo pacman-db-upgrade && sync
sudo systemctl enable fstrim.timer

sudo pacman -Syyu
sudo pacman -S --needed - < packages.txt

git clone https://aur.archlinux.org/pacaur.git
cd pacaur/
makepkg -si

cd .. 

pacaur -Syyu
pacaur -S --needed - <aur-pacs.txt
