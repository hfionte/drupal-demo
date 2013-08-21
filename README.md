drupal-demo
===========

A demo Drupal site with circus mice

A database dump with the database content needed for the Mouse Circus website is located in sites/mysqldump/drupaldemo.sql

To get clean URLs working on my local computer, I needed to uncomment line 110 of .htaccess and change it to:
RewriteBase /~holly/drupal-demo
A similar fix might work on other localhoust setups.
