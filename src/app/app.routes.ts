import { Routes } from '@angular/router';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Component } from '@angular/core';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';

export const routes: Routes = [
    {path: 'event-bind-example', component: EventBindExampleComponent},
    {path: 'for-directive-example', component: ForDirectiveExampleComponent},
    {path: '', component: WelcomeComponent},
    {path: 'component-input-example', component: ComponentInputExampleComponent}
    // {path: '', redirectTo: '/welcome', pathMatch: 'full'}
];
