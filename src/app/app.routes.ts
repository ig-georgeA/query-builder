import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { AddAComponent } from './add-a/add-a.component';
import { AComponent } from './a/a.component';
import { AAndNewConditionComponent } from './a-and-new-condition/a-and-new-condition.component';
import { AAndBComponent } from './a-and-b/a-and-b.component';
import { AAndBAndNewGroupComponent } from './a-and-b-and-new-group/a-and-b-and-new-group.component';
import { AAndBAndCComponent } from './a-and-b-and-c/a-and-b-and-c.component';
import { AAndBAndChoverComponent } from './a-and-b-and-chover/a-and-b-and-chover.component';
import { AAndBAndCOrDComponent } from './a-and-b-and-c-or-d/a-and-b-and-c-or-d.component';
import { AOrBAndCOrDOrDropComponent } from './a-or-b-and-c-or-d-or-drop/a-or-b-and-c-or-d-or-drop.component';
import { SubqueryAAndBAndCOrDAndEComponent } from './subquery-a-and-b-and-c-or-d-and-e/subquery-a-and-b-and-c-or-d-and-e.component';
import { SubqueryCollapsedComponent } from './subquery-collapsed/subquery-collapsed.component';
import { InvalidComponent } from './invalid/invalid.component';

export const routes: Routes = [
  { path: '', redirectTo: 'add-a', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  {
    path: 'add-a',
    component: AddAComponent,
    data: {
      text: '(add A)'
    }
  },
  {
    path: 'a',
    component: AComponent,
    data: {
      text: '(A)'
    }
  },
  {
    path: 'a-and-new-condition',
    component: AAndNewConditionComponent,
    data: {
      text: '(A and new condition)'
    }
  },
  {
    path: 'a-and-b',
    component: AAndBComponent,
    data: {
      text: '(A and B )'
    }
  },
  {
    path: 'a-and-b-and-new-group',
    component: AAndBAndNewGroupComponent,
    data: {
      text: '(A and B and new group)'
    }
  },
  {
    path: 'a-and-b-and-c',
    component: AAndBAndCComponent,
    data: {
      text: '(A and B and (C))'
    }
  },
  {
    path: 'a-and-b-and-chover',
    component: AAndBAndChoverComponent,
    data: {
      text: '(A and B and (C+hover))'
    }
  },
  {
    path: 'a-and-b-and-c-or-d',
    component: AAndBAndCOrDComponent,
    data: {
      text: '(A and B and (C or D))'
    }
  },
  {
    path: 'a-or-b-and-c-or-d-or-drop',
    component: AOrBAndCOrDOrDropComponent,
    data: {
      text: '((A or B) and  (C or D or drop))'
    }
  },
  {
    path: 'subquery-a-and-b-and-c-or-d-and-e',
    component: SubqueryAAndBAndCOrDAndEComponent,
    data: {
      text: '(subquery (A and B and (C or D)) and E'
    }
  },
  {
    path: 'subquery-collapsed',
    component: SubqueryCollapsedComponent,
    data: {
      text: 'subquery collapsed'
    }
  },
  {
    path: 'invalid',
    component: InvalidComponent,
    data: {
      text: 'invalid'
    }
  },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
