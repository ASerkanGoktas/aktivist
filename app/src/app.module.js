import "../../node_modules/jquery/dist/jquery.min.js"
import "../../node_modules/popper.js/dist/popper.min.js"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import angular from 'angular'
import greetModule from './greet/greet.module';


angular.module('aktivist', [greetModule]);