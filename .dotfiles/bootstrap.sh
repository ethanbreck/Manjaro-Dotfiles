#!/bin/bash
sudo pacman-db-upgrade && sync
sudo systemctl enable fstrim.timer

/bin/bash ~/.dotfiles/appInstaller.sh

echo "Install overGrive from here: https://www.thefanclub.co.za/overgrive/installation-instructions-arch-linux"
