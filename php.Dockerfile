# This is Dockerfile for PHP container inside docker-compose.yml
FROM php:7.3.27-fpm-alpine

RUN docker-php-ext-install pdo pdo_mysql
