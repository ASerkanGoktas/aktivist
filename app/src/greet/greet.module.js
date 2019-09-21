import angular from 'angular';
import GreetComponent from './greet.component';

let module = angular.module('greet', []).component('greet', GreetComponent);

export default module.name;