@echo off

php -r "file_exists('.env') || copy('.env.example', '.env');"
php artisan key:generate

start npm install
start composer install --no-interaction
