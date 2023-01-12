#!/usr/bin/env bash

# Update Angular (see `ng update --help`)
ng update @angular/cli @angular/core --create-commits --force
ng update @angular/material @angular/cdk --create-commits --force

# Update node modules (see `npm help update`)
npm update
